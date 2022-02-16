import { useState, useEffect } from 'react';

import GameWindow from './GameWindow';

const GameEngine = ({ animationsEnabled }) => {
  const MIN_HUNGER = 0;
  const MAX_TRUST = 5;
  const [ saveState, setSaveState ] = useState(null);

  useEffect(() => {
    let retrievedSave = null;
    if (window) retrievedSave = JSON.parse(localStorage.getItem('pet'));

    setSaveState(retrievedSave);
  }, []);

  const initializePet = () => {
    localStorage.setItem('pet', JSON.stringify({ hunger: 1, trust: 0 }));
    setSaveState(JSON.parse(localStorage.getItem('pet')));
  };

  const savePet = (saveData) => {
    localStorage.setItem('pet', JSON.stringify(saveData));
    setSaveState(saveData);
  };

  const namePet = (name) => {
    const newSaveData = { ...saveState };
    newSaveData.name = name;

    savePet(newSaveData);
  };

  const feedPet = () => {
    const newSaveData = { ...saveState };
    let newValue = newSaveData.hunger - 1;

    if (newValue < MIN_HUNGER) newValue = MIN_HUNGER;
    newSaveData.hunger = newValue;

    savePet(newSaveData);
  };
  
  const playWithPet = () => {
    const newSaveData = { ...saveState };
    let newValue = (parseFloat(newSaveData.trust) + 0.5).toFixed(1);
  
    if (newValue > MAX_TRUST) newValue = MAX_TRUST;
    newSaveData.trust = newValue;
  
    setSaveState(newSaveData);
  };

  const deletePet = () => {
    localStorage.removeItem('pet');
    setSaveState(null);
  }

  return (
    <GameWindow
      animationsEnabled={animationsEnabled}
      saveState={saveState}
      initializePet={initializePet}
      namePet={namePet}
      feedPet={feedPet}
      playWithPet={playWithPet}
      deletePet={deletePet}
    />
  );
}

export default GameEngine;
