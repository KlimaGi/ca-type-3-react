import React, { useState } from 'react';
import Input from './input';
import Button from './button';

const CounterExample = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(4);

  return (
    <div style={{ fontSize: 30, textAlign: 'center', marginTop: '2rem' }}>

      <div>{`Count: ${count}`}</div>
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 20, marginTop: '1rem',
      }}
      >
        <Input
          type="number"
          value={step}
          // lifting state up example
          onChange={(e) => setStep(e.target.valueAsNumber)}
        />
        <Button onClick={() => setCount(count - step)}>-</Button>
        <Button onClick={() => setCount(count + step)}>+</Button>

      </div>

    </div>
  );
};

export default CounterExample;
