import { useState } from "react"
import Colourbox from "./Colourbox"
import "./Colourboxgrid.css"
export default function Colourboxgrid({p1,Colour1,p2,Colour2}){
    
    const box=[]
    for(let i=100;i>=1;i--)
    {
      let p=Math.ceil(i/10),ans=i,f=0;
      if(p%2)
      {
        if(i%10)ans=i+11-2*(i%10);
        else ans=i-9;
      }
      if(ans===p1){f=1;
      box.push(<Colourbox x={Colour1} flag={f}/>)}
      else if(ans===p2){f=1;
      box.push(<Colourbox x={Colour2} flag={f}/>)
      }
      else box.push(<Colourbox x={""} flag={f}/>)
    }
    
    if(p1===100)
    {
      alert("P1 WIN!!!");
    }
    if(p2===100)
    {
      alert("P2 WIN!!!");
    }
    
    return (
        <div>
              <div className="Colourboxgrid">
                  {box}
              </div>
        </div>
    )
}