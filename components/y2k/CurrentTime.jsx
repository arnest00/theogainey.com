function CurrentTime() {
  const getCurrentTime = () => {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    return <p>{`${hours}:${minutes} ${period}`}</p>;
  };

  return (
    <p>
      {getCurrentTime()}
    </p>
  );
}

export default CurrentTime;
