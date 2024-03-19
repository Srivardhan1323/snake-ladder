import { useState } from "react";
import "./Colourbox.css"
export default function Colourbox({x,flag}){
    let Colour="";
    if(flag){Colour=x;}
    return(
        <div className="Colourbox" style={{background:Colour}}>
        </div>
    )
}