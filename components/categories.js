import React from 'react'
import Link from "next/link"
function Categories({data}) {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className='bg-black '>
  
    <div className="flex flex-row items-center justify-around py-4 overflow-x-scroll no-scrollbar">
      {data.filter((movie,idx) => {
        return idx <= 6;
      }).map(movie => {
        return (
          <div key={movie.id} >
            <Link href={`/detail/${movie.id}`}>
            <img
              className="max-w-xs mx-2 duration-300 rounded-lg cursor-pointer h-60 hover:scale-110"
              src={imgUrl + movie.poster_path}
              alt={movie.name}
            />
              </Link>
          </div>
        );
      })}
    </div>
    <div className="flex flex-row items-center justify-around py-4 overflow-x-scroll no-scrollbar ">
      {data.filter((movie,idx) =>  idx >6 && idx <14).map(movie => {
        return (
          <div key={movie.id} >
            <Link href={`/detail/${movie.id}`}>
            <img
              className="max-w-xs mx-2 duration-300 rounded-lg cursor-pointer h-60 hover:scale-110"
              src={imgUrl + movie.poster_path}
              alt={movie.name}
            />
              </Link>
          </div>
        );
      })}
    </div>
    <div className="flex flex-row items-center justify-around py-4 overflow-x-scroll no-scrollbar ">
      {data.filter((movie,idx) =>  idx >13 && idx <21).map(movie => {
        return (
          <div key={movie.id } >
            <Link href={`/detail/${movie.id}`}>
            <img
              className="max-w-xs mx-2 duration-300 rounded-lg cursor-pointer h-60 hover:scale-110"
              src={imgUrl + movie.poster_path}
              alt={movie.name}
            />
              </Link>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Categories