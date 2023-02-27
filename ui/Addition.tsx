import React, { useState, useMemo } from 'react';

import { AdditionFactoryBean } from './AdditionFactoryBean';

function Addition() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);
  const adder = useMemo(() => new AdditionFactoryBean(0), []);

  const add = () => {
    setResult(adder.add(first, second));
  };

  return (
    <div>
      <h2>Addition</h2>
      <div>
        <label>First Number:</label>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Second Number:</label>
        <input
          type="text"
          value={second}
          onChange={(e) => setSecond(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={add}>Add</button>
      </div>
      <div>
        <label>Result:</label>
        <span>{result}</span>
      </div>
    </div>
  );
}

export { Addition };
