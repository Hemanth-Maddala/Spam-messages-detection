import React, { useState } from 'react';

const EmailInput = ({ onAnalyze }) => {
  const [emailContent, setEmailContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(emailContent);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Paste Your Message Content
      </h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-48 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Paste your email content here..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 cursor-pointer"
            disabled={!emailContent.trim()}
          >
            Analyze Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailInput; 