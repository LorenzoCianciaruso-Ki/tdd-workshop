export default class ArrayCalculator {
    sum(params: number[]) {
        return params.reduce((previous, current) => (previous + current), 0);
    }

    // Test 1
    // 0

    // Test 2 - [5]
    // 0 (previous) + 5 (current) = 5

    // Test 3 - [4, 8]
    // 0
    // 0 (previous) + 4 (current) = 4
    // 4 (previous) + 8 (current) = 12
}