import Link from "next/link";
import React, { useState } from "react";
import { MenuAlt2Icon, XIcon,ChevronDoubleDownIcon } from "@heroicons/react/outline";



function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [dropDown, setDropDown] = useState(true);
 
  return (
    <>
      <div className="w-full h-16 pb-0 mb-0 bg-black ">
        <div className="flex items-center justify-between w-full h-full md:flex">
          <div className="items-center w-full md:flex md:justify-between ">
            <h1 className="px-2 text-3xl font-bold text-red-600 ">
            <Link href="/">NETFLIX</Link>
                </h1>
            <nav className="hidden pr-10 text-white md:flex">
              
         
              
               <button  className="p-2 bg-red-600 rounded-md"  onClick ={()=>{
                 setDropDown(!dropDown);
                 console.log("shah")
               }}>Categories<ChevronDoubleDownIcon className="inline w-5 h-5" ></ChevronDoubleDownIcon>
                    
              <ul className ={!dropDown ?"  absolute mt-2  z-40 w-24 rounded-md shadow-lg bg-white   ":"hidden"}>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "> <Link href="/actions">
                Action
              </Link></li>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "><Link href="/horror">
                Horror
              </Link></li>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "><Link href="/comedy">
                Comedy
              </Link></li>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "><Link href="/romance">
                Romance
              </Link></li>
              </ul>
               </button>
             
            </nav>
          </div>
          <div
            className="flex px-4 md:hidden"
            onClick={() => {
              console.log("cliked");
              setMenuIcon(!menuIcon);
              console.log(menuIcon);
            }}
          >
            {!menuIcon ? (
              <MenuAlt2Icon className="w-5 text-white" />
            ) : (
              <XIcon className="w-5 text-white" />
            )}
          </div>
        </div>
        <nav
          className={
            !menuIcon
              ? "hidden"
              : "absolute bg-white w-full  z-40 text-center flex flex-col  tracking-tighter  md:hidden"
          }
        >
   
   <button  className="py-2  rounded-md"  onClick ={()=>{
                 setDropDown(!dropDown);
                 console.log("shah")
               }}>Categories<ChevronDoubleDownIcon className="inline w-5 h-5" ></ChevronDoubleDownIcon>
                    
              <ul className ={!dropDown ?"   mt-1   w-full  bg-white   ":"hidden"}>
              <li className="text-center text-black hover:bg-red-500 hover:text-white "> <Link href="/actions">
                Action
              </Link></li>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "><Link href="/horror">
                Horror
              </Link></li>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "><Link href="/comedy">
                Comedy
              </Link></li>
                <li className="text-center text-black hover:bg-red-500 hover:text-white "><Link href="/romance">
                Romance
              </Link></li>
              </ul>
               </button>
          
        </nav>
      </div>
    </>
  );
}

export default Navbar;
