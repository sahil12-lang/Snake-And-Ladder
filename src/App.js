import React from "react";
import "./asd.css";
import { useState } from "react";
// import "./player";


export default function App() {
  const [sampleNumber, setSampleNumber] = useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [xPosi, setXposi] = useState(0);
  
  // const x = 10;
  const onClick = () => {
    setXposi((x) => x + 50);
    
  };  
  // const styles = {
  //   transform: translateX (xPosi),
  // };


  const getRandomNumber = () => {
    let min = 1;
    let max = 6;
    setSampleNumber(Math.round(Math.random() * (max - min) + min));
  };

  return (
    <div className="main">
      <div className="uuu">
        <div style={{ display: "block", textAlign: "center" }}>
          <button
            onClick={() => getRandomNumber()}
            style={{ marginTop: "20px" }}
          >
            Dice Numbers{" "}
          </button>
          <p style={{ margin: 0 }}> {sampleNumber} </p>
        </div>
        {arr.map((val, ind, arru) => (
          <div
            className="head"
            style={{
              flexDirection: val % 2 === 0 ? "row-reverse" : "row",
            }}
            key={val.toString()}
          >
            {arr.map((value, index, ar) => (
              <div
                className="block"
                style={{
                  backgroundColor: value % 2 === 0 ? "white" : "skyblue",
                }}
                key={value.toString()}
              >
                <span>{value + parseInt(ind + "0")}</span>
              </div>
            ))}
          </div>
        ))}
        <h1 className="heading">Snake and Ladders</h1>
      </div>
      <div>
        <div style={{transform: `translateX(${xPosi}px)` }}>
          <p className="emoji" >
            &#128512;
          </p>
        </div>
        <button onClick={onClick}>
          inc
        </button>
      </div>
    </div>
  );
}

