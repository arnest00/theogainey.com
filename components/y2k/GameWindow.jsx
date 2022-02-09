import styles from './GameWindow.module.css';

const GameWindow = ({
  saveState,
  initializePet,
  feedPet,
  playWithPet
}) => {
  const { name, hunger, trust } = saveState;

  return (
    <section className={styles['game-container']}>
      <h2 className={styles['game-title']}>Theogotchi</h2>

      <div className={styles['game-window']}>
        <p>Name: {name}</p>
        <p>Hunger: {hunger}</p>
        <p>Trust: {trust}</p>
        <button onClick={feedPet}>Feed Pet</button>
        <button onClick={playWithPet}>Play with Pet</button>
      </div>
    </section>
  );
}

export default GameWindow;
