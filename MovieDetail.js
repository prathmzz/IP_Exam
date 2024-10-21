import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="w-full md:w-2/3 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-500 mb-4">Year: {movie.year}</p>
        <p className="text-gray-700">{movie.description}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Genre:</h3>
          <p className="text-gray-600">{movie.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
