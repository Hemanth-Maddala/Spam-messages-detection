import { useState } from 'react'
import Header from './components/Header'
import EmailInput from './components/EmailInput'
import Results from './components/Results'

function App() {
  const [results, setResults] = useState(null);
  const [confidence,setconfidence] = useState(100)
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (emailContent) => {
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailContent }),
    });

    const data = await res.json();
    console.log(data)

    setIsLoading(true);
    setTimeout(() => {

      setResults(data.prediction);
      setconfidence(data.confidence)
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <EmailInput onAnalyze={handleAnalyze} />
        <Results results={results} isLoading={isLoading} confidence={confidence}/>
      </main>
    </div>
  )
}

export default App
