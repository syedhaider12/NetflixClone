import React from "react";
import Link from "next/link";
import Image from "next/image";
function Categories({ data }) {
  const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/original${src}`;
  };

  return (
    <div className="bg-black ">
      <div className="flex py-3  overflow-x-scroll no-scrollbar">
        {data
          .filter((movie, idx) => {
            return idx <= 6;
          })
          .map((movie) => {
            return (
              <div key={movie.id} >
                <Link href={`/detail/${movie.id}`} as={"/detail/" + movie.id}>
                  <div className="relative h-60 min-w-[180px]  mx-2 duration-300  cursor-pointer  hover:scale-110">
                    <Image
                      loader={myLoader}
                      width={160}
                      height={240}
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
      <div className="flex py-3  overflow-x-scroll no-scrollbar ">
        {data
          .filter((movie, idx) => idx > 6 && idx < 14)
          .map((movie) => {
            return (
              <div key={movie.id} className="my-4">
                <Link href={`/detail/${movie.id}`} as={"/detail/" + movie.id}>
                  <div className="relative h-60 min-w-[180px]  mx-2 duration-300  cursor-pointer  hover:scale-110">
                    <Image
                      loader={myLoader}
                      width={160}
                      height={240}
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
      <div className="flex   overflow-x-scroll no-scrollbar ">
        {data
          .filter((movie, idx) => idx > 13 && idx < 21)
          .map((movie) => {
            return (
              <div key={movie.id} className="my-4">
                <Link href={`/detail/${movie.id}`} as={"/detail/" + movie.id}>
                  <div className="relative h-60 min-w-[160px]  mx-5 duration-300  cursor-pointer  hover:scale-110">
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

export default Categories;
