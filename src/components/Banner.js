import React, { useState, useEffect } from 'react';
import Image from '../banner.jpg';
import axios from 'axios';

function Banner() {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week?api_key=cee1e9b2521e5c5453c45755ccff7c7e#")
      .then((res) => {
        console.table(res.data.results);
        setMovies(res.data.results[0]);
      });
  }, []);

  return (
    <>
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[40vh]  md:h-[60vh] bg-center bg-cover  flex items-end justify-center`}
      >
        <div className='text-xl md:text-3xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center'>
          {movies.title}
        </div>
      </div>
    </>
  );
}

export default Banner;
