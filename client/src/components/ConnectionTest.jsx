import React, { useState } from 'react';
import axios from 'axios';

export default function ConnectionTest() {
  const [axiosData, setAxiosData] = useState(null);
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);

  // Test using Axios
  const testWithAxios = async () => {
    try {
      // Assuming your backend runs on port 5000
      const response = await axios.get('http://localhost:5000/api/test');
      console.log('Axios Response:', response.data);
      setAxiosData(response.data);
      setError(null);
    } catch (err) {
      console.error('Axios Error:', err);
      setError(err.message);
    }
  };

  // Test using Fetch
  const testWithFetch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Fetch Response:', data);
      setFetchData(data);
      setError(null);
    } catch (err) {
      console.error('Fetch Error:', err);
      setError(err.message);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 p-6 glass-card border-accent-cyan shadow-lg shadow-accent-cyan/20 max-w-sm rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">🔌 API Connection Test</h3>
      
      <div className="flex gap-3 mb-4">
        <button 
          onClick={testWithAxios}
          className="bg-primary-blue hover:bg-primary-blue/80 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
        >
          Test with Axios
        </button>
        <button 
          onClick={testWithFetch}
          className="bg-accent-purple hover:bg-accent-purple/80 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
        >
          Test with Fetch
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 text-red-200 rounded-lg text-sm mb-4">
          <p className="font-bold">Connection Failed!</p>
          <p>{error}</p>
          <p className="text-xs mt-1">Make sure the backend is running on port 5000 and CORS is enabled.</p>
        </div>
      )}

      {(axiosData || fetchData) && (
        <div className="p-4 bg-accent-emerald/20 border border-accent-emerald/50 text-accent-emerald rounded-lg text-sm">
          <p className="font-bold mb-1">✅ Connection Successful!</p>
          <p className="text-white mb-2">{axiosData?.message || fetchData?.message}</p>
          <p className="text-xs text-emerald-200">Check your browser console (F12) for the full JSON response!</p>
        </div>
      )}
    </div>
  );
}
