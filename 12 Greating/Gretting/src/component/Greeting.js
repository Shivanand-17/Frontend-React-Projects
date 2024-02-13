import React from 'react'
import './Greeting.css'

export default function Greeting() {

    let currentTime = new Date().getHours();

    let greeting = "";
    let cssStyle={};

    if(currentTime>=1 && currentTime<12){
      greeting = "Good Morning";
      cssStyle.color = 'Green';

    }else if(currentTime>=12 && currentTime <=18){
      greeting = "Good AfterNoon";
      cssStyle.color = "Red";

    }else{
      greeting = "Good Night";
      cssStyle.color = "black";
    }

      return(
        
            <div>
               <h1>Hello !! Shivanand <span style={cssStyle}>{greeting}</span></h1>
            </div>
        
    );
}
