import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Movie List</h2>
      <ul className="bg-white rounded-lg shadow-lg">
        {movies.map(movie => (
          <li
            key={movie.id}
            className="cursor-pointer p-4 border-b hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => onSelectMovie(movie)}
          >
            <div className="flex items-center">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-16 h-24 rounded mr-4 object-cover" // Adjust size and styles as needed
              />
              <div>
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.year}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
