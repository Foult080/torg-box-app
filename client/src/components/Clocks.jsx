import React, { useEffect, useState } from 'react';
import { Header, Select } from 'semantic-ui-react';
import { calculateDegrees, getTimeInTimezone } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { loadTimeZones, selectTimeZones } from '../reducers/TimeZoneReducer';
import Loader from './Loader';

const renderHourMarks = () => {
  const marks = [];
  for (let i = 0; i < 12; i++) {
    marks.push(<div key={i} className="hour-mark" style={{ transform: `rotate(${i * 30}deg) translate(0, -90px)` }}></div>);
  }
  return marks;
};

const Clock = ({ timeZones }) => {
  const [timeZone, setTimeZone] = useState(timeZones[0].value || null);
  const [time, setTime] = useState(getTimeInTimezone(timeZone));
  const onSelectCity = (e, { value }) => setTimeZone(value);

  // таймер на форму
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getTimeInTimezone(timeZone));
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeZone]);

  const { hourDeg, minuteDeg, secondDeg } = calculateDegrees(time);
  const boardTime = Intl.DateTimeFormat('ru-RU', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(time);

  return (
    <div className="city-timers">
      <div className="clock">
        <div className="clock-face">
          {renderHourMarks()}
          <div className="hand hour-hand" style={{ transform: `rotate(${hourDeg + 90}deg)` }}></div>
          <div className="hand minute-hand" style={{ transform: `rotate(${minuteDeg + 90}deg)` }}></div>
          <div className="hand second-hand" style={{ transform: `rotate(${secondDeg + 90}deg)` }}></div>
        </div>
        <Header as="h3" textAlign="center">
          {boardTime}
        </Header>
        <Select placeholder="Выберете город" options={timeZones} id="selectCity" name="selectCity" value={timeZone} onChange={onSelectCity} />
      </div>
    </div>
  );
};

const Clocks = () => {
  const dispatch = useDispatch();
  const { loading, timeZones } = useSelector(selectTimeZones);
  useEffect(() => {
    dispatch(loadTimeZones());
  }, []);
  if (loading) return <Loader />;
  else
    return (
      <div className="clock-content">
        <Clock timeZones={timeZones} />
        <Clock timeZones={timeZones} />
      </div>
    );
};

export default Clocks;
