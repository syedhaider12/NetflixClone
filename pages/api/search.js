import axios from "axios";
export default async function handler(req,res){
  const APIKEY = "fe18b7ed47310bf8e2e2948829289900";
  const baseURL = "https://api.themoviedb.org/3";
  const {method} =req;
  if(method === "POST"){
    try{
      const { movie } = req.body
     const t= await axios.get(`${baseURL}/search/movie?api_key=${APIKEY}&query=${movie}`);
     res.status(200).json(t)
    }
    catch(err){
      res.status(500).json(err)
    }
  }
}