import { Fragment, useRef } from 'react';
import Image from 'next/image';

import Y2KButton from './Y2KButton';
import styles from './NewGameView.module.css';

const NewGameView = ({
  animationsEnabled,
  saveState,
  initializePet,
  namePet
}) => {
  const nameInput = useRef();

  const handleName = () => {
    let newName = nameInput.current.value;
    if (newName === '') newName = 'Who Dey';

    namePet(newName);
  };

  return (
    <Fragment>
      {saveState === null ?
        <Fragment>
          <p>Tap on the strange, football-shaped egg to hatch a new pet!</p>

          <input
            type="image"
            onClick={initializePet}
            alt={`Pixel art of an egg${animationsEnabled && ' - animated'}`}
            src={animationsEnabled ? 
              '/y2k/egg-sprite.gif'
              :
              '/y2k/egg-sprite-static.gif'
              }
            className={`${styles['egg-button']} pixel-art`}
          />
        </Fragment>
        :
        <Fragment>
          <p>Looks like you have a new friend. Why don't you name your pet?</p>

          <input
            type="text"
            ref={nameInput}
          />

          <div className="flex-center">
            <Image
              height={120}
              width={120}
              className={`${styles['pet']} pixel-art`}
              alt={`Pixel art of digital pet${animationsEnabled && ' - animated'}`}
              src={animationsEnabled ?
                '/y2k/pet-sprite.gif'
                :
                '/y2k/pet-sprite-static.gif'
              }
            />

            <Y2KButton
              onClick={handleName}
              action={'Name'}
            />
          </div>
        </Fragment>
      }
    </Fragment>
  );
}

export default NewGameView;
