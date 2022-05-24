import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Row from './row'
function GetData() {
  const APIKEY = "fe18b7ed47310bf8e2e2948829289900";
  const baseURL = "https://api.themoviedb.org/3";
  
  const [horror , setData] = useState([]);
  const [comedy , setComedy] = useState([]);
  const [romance , setRomance] = useState([]);
  const [top , setTop] = useState([]);
  const [action , setAction] = useState([]);

  async function getAction(){
    try{
      const dat =await axios.get( `${baseURL}/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=28`);
      
      setAction(dat.data.results);
      
     
      
    }catch(err){
     console.log(err)
   }
  }
  async function getData() {
    try{
      const dat =await axios.get( `${baseURL}/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=27`);
      
      setData(dat.data.results);
      
     
      
    }catch(err){
     console.log(err)
   }
   

   
  
 }
  async function getComedy() {
    try{
      const dat =await axios.get(`${baseURL}/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=35`);
      
      setComedy(dat.data.results);
      
     
      
    }catch(err){
     console.log(err)
   }
   

   
  
 }
  async function getRomance() {
    try{
      const dat =await axios.get(`${baseURL}/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=10749`);
      
      setRomance(dat.data.results);
      
     
      
    }catch(err){
     console.log(err)
   }
   

   
  
 }
  async function getTop() {
    try{
      const dat =await axios.get(`${baseURL}/movie/top_rated?api_key=${APIKEY}&language=en-US`);
      
      setTop(dat.data.results);
      
     
      
    }catch(err){
     console.log(err)
   }
   

   
  
 }

 useEffect(()=>{
   getAction();
 },[])
 useEffect(()=>{
   getData();
 },[])
 useEffect(()=>{
   getComedy();
 },[])
 useEffect(()=>{
   getRomance();
 },[])
 useEffect(()=>{
   getTop();
 },[])
  return (
    <>
   <Row data={action} title="Action Movies"></Row>
   <Row data={horror} title="Horror Movies"></Row>
   <Row data={comedy} title="Comedy Movies"></Row>
   <Row data={romance} title="Romance Movies"></Row>
   <Row data={top} title="TopRated Movies"></Row>
    </>
  )
}

export default GetData;