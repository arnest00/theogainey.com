import { Fragment } from 'react';

import styles from './NewGameView.module.css';

const NewGameView = ({
  animationsEnabled,
  initializePet
}) => {
  return (
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
  );
}

export default NewGameView;
