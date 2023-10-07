from Stack import Stack

stack = Stack()

stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

def test_stack():
    assert stack.pop().data == 6
    assert stack.pop().data == 5
    assert stack.pop().data == 4
    assert stack.pop().data == 3
    assert stack.pop().data == 2
    assert stack.pop().data == 1
    assert stack.pop().data == 0