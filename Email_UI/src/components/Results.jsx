import React, { useEffect } from 'react';

const Results = ({ results, isLoading , confidence}) => {
  if (!results && !isLoading) return null;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Analysis Results
      </h2>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Analyzing...</span>
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${
            results==="Spam" 
              ? 'bg-red-50 border border-red-200' 
              : 'bg-green-50 border border-green-200'
          }`}>
            <div className="flex items-center">
              <div className={`text-lg font-medium ${
                results==="Spam" ? 'text-red-700' : 'text-green-700'
              }`}>
                {results==="Spam" ? 'Spam Detected' : 'Not Spam'}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Confidence Score
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  results==="Spam" ? 'bg-red-600' : 'bg-green-600'
                }`}
                style={{ width: `${confidence}%` }}
              ></div>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              {confidence}% confidence
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results; 