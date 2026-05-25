import { useState } from "react";
import { motion } from "framer-motion";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

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

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  let status;
  if (winner) status = `Winner: ${winner} 🎉`;
  else if (isDraw) status = "It's a draw!";
  else status = `Next turn: ${isXTurn ? "X" : "O"}`;

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl"
      >
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Tic-Tac-Toe
          </h1>

          {/* Status */}
          <p className="text-slate-300 text-base sm:text-lg mb-6">{status}</p>

          {/* Game Board */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 aspect-square w-full max-w-xs sm:max-w-sm mx-auto mb-6">
            {board.map((square, index) => (
              <motion.button
                key={index}
                onClick={() => handleClick(index)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="
                  aspect-square
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-white
                  text-3xl sm:text-4xl font-bold
                  flex items-center justify-center
                  hover:border-cyan-400/40
                  transition
                "
              >
                {square}
              </motion.button>
            ))}
          </div>

          {/* Reset Button */}
          <motion.button
            onClick={resetGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full
              py-3 sm:py-4
              rounded-2xl
              bg-cyan-500
              text-black
              font-bold
              text-base sm:text-lg
              shadow-lg shadow-cyan-500/30
              hover:opacity-90
              transition
            "
          >
            Reset Game
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Game;
