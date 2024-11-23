import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieResultCard from "../Components/MovieResultCard";
import axios from "axios";

function MovieDetailPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div className="mt-20">
      <Link to="/search">
        <div className="flex bg-white w-fit text-black rounded-md text-center px-2 py-1 ml-3"><span className="material-symbols-outlined rotate-180  ">east</span>
        <span className="font-bold text-lg"> Back</span>
        </div>
       
      </Link>
      {data && <MovieResultCard movieData={data} />}
    </div>
  );
}

export default MovieDetailPage;
