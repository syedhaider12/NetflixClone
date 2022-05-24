import React from "react";
import Link from "next/link";

function Row({ data, title }) {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1 className="p-3 font-serif text-xl italic font-medium text-center text-yellow-400 ">
        {title}
      </h1>
        <div className="flex p-3 overflow-x-scroll no-scrollbar">
          {data.map((movie) => {
            return (
              <div key={movie.id}>
                <Link href={`/detail/${movie.id}`}>
                <img
                  className="h-48 max-w-xs mx-2 duration-300 rounded-lg cursor-pointer hover:scale-110"
                  src={imgUrl + movie.poster_path}
                  alt={movie.name}
                />
               </Link>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Row;
