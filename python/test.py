from LinkedList import Node

node1 = Node(10)
node2 = Node(3)
node3 = Node(5)

node1.next = node2
node2.next = node3

print(node1.data)
print(node1.next.data)
print(node1.next.next.data)