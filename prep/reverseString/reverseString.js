


function reverse(str){
   return str.split('').reduce( rev , char => char+rev,'')    
}


// function reverse(str) {
//   let temp = "";

//   for (const i of str) {
//     temp = i + temp;
//   }

//   return temp;
// }




module.exports=reverse