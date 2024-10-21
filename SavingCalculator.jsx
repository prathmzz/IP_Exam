import React, { useState } from 'react';

const SavingsCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [age, setAge] = useState('');
  const [period, setPeriod] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = (e) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const t = parseFloat(period);
    const rate = 0.05; // 5% annual interest rate
    const interestEarned = p * (rate * t);
    setInterest(interestEarned);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Savings Interest Calculator</h2>
        <form onSubmit={calculateInterest} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Principal Amount ($)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Your Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Investment Period (years)</label>
            <input
              type="number"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Calculate Interest
          </button>
        </form>

        {interest !== null && (
          <div className="mt-6 bg-green-100 p-4 rounded-md">
            <p className="text-xl font-semibold">Interest Earned: ${interest.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsCalculator;
