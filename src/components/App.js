import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  let timerId = ""
  let [timeLeft, setTimeLeft] = useState(0);

  // write your code here 

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={countInReverse} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeLeft}</div>
    </div>
  )
}


export default App;
