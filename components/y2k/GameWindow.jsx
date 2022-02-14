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
    <section className={`${styles['game']} text-align-center`}>
      <h2 className={`h2`}>
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
              className={`${styles['game__pet']} pixel-art`}
              alt={'Pixel art of digital pet - animated'}
            />
            :
            <Image
              src="/y2k/pet-sprite-static.gif"
              height={120}
              width={120}
              className={`${styles['game__pet']} pixel-art`}
              alt={'Pixel art of digital pet'}
            />
          }
          <div className={styles['game__actions']}>
            <button
              onClick={feedPet}
              className={styles['game__button']}
            >
              Feed
            </button>
            <button
              onClick={playWithPet}
              className={styles['game__button']}
            >
              Play
            </button>
          </div>
        </div>
        :
        <div className={styles['game__window']}>
          <p>Tap on the strange, football-shaped egg to hatch a new pet!</p>
          {animationsEnabled ?
            <input
              type="image"
              alt="Pixel art of an egg - animated"
              onClick={initializePet}
              src="/y2k/egg-sprite.gif"
              className={`${styles['game__egg-button']} pixel-art`}
            />
            :
            <input
              type="image"
              alt="Pixel art of an egg"
              onClick={initializePet}
              src="/y2k/egg-sprite-static.gif"
              className={`${styles['game__egg-button']} pixel-art`}
            />
          }
        </div>
      }

      <div className={styles['game__options']}>
        <button
          onClick={deletePet}
          className={styles['game__button']}
        >
          Delete Pet
        </button>
      </div>
    </section>
  );
}

export default GameWindow;
