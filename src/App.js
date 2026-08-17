import { useState } from "react";

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
    return squares[winningLine[0]];
  }

  return null;
}

export default function App() {
  const [ss, setSs] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));

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
    setSs(!ss);
  }

  const winner = winnerHandler(squares);

  return (
      <div>

    <div className="table">
      <button className="squad" onClick={() => handleClick(0)}>
        {squares[0]}
      </button>

      <button className="squad" onClick={() => handleClick(1)}>
        {squares[1]}
      </button>

      <button className="squad" onClick={() => handleClick(2)}>
        {squares[2]}
      </button>

      <button className="squad" onClick={() => handleClick(3)}>
        {squares[3]}
      </button>

      <button className="squad" onClick={() => handleClick(4)}>
        {squares[4]}
      </button>

      <button className="squad" onClick={() => handleClick(5)}>
        {squares[5]}
      </button>

      <button className="squad" onClick={() => handleClick(6)}>
        {squares[6]}
      </button>

      <button className="squad" onClick={() => handleClick(7)}>
        {squares[7]}
      </button>

      <button className="squad" onClick={() => handleClick(8)}>
        {squares[8]}
      </button>

    </div>
       <div>
      {winner && <h2>{winner} Winner!</h2>}
        </div>
      </div>
  );
}