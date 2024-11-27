"use client"
import { useState, useEffect } from 'react';

const FibonacciGoldenNumbers = () => {
  // Initialize the Fibonacci series
  const [fibSeries, setFibSeries] = useState([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  const [goldenNumbers, setGoldenNumbers] = useState([]);

  // Calculate the Golden Numbers (ratios) based on the Fibonacci series
  useEffect(() => {
    const calculateGoldenNumbers = () => {
      let goldenNums = [];
      for (let i = 2; i < fibSeries.length; i++) {
        const goldenNumber = fibSeries[i] / fibSeries[i - 1];
        goldenNums.push(goldenNumber);
      }
      setGoldenNumbers(goldenNums);
    };

    calculateGoldenNumbers();
  }, [fibSeries]); // Dependency array, the effect will run when fibSeries changes

  return (
    <div>
      <h2>Fibonacci Series</h2>
      <p>{fibSeries.join(', ')}</p>

      <h2>Golden Numbers (Ratios)</h2>
      {goldenNumbers.length > 0 ? (
        <ul>
          {goldenNumbers.map((num, index) => (
            <li key={index}>Golden Number {index + 2}: {num.toFixed(5)}</li>
          ))}
        </ul>
      ) : (
        <p>No Golden Numbers calculated yet.</p>
      )}
    </div>
  );
};

export default FibonacciGoldenNumbers;