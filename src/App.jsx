import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./action/action";

const App = () => {
  const myState = useSelector((state) => state.changeNum);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <h1>Increment Decrement using react-redux</h1>
        <div className="innerDiv">
          <a
            className="plus"
            title="Increment"
            onClick={() => {
              dispatch(incNum(1));
            }}
          >
            <span>+</span>
          </a>
          <input
            type="text"
            className="result"
            name="quantity"
            value={myState}
          />
          <a
            className="minus"
            title="decrement"
            onClick={() => {
              dispatch(decNum(1278));
            }}
          >
            <span>-</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
