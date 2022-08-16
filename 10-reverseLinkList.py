class Node(object):
    def __init__(self, data,next=None):
        self.data = data
        self.next = next
    
    
    def __repr__(self):
        res= str(self.data)    
        if self.next:
            res+=str(self.next)
        return res

class Solution(object):
    def reverse(self,node):
        curr=node
        prev=None
        
        while curr!=None:
            temp=curr.next
            curr.next=prev
            prev=curr
            curr=temp
        return prev 
node=Node(1,Node(2,Node(3,Node(4,Node(5,Node(6,Node(7,Node(8,Node(9,Node(10))))))))))

print(Solution().reverse(node))
