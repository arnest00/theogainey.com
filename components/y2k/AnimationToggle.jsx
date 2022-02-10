const AnimationToggle = ({ animationsEnabled, setAnimationsEnabled }) => {
  const handleSetAnimationsEnabled = () => {
    const currentState = animationsEnabled;

    setAnimationsEnabled(!currentState);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="enableAnimations"
        name="enableAnimations"
        onChange={handleSetAnimationsEnabled}
        defaultChecked={animationsEnabled}
      />
      <label htmlFor="enableAnimations">Enable Animations</label>
    </div>
  );
};

export default AnimationToggle;