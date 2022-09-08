import React, { useState } from 'react';

const buttonStyle = {
  fontSize: 30,
  padding: '5px 20px',
  cursor: 'pointer',
};

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
        <input
          type="number"
          style={{
            fontSize: 30,
            width: 140,
            textAlign: 'center',
          }}
          value={step}
          // Number(e.target.value)
          onChange={(e) => setStep(e.target.valueAsNumber)}
        />
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setCount(count - step)}
        >
          -
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setCount(count + step)}
        >
          +
        </button>

      </div>

    </div>
  );
};

export default CounterExample;
