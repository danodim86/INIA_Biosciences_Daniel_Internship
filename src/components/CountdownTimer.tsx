import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(4000);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours > 0 ? `${hours}:` : ""}${
      minutes < 10 ? `0${minutes}` : minutes
    }:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className="countdownTimer">
      {timeLeft > 0 ? (
        <p>
          Your next treatment starts in: <span>{formatTime(timeLeft)}</span>
        </p>
      ) : (
        <p>Your next treatment is ready!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
