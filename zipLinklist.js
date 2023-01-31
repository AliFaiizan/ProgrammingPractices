// Description: zipLinklist
// Date: 03/09/2021
//Solution: take this approach in three steps first split the linklist into two parts then reverse the second part and then intervein the two parts

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function zipLinklist(head) {
    let firstList = head;
    let SecondList= splitlinklist(head);

    SecondList=reverseLinklist(SecondList);
    return interveinLinklist(firstList,SecondList);
}

function splitlinklist(head) {
    let slow = head.next;
    let fast = head.next.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let head2=slow.next;
    slow.next=null;

    return head2;
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

function interveinLinklist(head1,head2){
    let cur1=head1;
    let cur2=head2;
    let next1=null;
    let next2=null;
    while(cur1 && cur2){
        next1=cur1.next;
        next2=cur2.next;
        cur1.next=cur2;
        cur2.next=next1;
        cur1=next1;
        cur2=next2;

    }
    return head1;
}

node = new Node(
  1,
  new Node(
    2,
    new Node(
      3,
      new Node(
        4,
        new Node(
          5,
          new Node(6, new Node(7, new Node(8, new Node(9, new Node(10)))))
        )
      )
    )
  )
);

let head = node;

console.log(zipLinklist(head));