import styles from "./StartingGameMenu.module.scss";
import { ChoiceContainer } from "./ChoiceContainer";
import { GameMode } from "./GameMode";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

const StartingGameMenu = () => {
  const gameCtx = useContext(GameContext);

  return (
    <div className={styles.StartingContainer}>
      <h2>TIC-TAC-TOE</h2>
      {gameCtx.player1Value === null && (
        <>
          <h3>Pick who goes first</h3>
          <div className={styles.Choices}>
            <ChoiceContainer choice="X" />
            <ChoiceContainer choice="O" />
          </div>
        </>
      )}
      {gameCtx.player1Value !== null && (
        <>
          <h3>Play with</h3>
          <div className={styles.Choices}>
            <div className={styles.GameModeContainer}>
              <GameMode mode="computer" />
              <span className={styles.Mode}>Computer</span>
            </div>
            <div className={styles.GameModeContainer}>
              <GameMode mode="friend" />
              <span className={styles.Mode}>Friend</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { StartingGameMenu };
