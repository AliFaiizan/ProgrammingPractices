// ZigZag traverse of a two dimensional array
// 

let array = [
  [1, 3, 4,10],
  [2, 5, 9,11],
  [6, 8, 12,15],
  [7, 13,14,16],
  
];

let height=array.length-1;
let width= array[0].length-1;

let row=0 ;let col=0;
let result =[]

function outOfBound(height,width,row,col){
    return row < 0 || row > height || col>width || col <0
}
let goingDown= true;

while (!outOfBound(height, width, row, col)){

        result.push(array[row][col]);

    if(goingDown){
        if(col=== 0 || row === height){
            goingDown=false;
            if(row===height){
                col +=1
            }else{
                row +=1
            }

        }else{
            row +=1;
            col -=1;
        }
    }else{
        if(col=== width || row ===0){
            goingDown=true;
            if(col===width){
                row+=1
            }else{
                col+=1
            }
        }else{
            row -=1;
            col +=1;
        }
    }
}

console.log(result)

