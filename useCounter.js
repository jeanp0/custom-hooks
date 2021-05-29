import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (value = 1) => {
    if (!typeof value !== "number") value = Number.parseInt(value);
    setCounter(counter + value);
  };
  const decrement = (value = 1) => {
    if (!typeof value !== "number") value = Number.parseInt(value);
    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
