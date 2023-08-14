// ClockNumbers.tsx
import React from "react";

interface ClockNumbersProps {
  count: number;
}

const ClockNumbers: React.FC<ClockNumbersProps> = ({ count }) => {
  const numbers = [...Array(count)].map((_, index) => index + 1);

  return (
    <>
      {numbers.map((number) => {
        const rotation = (360 / count) * number - 90.5;
        const translateX = Math.cos((rotation * Math.PI) / 180) * 87;
        const translateY = Math.sin((rotation * Math.PI) / 180) * 87;

        return (
          <div
            key={number}
            className="number"
            style={{
              transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`,
            }}
          >
            {number}
          </div>
        );
      })}
    </>
  );
};

export default ClockNumbers;
