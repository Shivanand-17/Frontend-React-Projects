// window screen resize project


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './UseEffectCleanUpFunction.css'

const UseEffectCleanUpFunction = () => {

     const [WidthCount, setWidthCount] = useState(window.screen.width);


    const actualWidth = ()=>{
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth);
    }


     useEffect(()=>{
        console.log("add Event")
        window.addEventListener("resize", actualWidth);

        return() =>{
            console.log("remove Event");
            window.removeEventListener("resize", actualWidth);
        }
     })

     


  return (
    <div className='content'>
      <h1>Actual Width Of The Window</h1>
      <p>{WidthCount}</p>

    </div>
  )
}

export default UseEffectCleanUpFunction
