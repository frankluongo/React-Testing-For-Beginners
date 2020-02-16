import React, { useState } from "react";

const Counter = () => {
  const [count, updateCounter] = useState(0);
  return (
    <div data-counter-wrapper>
      <button data-testid="counter-button" onClick={incrementCounter}>
        {count}
      </button>
    </div>
  );

  function incrementCounter() {
    updateCounter(count + 1);
  }
};

export default Counter;
