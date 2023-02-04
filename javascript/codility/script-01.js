// An array A consisting of N integers is given. It contains daily prices of a stock share for a period of N consecutive days. If a single share was bought on day P and sold on day Q, where 0 ≤ P ≤ Q < N, then the profit of such transaction is equal to A[Q] − A[P], provided that A[Q] ≥ A[P]. Otherwise, the transaction brings loss of A[P] − A[Q].

// For example, consider the following array A consisting of six elements such that:

//   A[0] = 23171
//   A[1] = 21011
//   A[2] = 21123
//   A[3] = 21366
//   A[4] = 21013
//   A[5] = 21367
// If a share was bought on day 0 and sold on day 2, a loss of 2048 would occur because A[2] − A[0] = 21123 − 23171 = −2048. If a share was bought on day 4 and sold on day 5, a profit of 354 would occur because A[5] − A[4] = 21367 − 21013 = 354. Maximum possible profit was 356. It would occur if a share was bought on day 1 and sold on day 5.

// Write a function,

// function solution(A);

// that, given an array A consisting of N integers containing daily prices of a stock share for a period of N consecutive days, returns the maximum possible profit from one transaction during this period. The function should return 0 if it was impossible to gain any profit.

// For example, given array A consisting of six elements such that:

//   A[0] = 23171
//   A[1] = 21011
//   A[2] = 21123
//   A[3] = 21366
//   A[4] = 21013
//   A[5] = 21367
// the function should return 356, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..400,000];
// each element of array A is an integer within the range [0..200,000].

// Example test:   [23171, 21011, 21123, 21366, 21013, 21367]

//================================================================================================

// SOLUTION 01
function solution(A) {
  if (A.length < 1) return 0;
  let max = 0;
  let min = A[0];
  for (let day = 0; day < A.length; day++) {
    if (min > A[day]) min = A[day];
    let max_curr = A[day] - min;
    if (max_curr > max) max = max_curr;
  }
  return max;
}

//================================================================================================

// SOLUTION 02
function solution(A) {
  let total = (function (a) {
      let l = a.length,
        s = 0;
      while (--l > -1) {
        s += a[l];
      }
      return s;
    })(A),
    eq = -1,
    l = A.length,
    Lsum = 0,
    Rsum = 0;
  A.forEach(function (n, i) {
    Rsum = total - Lsum - n;
    if (Rsum == Lsum) {
      eq = i; /* in fact no need to continue, should terminate here. */
    }
    Lsum += n;
  });
  return eq;
}

//================================================================================================

// SOLUTION 03
function solution(list) {
  let length = list.length,
    sumRight,
    sumLeft = 0,
    equi_index = -1;

  if (length === 0) {
    return equi_index;
  } else if (length === 1) {
    return 0;
  }

  let total = (function () {
    let sum = 0;
    while (length--) {
      sum += list[length];
    }
    return sum;
  })();

  list.some(function (each, index) {
    sumRight = total - sumLeft - each;
    if (sumLeft === sumRight) {
      equi_index = index;
      return true; // stop iteration
    }

    sumLeft += each;
  });

  return equi_index;
}

//================================================================================================

// SOLUTION 04
function solution(A) {
  var length = A.length;

  // special case to void total calculation
  if (!length) return -1;

  var lSum = 0;
  var rSum = 0;
  var i = 0;

  // get total
  for (; i < length; rSum += A[i++]);

  // reset iterator
  i = 0;

  for (; i < length; i++) {
    rSum -= A[i];
    if (rSum === lSum) return i;
    lSum += A[i];
  }

  return -1;
}

//================================================================================================

// SOLUTION 05
