import Y2KButton from "./Y2KButton";
import styles from './GameOptions.module.css';

const GameOptions = ({ deletePet }) => {
  return (
    <div className={styles['options']}>
      <Y2KButton
        onClick={deletePet}
        action={'Release Pet'}
      />
    </div>
  );
}

export default GameOptions;
