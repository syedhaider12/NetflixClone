import React,{useState} from "react";
import GetData from "../components/getdata";
import axios from "axios";
import Search from "../components/search";
import Image from "next/image";

export default function Home() {
  const[data ,setData]=useState(0)
  const [search, setSearch] = useState({
    movie: "",
    
  });
  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setSearch({...search, [name]: value });
    console.log(name, value);
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    submitData();
    
    
  }
  async function submitData(){
    const APIKEY = "fe18b7ed47310bf8e2e2948829289900";
  const baseURL = "https://api.themoviedb.org/3";
    
      
    await  axios.get(`${baseURL}/search/movie?api_key=${APIKEY}&query=${search.movie}&append_to_response=videos`).then((res)=>{
    setData(res.data.results[0]);
    console.log(res.data.results[0]);
    }).catch((err)=>{
      console.log(err);
    })
     
    
  
}
  return (
    <>
      <div className="relative  bg-black">
      <Image src="/background.jpg" alt="" height={600}  width={1500}/>
        <div className="absolute top-0 w-full pt-10 text-center md:pt-72 sm:pt-20">
          <h1 className="font-bold text-white md:text-5xl sm:text-3xl ">
            Unlimited movies,Tv
          </h1>
          <h1 className="font-bold text-white md:text-4xl sm:text-2xl ">
            shows, and more.
          </h1>
          <h2 className="text-white md:text-xl">
            Watch anywhere,Cancel anytime.
          </h2>
          <form className="flex-row" onSubmit={handleSubmit}>
            <input
              className="px-2 py-2 leading-tight text-gray-700 border rounded shadow appearance-none sm:w-96 w-50 sm:px-3 sm:py-2 focus:outline-none focus:shadow-outline"
              type="text"
              name="movie"
              value={search.movie}
              placeholder="Search"
              onChange={handleInput}
            />
            <button className="p-1 ml-1 text-white bg-red-600 border rounded shadow appearance-none sm:p-2 focus:outline-none focus:shadow-outline">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="pb-5 mt-0 bg-black ">
        {!data?<GetData />:<Search data={data } title="Search Results"/>}
      </div>
    </>
  );
}
