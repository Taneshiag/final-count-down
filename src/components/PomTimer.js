import React from 'react'
import './PomTimer.css'
import { useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './utils/CountDownTimerUtils';


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

const PomTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    
    useEffect(() => {
      const intervalId = setInterval(()  => {
        updateRemainingTime(countdownTimestampMs);
      }, 1000);
      return () => clearTimeout(intervalId)
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="pom-Timer">
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
  )
}

export default PomTimer