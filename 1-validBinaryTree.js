class Node{

    constructor(val,left=null,right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

}

node=new Node(5)
node.right= new Node(7)
node.left= new Node(4)
node.right.right= new Node(8)

function isValidHelper( node, low, high) {
    if(!node){
        return true;
    }
    let val= node.val;
    
    if(val>low && val<high
    && isValidHelper(node.left,low,node.val)
    && isValidHelper(node.right,node.val,high))
    {
             return true;
    }

    return false;
}

function isValid(node){

    return isValidHelper(node,-900,900)
    
}

console.log(isValid(node))