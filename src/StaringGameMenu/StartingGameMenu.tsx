import styles from "./StartingGameMenu.module.scss";
import { ChoiceContainer } from "./ChoiceContainer";


const StartingGameMenu = () => {
  return (
    <div className={styles.StartingContainer}>
      <h2>TIC-TAC-TOE</h2>
      <h3>Pick who goes first</h3>
      <div className={styles.Choices}>
        <ChoiceContainer choice="X" />
        <ChoiceContainer choice="O" />
      </div>
    </div>
  );
};

export { StartingGameMenu };
