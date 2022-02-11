import Image from 'next/image';

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
    <section className={styles['game']}>
      <h2 className={styles['game__title']}>
        { saveState !== null ?
          saveState.name
          :
          'Theogotchi'
        }
      </h2>

      { saveState !== null ?
        <div className={styles['game__window']}>
          <div className={styles['game__stats']}>
            <span>Hunger: {saveState.hunger}</span>
            <span>Trust: {saveState.trust}</span>
          </div>
          {animationsEnabled ? 
            <Image
              src="/y2k/pet-sprite.gif"
              height={120}
              width={120}
              className={styles['game__sprite']}
              alt={'Pixel art of digital pet - animated'}
            />
            :
            <Image
              src="/y2k/pet-sprite-static.gif"
              height={120}
              width={120}
              className={styles['game__sprite']}
              alt={'Pixel art of digital pet'}
            />
          }
          <div className={styles['game__actions']}>
            <button
              onClick={feedPet}
            >
              Feed
            </button>
            <button
              onClick={playWithPet}
            >
              Play
            </button>
          </div>
        </div>
        :
        <div className={styles['game__window']}>
          <p>You don't have a pet.</p>
          <button onClick={initializePet}>New Pet</button>
        </div>
      }

      <div className={styles['game__options']}>
        <button onClick={deletePet}>Delete Pet</button>
      </div>
    </section>
  );
}

export default GameWindow;
