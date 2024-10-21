// src/components/Quiz.jsx
import { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  {
    question: "Which language is used for game development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "C++"
  },
  {
    question: "Which language is used for data analysis?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "Python"
  },
  {
    question: "Which language is used for building servlets?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "Java"
  },
];

function Quiz({ setScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(''); // Reset the selected option
    } else {
      setScore(correctAnswers + (selectedOption === questions[currentQuestion].correctAnswer ? 1 : 0));
    }
  };

  return (
    <div>
      <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={`block w-full text-left p-2 mb-2 border ${selectedOption === option ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleNext}
        disabled={!selectedOption} // Disable if no option is selected
      >
        {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}

export default Quiz;
