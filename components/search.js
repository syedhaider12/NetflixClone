import React from 'react'
import Link from "next/link";
function Search({data,title}) {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1 className="p-3 font-serif text-xl italic font-medium text-center text-yellow-400 ">
        {title}
      </h1>
        <div className="p-3 flex overflow-x-scroll no-scrollbar">
          
            
              <div key={data.id}>
                <Link href={`/detail/${data.id}`}>
                <img
                  className="h-48 max-w-xs mx-2 duration-300 rounded-lg cursor-pointer hover:scale-110"
                  src={imgUrl + data.poster_path}
                  alt={data.name}
                />
               </Link>
              </div>
          
         
        </div>
    </div>
  );
}

export default Search