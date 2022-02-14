import Y2KButton from "./Y2KButton";
import styles from './GameActions.module.css';

const GameActions = ({ feedPet, playWithPet }) => {
  return (
    <div className={styles['actions']}>
      <Y2KButton
        onClick={feedPet}
        action={'Feed'}
      />
      
      <Y2KButton
        onClick={playWithPet}
        action={'Play'}
      />
    </div>
  );
}

export default GameActions;
