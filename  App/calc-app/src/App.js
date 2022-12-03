import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const simbols = ["+", "-", "/", "*", "."];

export default function Calc() {
  const [calculate, setCalculate] = useState("");

  const backspace = () => {
    try {
      setCalculate(calculate.slice(0, -1))
    }catch {
      setCalculate("")
    }
  }

  return (
    <div>
      <h1 className="title">Calculate</h1>
      <div className="container">
        <input
          value={calculate}
          onChange={(e) => setCalculate(calculate + e.target.value)}
        />
        <div className="btn-group">
          <div className="btns">
            {numbers.map((number) => (
              <button
                value={number}
                onClick={(e) => setCalculate(calculate + e.target.value)}
                className="btn-number text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {number}
              </button>
            ))}
          </div>
          <div>
            {simbols.map((simbol) => (
              <button
                value={simbol}
                onClick={(e) => setCalculate(calculate + e.target.value)}
                className="btn-leters focus:outline-none text-white bg-orange-200 hover:bg-orange-300 focus:ring-4 focus:ring-orange-600 font-medium rounded-lg px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-600 text-lg"
              >
                {simbol}
              </button>
            ))}
          </div>
          <div className="btns">
            <button
              onClick={() => backspace()}
              className="btn-dell text-lg"
            >
              Dell
            </button>
            <button
              onClick={() => {setCalculate(eval(calculate))}}
              className="btn-result text-lg"
            >
              =
            </button>
            {console.log(calculate)}
            <button
              onClick={() => setCalculate('')}
              className="w-16 h-20 ml-1 my-2 text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 "
            >
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

   
