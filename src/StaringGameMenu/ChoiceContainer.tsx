import styles from "./ChoiceContainer.module.scss";
import { GameContext } from "../contexts/GameContext";
import { useContext } from "react";

type Props = {
  choice: string;
};

const ChoiceContainer = ({ choice }: Props) => {
  const gameCtx = useContext(GameContext);

  const setPlayersValues = () => {
    if (choice === "X") {
      gameCtx.selectPlayer1Value("X");
      gameCtx.selectPlayer2Value("O");
    }
    if (choice === "O") {
      gameCtx.selectPlayer1Value("O");
      gameCtx.selectPlayer2Value("X");
    }
  };

  return (
    <div className={styles.Container} onClick={setPlayersValues}>
      <span className={choice === "X" ? styles.ChoiceX : styles.ChoiceO}>
        {choice}
      </span>
    </div>
  );
};

export { ChoiceContainer };
