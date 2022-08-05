import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import styles from "./GameMode.module.scss";

type Props = {
  mode: "friend" | "computer";
};

const GameMode = ({ mode }: Props) => {
  const gameCtx = useContext(GameContext);

  return (
    <div
      className={styles.Container}
      onClick={() => {
        gameCtx.selectGameMode(mode);
      }}
    >
      {mode === "computer" && (
        <span className="material-symbols-outlined">computer</span>
      )}
      {mode === "friend" && (
        <span className="material-symbols-outlined">person</span>
      )}
    </div>
  );
};

export { GameMode };
