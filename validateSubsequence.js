
let seqSub=[1,6,-1,10]
let seqMain=[5,1,22,25,6,-1,8,11]

let i=0;
let j=0;

function findSubsequence(seqSub,seqMain){

for(let j=0; j<seqMain.length; j++){
        if(seqSub[i]===seqMain[j]){          
            i++;
             if (i >= seqSub.length) {
               console.log("This is a subsequence");
             }
    }
}
    console.log("This is not a subsequence");
}

findSubsequence(seqSub,seqMain)