import { useState, useEffect } from 'react';

function App() {
  const [healthStatus, setHealthStatus] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch('/api/health');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHealthStatus({ loading: false, data, error: null });
      } catch (err) {
        setHealthStatus({ loading: false, data: null, error: err.message });
      }
    };

    fetchHealth();
  }, []);

  return (
    <div className="min-h-screen bg-travel-cream flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-travel-sky/30">
        <h1 className="text-4xl font-bold text-travel-teal text-center mb-2">TripOS</h1>
        <p className="text-travel-coral text-center font-medium mb-8">
          Dynamic Travel Planning & Experience Engine
        </p>

        <div className="flex flex-col items-center p-4 rounded-lg bg-travel-sky/10">
          <h2 className="text-lg font-semibold text-travel-teal mb-3">Backend Status</h2>
          
          {healthStatus.loading && (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-travel-teal"></div>
              <span className="text-gray-600 text-sm">Checking status...</span>
            </div>
          )}

          {healthStatus.error && (
            <div className="flex items-center space-x-2 text-red-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-sm font-medium">Unreachable</span>
            </div>
          )}

          {healthStatus.data && (
            <div className="flex items-center space-x-2 text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-sm font-medium">Online ({healthStatus.data.status})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
