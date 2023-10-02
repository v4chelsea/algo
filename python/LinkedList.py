class Node:
    def __init__(self, data, next=None) -> None:
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self) -> None:
        self.head = None
        self.count = 0


    def printAll(self):
        text = "["
        currentNode = self.head

        while (currentNode != None):
            text += str(currentNode.data)
            currentNode = currentNode.next

            if (currentNode != None):
                text += ", "
            
        text += "]"
        print(text)
            

    def insertAt(self, index, data):
        if (index > self.count) or (index < 0):
            IndexError("범위를 넘어섰습니다")

        newNode = Node(data)

        if index == 0:
            newNode.next = self.head
            self.head = newNode
        else:
            currentNode = self.head

            for _ in range(index - 1):
                currentNode = currentNode.next

            newNode.next = currentNode.next
            currentNode.next = newNode

        self.count += 1

    def insertLast(self, data):
        newNode = Node(data)
        currentNode = self.head

        for _ in range(self.count - 1):
            currentNode = currentNode.next

        # while (currentNode != None):
        #     currentNode = currentNode.next

        currentNode.next = newNode
        self.count += 1

    def clear(self):
        self.head = None
        self.count = 0


    def deleteAt(self, index):
        if (index > self.count) or (index < 0):
            IndexError("범위를 넘어섰습니다")

        if index == (self.count - 1):
            self.deleteLast()
        else:
            if (index == 0) and (self.count > 1):
                self.head = self.head.next
            elif (index == 0) and (self.count == 1):
                self.head = None
            else:
                currentNode = self.head

                for _ in range(index - 1):
                    currentNode = currentNode.next

                currentNode.next = currentNode.next.next

            self.count -= 1


    def deleteLast(self):
        currentNode = self.head

        for _ in range(self.count - 2):
            currentNode = currentNode.next

        currentNode.next = None
        self.count -= 1

    def getNodeAt(self, index):
        if (index > self.count) or (index < 0):
            IndexError("범위를 넘어섰습니다")

        currentNode = self.head

        while index != 0:
            currentNode = currentNode.next
            index -= 1

        print(currentNode.data)