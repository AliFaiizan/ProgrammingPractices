//[5,1,4,2]
//[8,40,10,20]


//brute force
// function arrayOfProducts(arr){
//     let result=[];
//     let sum=1;
//     for (i=0; i<arr.length ; i++) {
//         for(j=0 ; j< arr.length; j++){
//             if(j===i)
//             continue
//             sum = sum * arr[j]
//         }
//         result[i]=sum;
//         sum=1;
//     }
//     return result;
// }

function arrayOfProducts(arr) {
  let result = [];
  let leftProduct=[];
  let rightProduct=[]
  let sum = 1;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (j === i) continue;
      sum = sum * arr[j];
    }
    result[i] = sum;
    sum = 1;
  }
  return result;
}

console.log(arrayOfProducts([5,1,4,2]))