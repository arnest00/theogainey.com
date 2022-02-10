import { Fragment, useState, useEffect } from 'react';

import styles from './CurrentTime.module.css';

const CurrentTime = ({ animationsEnabled }) => {
  const [ time, setTime ] = useState(new Date());

  const getCurrentTime = time => {
    const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const period = time.getHours() >= 12 ? 'PM' : 'AM';

    return (
      <p>
        {hours}<span className={ animationsEnabled ? styles['colon--blinking'] : ''}>:</span>{minutes} {period}
      </p>
    );
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <Fragment>
      {getCurrentTime(time)}
    </Fragment>
  );
}

export default CurrentTime;
