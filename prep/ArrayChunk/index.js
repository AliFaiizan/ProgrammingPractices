

// function chunk(array, size) {
//   // Write your code here.
//     let parentArray = [];
//     let childArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (i % size === 0 && i !== 0 ) {
//             parentArray.push(childArray);
//             childArray = [];
//         }
//         childArray.push(array[i]);
//     }
//     parentArray.push(childArray);
//     return parentArray;
// }

// console.log(chunk([1,2,3,4,5,6,7,8,9,10], 4))
  //2nd solution
function chunk (array, size){
    const chunk=[];
    for(let elements of array){
        const last=chunk[chunk.length-1];
        if(!last || last.length===size){
            chunk.push([elements]);
        }else{
            last.push(elements);
        }
    }
    return chunk;
}

module.exports=chunk;