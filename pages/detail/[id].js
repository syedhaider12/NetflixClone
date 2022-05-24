import React from 'react'
export async function getServerSideProps(context) {
  const {params} = context
  console.log(params.id)
  const APIKEY = "fe18b7ed47310bf8e2e2948829289900";
  const baseURL = "https://api.themoviedb.org/3";

  // Fetch data from external API
  const res = await fetch(
    `${baseURL}/movie/${params.id}?api_key=${APIKEY}&append_to_response=videos`
  );
 
  const data = await res.json(res);
  
 
  

  // Pass data to the page via props
  return { props: { data } };
}

  




function Detail({data }) {
const trailer =data.videos.results.find(movie=>movie.type==="Trailer")
 

  return (
   <>
   <div className='bg-black  md:w-full md:h-[561px] flex flex-col md:flex-row '>
   <iframe className='w-full h-[400px] p-5 md:w-1/2 md:h-[550px]'
       src={`https://www.youtube.com/embed/${trailer.key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ">
     
       </iframe>
    <div className=" font-serif text-xl italic font-medium md:w-1/2 md:h-[550px] w-full p-5 text-white  ">
       
       <h2 className='my-2'>Title : {data.original_title}</h2>
       <h2 className='my-2'> Overview : {data.overview}</h2>
       <h2 className='my-2'> Language : {data.original_language}</h2>
       <h2 className='my-2'>Revenue : {data.revenue/1000000} Millons</h2>
       <h2 className='my-2'>Budget : {data.budget/1000000} Millons</h2>
       <h2 className='my-2'>Release Date : {data.release_date} </h2>
       <h2 className='my-2'>Popularity :  {data.popularity}</h2>
       <h2 className='my-2'>Durations :  {data.runtime} Minutes</h2>
       
      
       </div>
      
   </div>
   </>
  )
}

export default Detail