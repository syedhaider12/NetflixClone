export default async function (req,res){
  const {method} =req;
  
  if(method === "GET"){
    try{
      res.status(200).json({message :"shah"})
    }
    catch(err){
      res.status(500).json(err)
    }
  }
}