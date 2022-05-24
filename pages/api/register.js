// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connection from "../../utils/connection";
import User from "../../model/user";
export default async function handler(req, res) {
  
  
  connection();
  if(req.method === "GET"){
    try{
      res.status(200).json({message :"shah"})
    }
    catch(err){
      res.status(500).json(err)
    }
  }
  if(req.method === "POST"){
    try{
       await User.create(req.body)
      res.status(200).json({message :"user create sucessfully"})
    }
    catch(err){
      res.status(500).json(err)
    }
  }
}
