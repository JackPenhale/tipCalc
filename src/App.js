import logo from "./images/logo.svg";
import dollarIcon from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipPer, setTipPer] = useState("0");
  const [total, setTotal] = useState("0");

  const tipArray = [
    { tipString: "5%", math: 0.05 },
    { tipString: "10%", math: 0.1 },
    { tipString: "15%", math: 0.15 },
    { tipString: "20%", math: 0.2 },
    { tipString: "25%", math: 0.25 },
    { tipString: "Custom" },
  ];

  useEffect(() => {
    setTipPer((Math.round((((+bill * +tip) / +people)*100)/100)).toFixed(2));
    setTotal(((+bill * +tip + +bill) / +people).toFixed(2));
  }, [bill, tip, people]);

  const handleTipClick = (tipPercent) => {
    setTip(tipPercent);
    console.log("tippig " + tipPercent);
  };
  let button;

  return (
    <div className="w-screen h-screen bg-light-gray-cyan flex  flex-col justify-end md:justify-center align-middle items-center">
      <img className="pb-11" src={logo} />
      <div className="flex flex-col md:flex-row justify-center align-middle items-center w-full h-4/5 bg-whitey rounded-3xl max-w-5xl md:w-2/3 md:h-2/5 pb-6 md:pb-0">
        <div className="w-10/12 md:w-5/12 h-5/6 flex flex-col justify-between">
          <h3 className="font-semibold text-lg text-dark-gray-cyan">Bill</h3>
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-full relative p-0 m-0">
                <input
                  class="bg-lighter-gray-cyan  rounded w-full py-2 px-4 m-0 pl-7 focus:border-dark-cyan text-right text-3xl font-extrabold text-dark-cyan"
                  name="bill cost"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  type="number"
                />
                <img src={dollarIcon} className="absolute bottom-3 left-2 w-5 h-auto" />
              </div>
            </div>
          </form>
          <h3 className="font-semibold text-lg text-dark-gray-cyan">
            Select Tip %
          </h3>
          <div className="w-full flex flex-wrap ">
            {tipArray.map(({ tipString, math }) => {
              if (!math) {
                return (
                  <input
                    class="bg-lighter-gray-cyan w-5/12 md:w-3/12 m-2 text-dark-cyan text-center py-2 font-extrabold text-xl focus:text-right "
                    name="number of people"
                    placeholder="Custom"
                 
                    onChange={(e) => setTip(e.target.value/100)}
                    type="number"
                  ></input>
                );
              } else if (math !== tip) {
                return (
                  <div
                    className="w-5/12 md:w-3/12 m-2 bg-dark-cyan text-center rounded-md py-2 font-extrabold text-xl text-whitey cursor-pointer"
                    onClick={() => handleTipClick(math)}
                  >
                    {tipString}
                  </div>
                );
              } else {
                return (
                  <div
                    className="w-5/12 md:w-3/12 m-2 bg-strong-cyan text-center rounded-md py-2 font-extrabold text-xl text-dark-cyan cursor-pointer"
                    onClick={() => handleTipClick(math)}
                  >
                    {tipString}
                  </div>
                );
              }
            })}
          </div>
          <h3 className="font-semibold text-lg text-dark-gray-cyan">
            Number of People
          </h3>
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-full relative p-0 m-0">
                <input
                  class="bg-lighter-gray-cyan  rounded w-full py-2 px-4 m-0 pl-7 focus:border-dark-cyan text-right text-3xl font-extrabold text-dark-cyan"
                  name="bill cost"
                  name="number of people"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  type="number"
                />
                <img src={personIcon} className="absolute bottom-3 left-2 w-5 h-auto" />
              </div>
            </div>
          </form>
        </div>
        <div className="w-10/12 md:w-5/12 h-5/6 bg-dark-cyan rounded-3xl flex flex-col justify-between align-middle items-center p-4 md:p-0">
          <div className="w-full flex flex-col align-middle items-center">
            <div className="flex w-10/12 md:w-10/12 justify-between pb-8 pt-12">
              <div>
                <h3 className="font-semibold text-lg text-whitey">
                  Tip Amount
                </h3>
                <h4 className="text-gray-cyan">/ person</h4>
              </div>
              <div className="text-6xl font-extrabold text-strong-cyan">
                ${tipPer}
              </div>
            </div>
            <div className="flex md:w-10/12 justify-between">
              <div>
                <h3 className="font-semibold text-lg text-whitey">Total</h3>
                <h4 className="text-gray-cyan">/ person</h4>
              </div>
              <div className="text-6xl font-extrabold text-strong-cyan">
                ${total}
              </div>
            </div>
          </div>
          <div className="md:w-10/12 cursor-pointer bg-strong-cyan rounded-md font-bold text-xl h-12 text-center py-2 md:mb-7 text-dark-cyan">
            Reset
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
