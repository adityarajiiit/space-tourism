"use client"
import Galaxy from '@/public/galaxy.svg' 
import '@/app/globals.css'
import { useState } from 'react';
import Image from 'next/image'


export default function Topbar() {
    const[click,setclicked] = useState("");
    return(
        <navbar>
          
            <div className="Navbar">
             <ul className="navlinks_wrap">
               <li onClick={()=>{setclicked("img")}}  className={click==="img"?"logo_after":'logo'}><Image src={Galaxy} height={30} ></Image></li>  
               <li onClick={()=>{setclicked("Home")}}  className={click==="Home"?"afterclick":'navlinks'}>Home</li>
               <li onClick={()=>{setclicked("Lander")}} className={click==="Lander"?"afterclick":'navlinks'}>Lander</li>
               <li onClick={()=>{setclicked("rover")}} className={click==="rover"?"afterclick":'navlinks'}>Rover</li>
               <li  onClick={()=>{setclicked("payload")}} className={click==="payload"?"afterclick":'navlinks'}>Payloads</li>
               <li onClick={()=>{setclicked("community")}} className={click==="community"?"afterclick":'navlinks'}>Community</li>
               <li onClick={()=>{setclicked("newsroom")}} className={click==="newsroom"?"afterclick":'navlinks'}>Newsroom</li>
               <li onClick={()=>{setclicked("about")}} className={click==="about"?"afterclick":'navlinks'}>About</li>
             </ul>
             <h1 className='p_name'>Space Odyssey</h1>
            </div>
        </navbar>
        
    )
}