import { Fragment } from 'react';

import styles from './DigitalPet.module.css';

function DigitalPet() {
  return (
    <Fragment>
      <p className={styles['game-title']}>Theogotchi</p>

      <div className={styles['game-window']}></div>
    </Fragment>
  );
}

export default DigitalPet;
