import { expect, test } from 'vitest'
import Money from './money'

test('adds 1 + 2 to equal 3', () => {
    const five = new Money(5, "USD");
    expect(five.times(2)).toBe(10)
}) 