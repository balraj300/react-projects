import React from 'react'

const Gameboard = () => {
    const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
        

];
  return (

    <ol id='game-board'>
        {initialGameBorad.map((row, rowIndex) => ( <li key = {rowIndex} >
        <ol>
            {row.map((playerSymbol,colIndex)=>(<li key={colIndex}>
                <button>{playerSymbol}</button>
                </li>
            ))}
            </ol>
            </li>
        ))}
        </ol>
  );

  }
export default Gameboard