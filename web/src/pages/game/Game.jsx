import { useState } from "react";

function Game() {
  // Board is a 9-element array, each cell is null, "X", or "O"
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Check all 8 possible winning lines
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  // Place X or O in the clicked cell
  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  // Reset the board to start a new game
  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  // Determine the status message
  let status;
  if (winner) {
    status = `Winner: ${winner}!`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXTurn ? "X" : "O"}`;
  }

  return (
    <div className="page">
      <h1>Tic-Tac-Toe</h1>
      <p className="game-status">{status}</p>
      <div className="game-board">
        {board.map((square, index) => (
          <button
            key={index}
            className="game-square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button onClick={resetGame} className="btn reset-btn">
        Reset Game
      </button>
    </div>
  );
}

export default Game;
