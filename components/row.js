import React from "react";
import Link from "next/link";
import Image from "next/image";
function Row({ data, title }) {
  const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/original${src}`;
  };
  return (
    <div>
      <h1 className="p-3 font-serif text-xl italic font-medium text-center text-yellow-400 ">
        {title}
      </h1>
        <div className="flex p-3  overflow-x-scroll no-scrollbar">
          {data.map((movie) => {
            return (
              <div key={movie.id}>
                <Link href={`/detail/${movie.id}`} as={"/detail/" + movie.id}>
                <div className="relative h-60 min-w-[160px]  mx-2 duration-300  cursor-pointer  hover:scale-110">
                    <Image
                      loader={myLoader}
                      layout="fill"
                      className="rounded-lg"
                      src={movie.poster_path}
                      alt={movie.name}
                    />
                  </div>
               </Link>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Row;
