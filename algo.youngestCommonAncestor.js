//youngest common ancester

class Node {
  constructor(name,ancester) {
    this.name=name
    this.ancester = ancester;
  }
}
//Tree Structure
A = new Node("a",null);
B = new Node("b",A);
C = new Node("c",A);
D= new Node("d",A);
G= new Node("g",B);
H = new Node("h",B);
I = new Node("i",B);
O = new Node("o",H);
P = new Node("p",H);
Q = new Node("q",H);
T = new Node("t",P);
U = new Node("u",P);

let topNode=A;

function getTreeDepth(currentNode,topNode){
    let depth=0;

    while(currentNode !== topNode){
        depth++;
        currentNode=currentNode.ancester;
    }
    return depth;
}

function backTrackTree(lowerNode, higherNode,diff) {
    console.log("diff",diff)
    while(diff>0){
        lowerNode=lowerNode.ancester;
        diff--;
    }

    while(lowerNode!==higherNode){
        lowerNode=lowerNode.ancester;
        higherNode=higherNode.ancester;
    }

    //at this level we know that either higher node or lowernode are equal and the ancester is found
    return lowerNode
}

let decendentOne=U;
let decendentSecond=Q

let depthOne=getTreeDepth(decendentOne,topNode)
let depthSecond=getTreeDepth(decendentSecond,topNode)

let commonAncester;

if(depthOne>depthSecond){
    commonAncester=backTrackTree(decendentOne,decendentSecond,depthOne-depthSecond)
}else{
    commonAncester= backTrackTree(decendentSecond,decendentOne,depthSecond-depthOne)
}
console.log("common Ancester is ",commonAncester.name)





