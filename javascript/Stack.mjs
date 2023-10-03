import { LinkedList } from "./LinkedList.mjs";

class Stack {
    constructor(){
        this.list = new LinkedList();
    }

    push(data){
        this.list.insertAt(0, data)
    }

    pop(){
        try{
            return this.list.deleteAt(0);
        }
        catch (e){
            console.log(e);
            return null;
        }
    }

    peek(){
        return this.list.getNodeAt(0);
    }

    isEmpty(){
        return (this.list.count == 0);
    }
}

export { Stack };