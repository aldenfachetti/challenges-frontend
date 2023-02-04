// A string S consisting of N characters is called properly nested if:
//         S is empty;
//         S has the form "(U)" where U is a properly nested string;
//         S has the form "VW" where V and W are properly nested strings.

// For example, string "(()(())())" is properly nested but string "())" isn't.

// Write a function:
// function solution(S);
// that, given a string S consisting of N characters, returns 1 if string S is
// properly nested and 0 otherwise.

// For example, given S = "(()(())())", the function should return 1 and given
// S = "())", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:
//         N is an integer within the range [0..1,000,000];
//         string S consists only of the characters "(" and/or ")".

function solution(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(S[i]);
    } else {
      if (stack.length === 0) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
