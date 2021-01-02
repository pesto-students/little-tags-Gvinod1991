import React, { useState } from "react";
import "./counter.scss";

function Counter({ quantity, setQuantity }) {
  const [count, setCount] = useState(quantity);
  const [disabled, setDisabled] = useState("flex-child");

  const reduceCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setDisabled("flex-child");
      if (count - 1 === 0) {
        setDisabled("flex-child disabled");
      }
      setQuantity(count - 1);
    }
  };
  
  return (
    <>
      <div className="flex-container">
        <div onClick={reduceCount} className={disabled}>
          {" "}
          -{" "}
        </div>
        <div className="flex-child">{count}</div>
        <div
          className="flex-child"
          onClick={() => {
            setCount(count + 1);
            setQuantity(count + 1);
            setDisabled("flex-child");
          }}
        >
          {" "}
          +{" "}
        </div>
      </div>
    </>
  );
}

export default Counter;
