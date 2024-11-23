import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import profileplaceholder from "../assets/profile-placeholder.png";
function NavBar({ getSearchKey ,fetchMovies}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`${isScrolled ? 'backdrop-blur-md' : null} transition-colors duration-300 text-white p-2 md:p-4 fixed w-full top-0 z-50 lg:container rounded-lg`}>
  <div className="md:container mx-auto flex items-center justify-between px-2 md:px-4">
    <div className="flex items-center space-x-4 md:space-x-8">
      <Link to={"/"}>
        <h1 className="text-xl md:text-2xl font-bold text-[#00a8e1]">MovieApp</h1>
      </Link>
      <div className="hidden lg:flex space-x-6">
        <Link to={"/"}><p  className="hover:text-[#00a8e1]">Home</p></Link>
        <a href="#" className="hover:text-[#00a8e1]">TV Shows</a>
        <a href="#" className="hover:text-[#00a8e1]">Movies</a>
      </div>
    </div>

    <div className="flex items-center space-x-2 md:space-x-6">
      <div className="relative">
        <input
          className="bg-[#121212] placeholder:opacity-0 md:placeholder:opacity-100 text-white px-2 md:px-4 py-2 rounded-full w-32 sm:w-48 md:w-64 focus:w-40 sm:focus:w-56 md:focus:w-72 focus:outline-none focus:ring-2 focus:ring-[#00a8e1] transition-all duration-200 ease-linear text-sm md:text-base"
          type="text"
          placeholder="Search movies, TV shows..."
          onChange={(e) => getSearchKey(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchMovies();
             
            }
          }}
        />
        <Link to={"/search"}>
          <svg onClick={()=>fetchMovies()}
            className="hover:bg-gray-600 p-1 absolute right-1 top-0 h-8 md:h-10 w-8 md:w-10 text-gray-400 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-2 md:space-x-4 ">
        <button className="hover:text-[#00a8e1]">
          <svg
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <img
          src={profileplaceholder}
          alt="Profile"
          className="h-6 w-6 md:h-8 md:w-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  </div>
</nav>

  );
}

export default NavBar;
