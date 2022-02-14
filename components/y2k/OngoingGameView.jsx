import { Fragment } from 'react';
import Image from 'next/image';

import GameActions from './GameActions';
import styles from './OngoingGameView.module.css';

const OngoingGameView = ({
  animationsEnabled,
  saveState,
  feedPet,
  playWithPet
}) => {
  const { hunger, trust } = saveState;

  return (
    <Fragment>
      <div className={styles['stats']}>
        <span>Hunger: {hunger}</span>
        <span>Trust: {trust}</span>
      </div>

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
      
      <GameActions
        feedPet={feedPet}
        playWithPet={playWithPet}
      />
    </Fragment>
  );
}

export default OngoingGameView;
