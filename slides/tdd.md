# Test Driven Development workshop

<!-- end_slide -->

## What's TDD?
Test Driven Development is a technique for building software that guides software development by writing tests.

<!-- end_slide -->

## Yes but... What does it mean?
Test Driven Development (TDD) is a software development process that force you to write a test that makes your code fails first then write the implementation to make it pass the test. In other words, your system behavior driven by written tests.

<!-- end_slide -->

## How do you do it?

1. Write a list of the test scenarios you want to cover - Acceptance Criteria
2. Turn exactly one item on the list into an actual, concrete, runnable test
3. Change the code to make the test (& all previous tests) pass
4. Optionally refactor to improve the implementation design
5. Until the list is empty, go back to #2

<!-- end_slide -->

![](images/tdd.png)

<!-- end_slide -->

## A practical example

Test Scenarios:

Create a function that takes an array of integers and returns their sum (for an empty array, it will return 0)



### Example:
```
calculateSum([]) => 0

calculateSum([5]) => 5

calculateSum([4, 8]) => 12

calculateSum([4, 8, 1, 4, 6]) => 23
```
<!-- end_slide -->

## Let's try!

Clone 

```https://github.com/LorenzoCianciaruso-Ki/tdd-workshop```

<!-- end_slide -->

## Another practical example

Test Scenarios:

Print the numbers from 1 to 100. But for multiples of three, print "Fizz” instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".


### Example:
```
fizzBuzz(1) => "1"

fizzBuzz(3) => "Fizz"

fizzBuzz(5) => "Buzz"

fizzBuzz(30) => "FizzBuzz"
```

<!-- end_slide -->
