import { useState } from 'react';

import GameWindow from './GameWindow';

const GameEngine = () => {
  const [saveState, setSaveState] = useState(
    {
      name: 'Osmond',
      hunger: 1,
      trust: 2
    }
  );
  const MIN_HUNGER = 0;
  const MAX_TRUST = 5;

  const initializePet = () => {
    // Create a pet, if there is no save data in localStorage
  };

  const feedPet = () => {
    const newSaveState = { ...saveState };
    let newValue = newSaveState.hunger - 1;

    if (newValue < MIN_HUNGER) newValue = MIN_HUNGER;
    newSaveState.hunger = newValue;

    setSaveState(newSaveState);
  };
  
  const playWithPet = () => {
    const newSaveState = { ...saveState };
    let newValue = (parseFloat(newSaveState.trust) + 0.5).toFixed(1);
  
    if (newValue > MAX_TRUST) newValue = MAX_TRUST;
    newSaveState.trust = newValue;
  
    setSaveState(newSaveState);
  };

  return (
    <GameWindow
      saveState={saveState}
      initializePet={initializePet}
      feedPet={feedPet}
      playWithPet={playWithPet}
    />
  );
}

export default GameEngine;
