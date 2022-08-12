

    let numbers=[2,5,7,11,15];
    let target=18
    let i=0,j=0;

    //brute force
    function CalculateA(numbers,target){
        i++;
    for (const a of numbers) {
       for (const b of numbers) {
            if(a===b){
                continue;
            }
            if(a+b===target){
                return [i,j]
            }
       }
       j++
    }
    return 'could not find the pair'
    }
    
    function CalculateB(numbers,target){
        let diff=0;
        let i=0
        let value={}
        for (const a of numbers) {
            value[a]=i;
            console.log(value)
            diff=target-a;
            if(value[diff]){
                return [i,value[diff]]
            }

            i++
        }
        return []

    }

 //console.log(CalculateA(numbers,target))
 console.log(CalculateB(numbers,target))


