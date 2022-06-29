import React from "react";

interface Props {
  number: string | number;
}

const Results = ({ number }: Props) => {
  return (
    <div>
      <h3>
        {number <= 0
          ? "You haven't drank water today"
          : `You drank ${number} glass of water`}
      </h3>
    </div>
  );
};

export default Results;
