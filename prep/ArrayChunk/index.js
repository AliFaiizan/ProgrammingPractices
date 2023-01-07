

function chunk(array, size) {
  // Write your code here.
    let parentArray = [];
    let childArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % size === 0 && i !== 0 ) {
            parentArray.push(childArray);
            childArray = [];
        }
        childArray.push(array[i]);
    }
    parentArray.push(childArray);
    return parentArray;
}

console.log(chunk([1,2,3,4,5,6,7,8,9,10], 4))

module.exports=chunk;