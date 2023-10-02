from LinkedList import Node, LinkedList

node1 = Node(10)
node2 = Node(3)
node3 = Node(5)

node1.next = node2
node2.next = node3

print(node1.data)
print(node1.next.data)
print(node1.next.next.data)

list = LinkedList()

list.insertAt(0, 0)
list.insertAt(1, 1)
list.insertAt(2, 2)
list.insertAt(3, 3)
list.insertAt(4, 4)
list.insertAt(5, 5)
list.printAll()

# ====================

list.insertLast(6)
list.insertLast(7)
list.insertLast(8)
list.insertLast(9)
list.printAll()

# ====================

list.getNodeAt(3)
list.getNodeAt(8)
list.getNodeAt(1)
list.getNodeAt(2)

# ====================

list.deleteAt(4)
list.printAll()

# ====================

list.deleteLast()
list.printAll()

# ====================

list.clear()
list.printAll()
