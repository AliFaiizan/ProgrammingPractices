class Node{
    
    constructor(x){
        this.val=x;
        this.next=null;
    }
}
//Test Data 
//list 1
l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);
//list 2
l2=new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

function addTwoNumberHelper(l1,l2,c){
    let val=l1.val+l2.val+ c
    c=val/10<1?0:1;
    let ret = new Node(val % 10);
    //console.log(ret)
    if(l1.next!==null || l2.next!==null){
         
        ret.next=addTwoNumberHelper(l1.next,l2.next,c);
        //xpo console.log(ret.val,ret.next)
        //console.log(ret);
    }
 return ret;
}

function addTwoNumber(l1,l2){
    
   return addTwoNumberHelper(l1,l2,0)

}

console.log("Answer",addTwoNumber(l1,l2)) 