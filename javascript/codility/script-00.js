// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000]; each element of array A is an integer
// within the range [−1,000,000..1,000,000].

//================================================================================================
// SOLUTION 01
const integers = [5, -345, 562456, 95345, 4, 232, 1, 2, 3, 7, -457];

function solution(A) {
  let newArray = A.sort((a, b) => a - b);
  let lowestNumber = 1;
  for (let i = 0; i < newArray.length; i++) {
    const n = newArray[i];
    if (n > 0) {
      if (lowestNumber < n) {
        return lowestNumber;
      } else {
        lowestNumber = n + 1;
      }
    }
  }
  return lowestNumber;
}

console.log(solution(integers)); //6

//================================================================================================

// SOLUTION 02
function solution(arr) {
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    seen.set(arr[i]);
  }

  for (let i = 1; i <= arr.length + 1; i++) {
    if (!seen.has(i)) return i;
  }

  return 1;
}

console.log(solution([1, 3, 6, 4, 1, 2])); //-> 5
console.log(solution([1, 2, 3])); //-> 4
console.log(solution([-1, -3])); //-> 1
