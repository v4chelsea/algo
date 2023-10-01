from LinkedList import LinkedList, Node

node1 = Node(1)
node2 = Node(2)
node3 = Node(3)

node1.next = node2
node2.next = node3


def test_node():
    assert node1.data == 1
    assert node2.data == 2
    assert node3.data == 3