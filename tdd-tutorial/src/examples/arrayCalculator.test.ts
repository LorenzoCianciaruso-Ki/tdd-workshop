import { expect, test } from 'vitest'
import ArrayCalculator from './arrayCalculator'

test('should return 0 when parameter is empty array', () => {
    const calculator = new ArrayCalculator();

    const total = calculator.sum([]);

    expect(total).toBe(0);
});

test('should return the first element when array contains one element', () => {
    const calculator = new ArrayCalculator();

    const total = calculator.sum([5]);

    expect(total).toBe(5);
})

test('should sum up all the values in the array', () => {
    const calculator = new ArrayCalculator();

    const total = calculator.sum([4, 8]);

    expect(total).toBe(12);
});

test('should sum up all the values in the array', () => {
    const calculator = new ArrayCalculator();

    const total = calculator.sum([4, 8, 1, 4, 6]);

    expect(total).toBe(23);
});

test('test negative numbers', () => {
    const calculator = new ArrayCalculator();

    const total = calculator.sum([3, -5, 3, -2 , -1, 6]);

    expect(total).toBe(4);
});

test('test decimal numbers', () => {
    const calculator = new ArrayCalculator();

    const total = calculator.sum([1.4, -0.4, 1.8]);

    expect(total).toBe(2.8);
});