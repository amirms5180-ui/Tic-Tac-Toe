import { useState } from "react";
export default function App(){
      const[ss,setss]=useState(false)
      const [squars,setsquars]=useState(Array(9).fill(null));
      function handleclik(index){
            if (squars[index]){
                  return;
            }
            const nextSqures=[...squars]
            if(ss===false){
             nextSqures[index]= 'O'
            }else{
             nextSqures[index]= 'X'
            }
            setsquars(nextSqures)
            setss(!ss)
      }
     return(
      <div className="table">
      <button className="squad" onClick={()=>handleclik(1)}>{squars
      [1]}</button>
      <button className="squad" onClick={()=>handleclik(2)}>{squars
      [2]}</button>
      <button className="squad" onClick={()=>handleclik(3)}>{squars
      [3]}</button>

      <button className="squad" onClick={()=>handleclik(4)}>{squars
      [4]}</button>
      <button className="squad" onClick={()=>handleclik(5)}>{squars
      [5]}</button>
      <button className="squad" onClick={()=>handleclik(6)}>{squars
      [6]}</button>

      <button className="squad" onClick={()=>handleclik(7)}>{squars
      [7]}</button>
      <button className="squad" onClick={()=>handleclik(8)}>{squars
      [8]}</button>
      <button className="squad" onClick={()=>handleclik(9)}>{squars
      [9]}</button>
</div>
     )
}

