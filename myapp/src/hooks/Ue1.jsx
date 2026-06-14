// write a react js script to creat a digital clock running continusliy using use effect and use state

import { useEffect, useState } from "react";

function Ue1() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>{time}</p>
    </div>
  );
}

export default Ue1;