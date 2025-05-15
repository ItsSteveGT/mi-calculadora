import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handlePercentage = () => {
    try {
      const value = parseFloat(input);
      setInput((value / 100).toString());
    } catch {
      setResult('Error');
    }
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result !== '' ? '= ' + result : ''}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">AC</button>
        <button onClick={handleDelete}>C</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={() => handleClick('/')}>÷</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>×</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={handleEqual} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;