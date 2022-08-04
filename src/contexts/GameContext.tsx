import { createContext, ReactNode, useState } from "react";

type GameContextTypes = {
  player1Value: null | PlayerValue;
  player2Value: null | PlayerValue;
  player1Score: number;
  player2Score: number;
  selectPlayer1Value: (val: PlayerValue) => void;
  selectPlayer2Value: (val: PlayerValue) => void;
  isPlayer1Move: boolean;
  board: BoardPlace[][];
  selectBoardPosition: (row: number, column: number, val: BoardPlace) => void;
  isGameOver: boolean;
  winner: BoardPlace;
  startNewGame: () => void;
};

type PlayerValue = "X" | "O";

type BoardPlace = null | PlayerValue;

const GameContext = createContext({} as GameContextTypes);

export { GameContext };

type Props = {
  children: ReactNode;
};

const GameContextProvider = ({ children }: Props) => {
  const [player1Value, setPlayer1Value] = useState<null | PlayerValue>(null);
  const [player2Value, setPlayer2Value] = useState<null | PlayerValue>(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [isPlayer1Move, setPlayer1Move] = useState(true);
  const [board, setBoard] = useState<BoardPlace[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState<BoardPlace>(null);

  const selectPlayer1Value = (val: PlayerValue) => {
    setPlayer1Value(val);
  };
  const selectPlayer2Value = (val: PlayerValue) => {
    setPlayer2Value(val);
  };

  const setIsPlayer1Move = () => {
    setPlayer1Move((prevPlayer1Move) => (prevPlayer1Move = !prevPlayer1Move));
  };

  const selectBoardPosition = (
    row: number,
    column: number,
    val: BoardPlace
  ) => {
    if (isGameOver) return;
    const helper = [...board];
    if (helper[row][column] !== null) return;
    helper[row][column] = val;
    setBoard(helper);
    checkWinner();
    setIsPlayer1Move();
  };

  const updateWinner = () => {
    if (isPlayer1Move) {
      setWinner(player1Value);
      setPlayer1Score((prevPlayer1Score) => prevPlayer1Score + 1);
    } else {
      setWinner(player2Value);
      setPlayer2Score((prevPlayer2Score) => prevPlayer2Score + 1);
    }
  };

  const checkWinner = () => {
    // Row 1
    if (board[0].every((val) => val !== null && val === board[0][0])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Row 2
    if (board[1].every((val) => val !== null && val === board[1][0])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Row 3
    if (board[2].every((val) => val !== null && val === board[2][0])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Column 1
    const column1 = [board[0][0], board[1][0], board[2][0]];
    if (column1.every((val) => val !== null && val === board[0][0])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Column 2
    const column2 = [board[0][1], board[1][1], board[2][1]];
    if (column2.every((val) => val !== null && val === board[0][1])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Column 3
    const column3 = [board[0][2], board[1][2], board[2][2]];
    if (column3.every((val) => val !== null && val === board[0][2])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Diagonal 1
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    if (diagonal1.every((val) => val !== null && val === board[0][0])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Diagonal 2
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (diagonal2.every((val) => val !== null && val === board[0][2])) {
      setIsGameOver(true);
      updateWinner();
      return;
    }
    // Draw
    if (board.flat().filter((val) => val === null).length === 0) {
      setIsGameOver(true);
      setWinner(null);
    }
  };

  const startNewGame = () => {
    setIsGameOver(false);
    setBoard((prevBoard) =>
      prevBoard.map((row) => row.map((val) => (val = null)))
    );
  };

  return (
    <GameContext.Provider
      value={{
        player1Value,
        player2Value,
        player1Score,
        player2Score,
        selectPlayer1Value,
        selectPlayer2Value,
        isPlayer1Move,
        board,
        selectBoardPosition,
        isGameOver,
        winner,
        startNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContextProvider };
