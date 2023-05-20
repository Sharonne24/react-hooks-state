import React, { useState } from "react";

function Counter() {
    // Declare a state variable called 'count' and a function to update it called 'setCount'
  const [count, setCount] = useState(0);

    // Define an event handler function called 'increment'
  function increment() {
        // Update the 'count' state by incrementing it by 1 using 'setCount'
    setCount(count + 1);
  }

    // Render a button element with an onClick event listener set to call the 'increment' function
      // Display the current value of 'count' inside the button
  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
