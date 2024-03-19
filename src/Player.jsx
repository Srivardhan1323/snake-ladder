import Colourboxgrid from "./Colourboxgrid";
import { useState } from "react";
import "./Player.css"
const snake=[
    {start:17,end:7},
    {start:54,end:34},
    {start:62,end:19},
    {start:64,end:60},
    {start:87,end:24},
    {start:93,end:73},
    {start:95,end:75},
    {start:98,end:79}
  ]
  const ladder=[
    {start:1,end:38},
    {start:4,end:14},
    {start:9,end:31},
    {start:21,end:42},
    {start:28,end:84},
    {start:51,end:67},
    {start:71,end:91},
    {start:80,end:100}
  ]
export default function Player(){
    const [p1,changep1]=useState(0);
    const [p2,changep2]=useState(0);
    const [die,rolldie]=useState(0);
    const rollDiep1=() =>
    {
      let temp=Math.floor(Math.random()*6)+1;
      changep1(Math.min(temp+p1,100));
      rolldie(temp);
    }
    const rollDiep2=() =>
    {
      let temp=Math.floor(Math.random()*6)+1;
      changep2(Math.min(temp+p2,100));
      rolldie(temp);
    }
    for(let i=0;i<snake.length;i++){
        if(snake[i].start===p1)
        {
          alert("Snakep1");
          changep1(snake[i].end);
          break;
        }
      }
    for(let i=0;i<snake.length;i++){
        if(snake[i].start===p2)
        {
          alert("Snakep2");
          changep2(snake[i].end);
          break;
        }
      }
    for(let i=0;i<ladder.length;i++){
        if(ladder[i].start===p1)
        {
          alert("LADDER");
          changep1(ladder[i].end);
          break;
        }
      }
    for(let i=0;i<ladder.length;i++){
        if(ladder[i].start===p2)
        {
          alert("LADDER");
          changep2(ladder[i].end);
          break;
        }
      }
    return(
        <div>
            <h1>Dievalue:{die}</h1>
            <div className="board">
                <div className="player">
                    <h2>Player:p1</h2>
                    <button onClick={rollDiep1}>Roll die</button>
                    <h5>Position:{p1}</h5>
                </div>
                     <Colourboxgrid p1={p1} p2={p2} Colour1="skyblue" Colour2="yellow"/>
                <div className="player">
                    
                    <h2>Player:p2</h2>
                    <button onClick={rollDiep2}>Roll die</button>
                    <h5>Position:{p2}</h5>
                </div>
            </div>
        </div>
    )
}