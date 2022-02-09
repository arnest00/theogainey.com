import { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [ time, setTime ] = useState(new Date());

  const getCurrentTime = time => {
    const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes} ${period}`;
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <p>
      {getCurrentTime(time)}
    </p>
  );
}

export default CurrentTime;
