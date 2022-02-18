import { useState, useEffect } from 'react';

import GameWindow from './GameWindow';

const GameEngine = ({ animationsEnabled }) => {
  const MIN_HUNGER = 0;
  const MAX_HUNGER = 3;
  const MIN_TRUST = 0;
  const MAX_TRUST = 5;
  const [ saveState, setSaveState ] = useState(null);

  useEffect(() => {
    let retrievedSave = null;
    if (window) retrievedSave = JSON.parse(localStorage.getItem('pet'));

    setSaveState(retrievedSave);
  }, []);

  const initializePet = () => {
    localStorage.setItem('pet', JSON.stringify({ hunger: 1, trust: 0, days: 0 }));
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

  const updatePet = () => {
    const newSaveData = { ...saveState };

    newSaveData.days = newSaveData.days + 1;
    if (newSaveData.days % 3 === 0) newSaveData.trust = Math.max(newSaveData.trust - 0.5, MIN_TRUST);
    newSaveData.hunger = Math.min(newSaveData.hunger + 1, MAX_HUNGER);

    setSaveState(newSaveData);
  };

  const deletePet = () => {
    localStorage.removeItem('pet');
    setSaveState(null);
  };

  return (
    <GameWindow
      animationsEnabled={animationsEnabled}
      saveState={saveState}
      initializePet={initializePet}
      namePet={namePet}
      feedPet={feedPet}
      playWithPet={playWithPet}
      updatePet={updatePet}
      deletePet={deletePet}
    />
  );
}

export default GameEngine;
