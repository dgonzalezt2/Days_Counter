import React, { useEffect, useRef, useState } from 'react';
import CountDownCard from './CountDownCard';

const CountDownTimer = () => {
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeDifference = () => {
    const startDate = new Date('2016-06-19T00:00:00');
    const currentDate = new Date();

    const timeDifference = Math.abs(currentDate - startDate) / 1000;

    const days = Math.floor(timeDifference / 86400);
    const hours = Math.floor((timeDifference % 86400) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = Math.floor(timeDifference % 60);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    calculateTimeDifference();

    const interval = setInterval(() => {
      calculateTimeDifference();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown__container">
      <CountDownCard label="días" number={days} cardRef={DaysCardRef} />
      <CountDownCard label="horas" number={hours} cardRef={HoursCardRef} />
      <CountDownCard label="minutos" number={minutes} cardRef={MinutesCardRef} />
      <CountDownCard label="segundos" number={seconds} cardRef={SecondsCardRef} />
    </div>
  );
};

export default CountDownTimer;
