class Node {
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.count = 0;
    }

    printAll(){
        let currentNode = this.head;
        let text = "[";

        while(currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if (currentNode != null){
                text += ", ";
            }
        }

        text += "]";
        console.log(text);
    }



    insertAt(index, data){
        if(index > this.count || index < 0) {
            throw new Error("범위를 넘어섰습니다");
        }

        let newNode = new Node(data);

        if (index == 0){
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1 ; i++){
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    insertLast(data){
        let newNode = new Node(data);
        let currentNode = this.head;

        // for (let i = 0; i < this.count - 1 ; i++){
        //     currentNode = currentNode.next;
        // } 

        while (currentNode.next != null){
            currentNode = currentNode.next;     
        }

        currentNode.next = newNode;
        this.count++;
    }


    clear(){
        this.head  = null;
        this.count = 0;
    }

    deleteAt(index){
        if(index > this.count || index < 0) {
            throw new Error("범위를 넘어섰습니다");
        }

        if (index == this.count){
            this.deleteLast();
        } else {
            if (index == 0){
                this.head = this.head.next;
            } else {
                let currentNode = this.head;
                
                for (let i = 0; i < index - 1 ; i++){
                    currentNode = currentNode.next;                
                }
                currentNode.next = currentNode.next.next;
            }
            this.count--;
        }
    }

    deleteLast(){
        let currentNode = this.head;

        for (let i = 0; i < this.count - 2 ; i++){
            currentNode = currentNode.next;
        } 

        currentNode.next = null;
        this.count--;
    }

    getNodeAt(index){
        let currentNode = this.head;

        for (let i = 0; i < index - 1 ; i++){
            currentNode = currentNode.next;
        }
        
        console.log(currentNode.data);
    }
}

export { Node, LinkedList };