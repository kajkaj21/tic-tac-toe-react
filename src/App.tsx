import styles from "./App.module.scss";
import { StartingGameMenu } from "./StaringGameMenu/StartingGameMenu";
import { GameContainer } from "./GameContainer/GameContainer";
import { GameContext } from "./contexts/GameContext";
import { useContext } from "react";

function App() {
  const gameCtx = useContext(GameContext);

  return (
    <main className={styles.MainContainer}>
      {gameCtx.player1Value === null ? <StartingGameMenu /> : <GameContainer />}
    </main>
  );
}

export default App;
