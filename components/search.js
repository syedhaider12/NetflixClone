import React from 'react';
import Link from "next/link";
import Image from "next/image";
function Search({data,title}) {
  const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/original/${src}`;
  };
  return (
    <div>
      <h1 className="p-3 font-serif text-xl italic font-medium text-center text-yellow-400 ">
        {title}
      </h1>
        <div className="flex p-3 overflow-x-scroll no-scrollbar">
          
            
              <div key={data.id}>
                <Link href={`/detail/${data.id}`} as= {"/detail/" + data.id}>
                <div className="max-w-xs mx-2 duration-300  cursor-pointer h-60 hover:scale-110">
                    <Image
                      loader={myLoader}
                      width={160}
                      height={240}
                      className="rounded-lg"
                      src={data.poster_path}
                      alt={data.name}
                    />
                  </div>
               </Link>
              </div>
          
         
        </div>
    </div>
  );
}

export default Search