// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(val){

  
   return parseInt(
    val
    .toString()
    .split('')
    .reduce((arr,inte) => inte+arr)
    )
     * Math.sign(val)
  
}

module.exports=reverseInt