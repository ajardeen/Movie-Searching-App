import React from 'react'
import { useState } from 'react'
function MovieCard({movieData}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Poster */}
          <div className="lg:w-1/3">
            <img 
              src={movieData.Poster} 
              alt={movieData.Title} 
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Right Section - Details */}
          <div className="lg:w-2/3 space-y-6">
            <h1 className="text-4xl font-bold text-white">{movieData.Title}</h1>
            
            <div className="flex items-center gap-4 text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded-full">{movieData.Year}</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">{movieData.Runtime}</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">{movieData.Rated}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {movieData.Genre.split(', ').map((genre, idx) => (
                <span key={idx} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">{movieData.Plot}</p>

            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-gray-500">Director:</span> {movieData.Director}
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">Cast:</span> {movieData.Actors}
              </p>
            </div>

            {/* Ratings Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500">{movieData.imdbRating}</div>
                <div className="text-sm text-gray-400">IMDb Rating</div>
              </div>
              {movieData.Ratings.map((rating, idx) => (
                <div key={idx} className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-500">
                    {rating.Value}
                  </div>
                  <div className="text-sm text-gray-400">{rating.Source}</div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-800 pt-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Box Office:</span>
                <span className="text-green-500 font-semibold">{movieData.BoxOffice}</span>
              </div>
              <div className="text-gray-300">
                <span className="text-gray-500">Awards:</span> {movieData.Awards}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard