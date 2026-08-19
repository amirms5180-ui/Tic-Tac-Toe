import { useState } from "react";


export default function App() {
  const [ss, setss] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  function winnerHandler(squares) {
    const winningLine = wins.find((win) => {
      return (
        squares[win[0]] &&
        squares[win[0]] === squares[win[1]] &&
        squares[win[0]] === squares[win[2]]
      );
    });
  
    if (winningLine) {
      return {
       player: squares[winningLine[0]],
       line:winningLine}
    }
    
    return null;
  }
  
  function resetHandler (){
    setSquares(Array(9).fill(null));
    setss(false);
     
  
  }
  
  function handleClick(index) {
    if (winnerHandler(squares)) {
      return;
    }
    
    if (squares[index]) {
      return;
    }
    
    const nextSquares = [...squares];
    
    if (ss === false) {
      nextSquares[index] = "O";
    } else {
      nextSquares[index] = "X";
    }
    
    setSquares(nextSquares);
    setss(!ss);
  }
  function wichPlayer(){
    const winner = winnerHandler(squares);
    if(winner)
      if( winner=== "O"){return "player O is win "}
    else{return"player X is win"}
    
    
  }
  const winner = winnerHandler(squares);

  return (
      <div className="all">

    <div className="table">
  {squares.map((square, index) => (
    <button
      className="squad"
      style={{
        backgroundColor: winner?.line.includes(index) ? "cadetblue" : ""
      }}
      onClick={() => handleClick(index)}
    >
      {square}
    </button>
  ))}
</div>

    
        <div className="winner ">
          <button className="resetbtn"  onClick={()=>{resetHandler()}}>Reset</button>
        </div>
       <div className="winner">
      { wichPlayer && <h2>{ wichPlayer()}  </h2>}
        </div>
        
      </div>
  );
}