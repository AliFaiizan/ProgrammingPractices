class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

    
function reverseLinklist(head) {
        let prev = null;
        let cur = head;
        let next = null;
        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }


    node = new Node(
        1,
        new Node(
            2,
            new Node(3,  new Node(4,  new Node(5,  new Node(6,  new Node(7,  new Node(8,  new Node(9,  new Node(10))))))))
            )
            );
            
    let head= node;


console.log(reverseLinklist(head));