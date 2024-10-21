// src/App.jsx
import { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [score, setScore] = useState(null);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Quick Quiz Challenge</h1>
        {score === null ? (
          <Quiz setScore={setScore} />
        ) : (
          <Result score={score} />
        )}
      </div>
    </div>
  );
}

export default App;
