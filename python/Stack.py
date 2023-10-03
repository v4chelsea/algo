from LinkedList import LinkedList

class Stack:
    def __init__(self) -> None:
        self.list = LinkedList()

    def push(self, data):
        self.list.insertAt(0, data)

    def pop(self):
        try:
            return self.list.deleteAt(0)
        except Exception as e:
            print(e)
            return None
        
    def peek(self):
        return self.list.getNodeAt(0)
    
    def isEmpty(self):
        return (self.list.count == 0)