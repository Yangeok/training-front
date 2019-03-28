import React, { useState, useEffect } from 'react';

const handleSetStatus = () => {
  const [count, setCount] = useState(42);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default handleSetStatus;
