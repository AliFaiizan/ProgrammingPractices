# Max value at each time in stack
class MaxStack():
    def __init__(self):
        self.stack=[]
        self.max_stack=[]
    
    def push(self,val):
        self.stack.append(val)
        if not self.max_stack or val>=self.max_stack[-1]:
            self.max_stack.append(val)
        else:
            self.max_stack.append(self.max_stack[-1])
        
        print(self.max_stack)
    def pop(self):
        if self.max_stack:
            self.max_stack.pop()
            return self.stack.pop()
        
        
    def max(self):
        return self.max_stack[-1]
    
    
s=MaxStack()
s.push(1)
s.push(2)
s.push(3)
s.push(2)

print ('max',s.max())
print (s.pop())

print ('max',s.max())
print (s.pop())

print ('max',s.max())
print (s.pop())

print ('max',s.max())
print (s.pop())



