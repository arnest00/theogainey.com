import Y2KButton from "./Y2KButton";
import styles from './GameOptions.module.css';

const GameOptions = ({
  deletePet,
  updatePet
}) => {
  return (
    <div className={styles['options']}>
      <Y2KButton
        onClick={deletePet}
        action={'Release Pet'}
      />
      <Y2KButton
        onClick={updatePet}
        action={'Simulate the Relentless Passage of Time'}
      />
    </div>
  );
}

export default GameOptions;
