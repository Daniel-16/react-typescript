import React, { useState } from "react";
import Results from "./Results";

const Input = () => {
  const [number, setNumber] = useState<string | number>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  return (
    <div>
      <Results number={number} />
      <form>
        <input
          type="number"
          className="form-control"
          placeholder="Enter a number from 1 - 8"
          onChange={handleChange}
          min="0"
          max="9"
        />
      </form>
      <p>{number}</p>
    </div>
  );
};

export default Input;
