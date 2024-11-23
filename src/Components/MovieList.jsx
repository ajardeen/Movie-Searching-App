import React from "react";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { ApiResponseContext } from "../App";
import flimbg from "../assets/flimbg.png";
function MovieList() {
  const { apiResponse, page, setPage } = useContext(ApiResponseContext);


  return (

    <div className="flex flex-col gap-3">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 gap-y-8 md:gap-y-10 place-items-center p-3 md:p-4">
        { apiResponse && apiResponse.Search ? (
          // all the movies will be displayed here
          apiResponse.Search.map((movie, index) => (
            <div key={index} className="w-full">
              {/*  here we are passing the movie data to the movie card component */}
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center">
            <img src={flimbg} alt="flimbg" className="mx-auto" />
            NO Result Found...
          </div>
        )}
      </section>
      <div className="flex justify-center items-center gap-3">
          {page > 1 ? (
            <button
              onClick={() => {
                page > 1 ? setPage(page - 1) : null;
              }}
              className="bg-blue-600 p-2 rounded-lg px-3 font-bold transition-all duration-300 ease-linear"
            >
              Previous
            </button>
          ) : (
            <button
             
              className="bg-gray-600 p-2 rounded-lg px-3 font-bold opacity-45 transition-all duration-300 ease-linear disabled"
            >
              Previous
            </button>
          )}
          {apiResponse && apiResponse.totalResults > page * 10 ? (
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="bg-blue-600 p-2 rounded-lg px-3 font-bold transition-all duration-300 ease-linear disabled"
            >
              Next
            </button>
          ) : (
            <button
             
              className="bg-gray-600 p-2 rounded-lg px-3 font-bold opacity-45 transition-all duration-300 ease-linear disabled"
            >
              Next
            </button>
          )}
        
        </div>
    </div>
  );
}

export default MovieList;
