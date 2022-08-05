import { StartingGameMenu } from "./components/StaringGameMenu/StartingGameMenu";
import { GameContainer } from "./components/GameContainer/GameContainer";
import { GameContext } from "./contexts/GameContext";
import { useContext } from "react";

function App() {
  const gameCtx = useContext(GameContext);

  return (
    <main>
      {gameCtx.player1Value === null || gameCtx.gameMode === null ? (
        <StartingGameMenu />
      ) : (
        <GameContainer />
      )}
    </main>
  );
}

export default App;
