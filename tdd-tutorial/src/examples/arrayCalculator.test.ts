import { expect, test } from 'vitest'
import ArrayCalculator from './arrayCalculator'

test('first test', () => {
    const calculator = new ArrayCalculator();
    expect(calculator).toBeFalsy()
}) 