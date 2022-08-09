let mangzine=['A','B','C','D','E','F'];

let word_to_spell='BED'
//['B','E','D'];

function canSpell(mag,word) {
    let letters = Object.create({
        A:0,
        B:0,
        C:0,
        D:0,
        E:0,
        F:0
    });
    for (let c of mag) {
        letters[c]+=1
        
    }
    console.log(letters);
    for (let c of word){
        
        if(letters[c]<=0|| letters[c]=== 'NaN' || letters[c]===undefined){
            return false
        }
        letters[c] -= 1;
       
        console.log(letters[c]);
    }
     return true; 
}


console.log(canSpell(mangzine,word_to_spell));