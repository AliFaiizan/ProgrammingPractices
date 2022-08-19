

function isValidSubsequence(arr, seq) {
  // Write your code here.
  arridx = 0;
  seqidx = 0;

  while (arridx < arr.length && seqidx < seq.length ) {
    if (arr[arridx] === seq[seqidx]) {
      seqidx++;
    } else {
      arridx++;
    }
  }
  return seqidx === seq.length;
}
//true
let array=[5, 1, 22, 25, 6, -1, 8, 10];
let seq = [1, 6, -1, 10];

//false
//if 6=5 in seq

console.log(isValidSubsequence(array, seq))
