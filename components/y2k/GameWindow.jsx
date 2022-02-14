import NewGameView from './NewGameView';
import OngoingGameView from './OngoingGameView';
import GameOptions from './GameOptions';
import styles from './GameWindow.module.css';

const GameWindow = ({
  animationsEnabled,
  saveState,
  initializePet,
  feedPet,
  playWithPet,
  deletePet
}) => {
  return (
    <section className={`${styles['game']} text-align-center`}>
      <h2 className={`h2`}>
        { saveState === null ?
          'Theogotchi'
          :
          saveState.name
        }
      </h2>

      <div className={styles['game__window']}>
        {saveState === null ?
          <NewGameView
            animationsEnabled={animationsEnabled}
            initializePet={initializePet}
          />
          :
          <OngoingGameView
            animationsEnabled={animationsEnabled}
            saveState={saveState}
            feedPet={feedPet}
            playWithPet={playWithPet}
          />
        }
      </div>

      {saveState && <GameOptions
        deletePet={deletePet}
      />}
    </section>
  );
}

export default GameWindow;
