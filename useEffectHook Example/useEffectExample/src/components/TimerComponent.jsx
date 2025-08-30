import React, { use } from "react";
import { useState, useEffect } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0); //create a state variable with initial value 0.

  //Variation2: It will run only on first render.
  useEffect(() => {
    console.log("setInterval Executed");
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts.
    return () => {
      console.log("Time to Stop the Timer");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Seconds:{seconds}</h1>
    </div>
  );
}

export default TimerComponent;
