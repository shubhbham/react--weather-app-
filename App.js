import React, { useState } from "react";
import './index.css';
// import WeatherApi from "./components/WeatherApi";

const App = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      {
      /* <div className="container">
        <h2>Time</h2>
        <h1>{ctime}</h1>
      </div>

      <div className="container1">
        <h2>Date</h2>
        <h1>{date}</h1>
  </div> */}
    </>
  );
};

export default App;
