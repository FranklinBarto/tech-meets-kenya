import { render, screen } from '@testing-library/react';
import App from './App';
import { appendIds } from './utils/utils';

describe('appendIds', () => {
  it('should append id to each item in the array', () => {
    const input = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ];

    const expectedOutput = [
      { name: 'Alice', age: 25, id: 1 },
      { name: 'Bob', age: 30, id: 2 },
      { name: 'Charlie', age: 35, id: 3 }
    ];

    const result = appendIds(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const input = [];
    const expectedOutput = [];

    const result = appendIds(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should not modify the original array', () => {
    const input = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 }
    ];

    const originalInput = [...input]; // Shallow copy

    appendIds(input);

    expect(input).toEqual(originalInput); // Ensure original array remains unchanged
  });

  it('should correctly append ids when array has multiple items', () => {
    const input = [
      { product: 'Laptop', price: 1000 },
      { product: 'Phone', price: 500 }
    ];

    const expectedOutput = [
      { product: 'Laptop', price: 1000, id: 1 },
      { product: 'Phone', price: 500, id: 2 }
    ];

    const result = appendIds(input);
    expect(result).toEqual(expectedOutput);
  });
});