import { useState } from 'react';
import BMICalculator from './components/BMICalculator';
import BMIResult from './components/BMIResult';

function App() {
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">BMI Calculator</h1>
        <p className="text-center text-gray-600 mb-8">
          Calculate your Body Mass Index (BMI) to see if you are in a healthy weight range.
        </p>
        <BMICalculator setBmi={setBmi} setCategory={setCategory} />
        {bmi && <BMIResult bmi={bmi} category={category} />}
      </div>
    </div>
  );
}

export default App;
