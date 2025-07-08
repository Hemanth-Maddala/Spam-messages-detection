from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import string

# Load model and vectorizer
model = pickle.load(open("NaiveBayes_model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

stop_words = set(stopwords.words('english'))
ps = PorterStemmer()

app = Flask(__name__)
CORS(app)  # Allow frontend to call this API

def clean_text(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    ## removing the punctuations from text for word to word and defining it as text
    text = ' '.join([ps.stem(word) for word in text.split() if word not in stop_words])
    ## first we are stemming the word(going to go) in text.split(means for every word) and if word exists in stop_words we wont join to empty string . else we do , such that we can create a new String
    return text


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print(data)
    message = data.get("emailContent")
    if not message:
        return jsonify({"error": "No message provided"}), 400

    cleaned_message = clean_text(message)

    vector = vectorizer.transform([cleaned_message])
    probability = model.predict_proba(vector)[0]
    ## here we created model.predict_proba => this will gives us probability
    confidence = round(max(probability) * 100,2)
    result = model.predict(vector)[0]
    print(result)
    print(cleaned_message)
    print("proba",probability)
    return jsonify({"prediction": "Spam" if result == 1 else "Ham", "confidence":confidence})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
