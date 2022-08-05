import styles from "./GameContainer.module.scss";
import { GameContext } from "../../contexts/GameContext";
import { useContext } from "react";

const GameContainer = () => {
  const selectBoardPosition = (row: number, column: number) => {
    if (gameCtx.isPlayer1Move) {
      gameCtx.selectBoardPosition(row, column, gameCtx.player1Value);
    } else {
      gameCtx.selectBoardPosition(row, column, gameCtx.player2Value);
    }
  };

  const gameCtx = useContext(GameContext);
  return (
    <div className={styles.GameContainer}>
      <div className={styles.ScoresContainer}>
        <span>Player 1</span>
        <span className={styles.Scores}>
          {gameCtx.player1Score} - {gameCtx.player2Score}
        </span>
        <span>Player 2</span>
      </div>
      {!gameCtx.isGameOver && gameCtx.isPlayer1Move && (
        <h3>
          Player 1's Turn{" "}
          <span className={gameCtx.player1Value === "X" ? styles.X : styles.O}>
            {gameCtx.player1Value}
          </span>
        </h3>
      )}
      {!gameCtx.isGameOver && !gameCtx.isPlayer1Move && (
        <h3>
          Player 2's Turn{" "}
          <span className={gameCtx.player2Value === "X" ? styles.X : styles.O}>
            {gameCtx.player2Value}
          </span>
        </h3>
      )}
      {gameCtx.isGameOver && gameCtx.winner !== null && (
        <h3>
          {`Winner - ${!gameCtx.isPlayer1Move ? "Player 1" : "Player 2"}`}{" "}
          <span className={gameCtx.winner === "X" ? styles.X : styles.O}>
            {gameCtx.winner}
          </span>
        </h3>
      )}
      {gameCtx.isGameOver && gameCtx.winner === null && <h3>Draw</h3>}
      <div className={styles.Gameboard}>
        {gameCtx.board.map((row, rowId) =>
          row.map((item, itemId) => (
            <div
              key={`${rowId}${itemId}`}
              className={`${styles.Tile} ${
                gameCtx.isGameOver ? styles.GameOver : ""
              } ${
                gameCtx.board[rowId][itemId] === "O"
                  ? styles.O
                  : gameCtx.board[rowId][itemId] === "X"
                  ? styles.X
                  : ""
              }`}
              onClick={() => {
                selectBoardPosition(rowId, itemId);
              }}
            >
              {item}
            </div>
          ))
        )}
      </div>
      {gameCtx.isGameOver && (
        <button className={styles.ButtonRestart} onClick={gameCtx.startNewGame}>
          Continue
        </button>
      )}
    </div>
  );
};

export { GameContainer };
