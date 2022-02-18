import NewGameView from './NewGameView';
import OngoingGameView from './OngoingGameView';
import GameOptions from './GameOptions';
import styles from './GameWindow.module.css';

const GameWindow = ({
  animationsEnabled,
  saveState,
  initializePet,
  namePet,
  feedPet,
  playWithPet,
  updatePet,
  deletePet
}) => {
  return (
    <section className={`${styles['game']} text-align-center`}>
      <h2 className={`h2`}>
        { saveState === null || Object.keys(saveState).length === 3 ?
          'Theogotchi'
          :
          saveState.name
        }
      </h2>

      <div className={styles['game__window']}>
        {saveState === null || Object.keys(saveState).length === 3 ?
          <NewGameView
            animationsEnabled={animationsEnabled}
            saveState={saveState}
            initializePet={initializePet}
            namePet={namePet}
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
        updatePet={updatePet}
        deletePet={deletePet}
      />}
    </section>
  );
}

export default GameWindow;
