import React, { useState, useEffect } from 'react';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
        Movie Database
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
        {selectedMovie && <MovieDetail movie={selectedMovie} />}
      </div>
    </div>
  );
};

export default App;
