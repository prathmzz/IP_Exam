import React, { useState } from 'react';

const SalaryEstimator = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [netSalary, setNetSalary] = useState(null);

  const calculateNetSalary = (e) => {
    e.preventDefault();
    const salary = parseFloat(basicSalary);
    const deductions = salary * 0.25; // Assuming 25% deductions for taxes, insurance, etc.
    const estimatedNetSalary = salary - deductions;
    setNetSalary(estimatedNetSalary);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Quick Salary Estimator</h2>
        <form onSubmit={calculateNetSalary} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Basic Salary ($)</label>
            <input
              type="number"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Estimate Net Salary
          </button>
        </form>

        {netSalary !== null && (
          <div className="mt-6 bg-green-100 p-4 rounded-md">
            <p className="text-xl font-semibold">Estimated Net Salary: ${netSalary.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryEstimator;
