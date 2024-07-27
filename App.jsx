import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value , onSquareClick})
{
  return <button className='square' onClick={onSquareClick} style ={{padding:'20px',backgroundColor:'green',borderRadius:'2px'}}>{value}</button>
} 

function App() {

  const [xIsNext,setXIsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));

  function handClick(i)
  {
    if(squares[i] || calculateWinner(squares))
    {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext)
    {
      nextSquares[i] = 'X';
    }
    else
    {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status ;
  if(winner)
  {
    status = 'WINNER : ' + winner;
  }
  else{
    status = 'Next Player : ' + (xIsNext?'X':'O');
  }

  return(
    <>
    <div className="status">
      <center>
      {status}
      </center>
    </div>
    <div className='boardrow'>
      <center>
      <Square value={squares[0]} onSquareClick={() => handClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handClick(2)}/>
      </center>
    </div>
    <div className='boardrow'>
      <center>
      <Square value={squares[3]} onSquareClick={() => handClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handClick(5)}/>
      </center>
    </div>
    <div className='boardrow'>
      <center>
      <Square value={squares[6]} onSquareClick={() => handClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handClick(8)}/>
      </center>
    </div>
    </>
  );
}

function calculateWinner(squares)
{
  const Lines = [[0 ,1 ,2],
                 [3, 4, 5],
                 [6, 7, 8],
                 [0, 3, 6],
                 [1, 4, 7],
                 [2, 5, 8],
                 [0, 4, 8],
                 [2, 4, 6]];
  for(let i=0;i<Lines.length;i++)
  {
    const[a,b,c] = Lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
    {
      return squares[a];
    }
  }
  return null;
}

export default App
