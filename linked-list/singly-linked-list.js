class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    // head
    constructor() {
        this.head = null
    }

    add(data){
        const newNode = new LinkedListNode(data);

        if (this.head === null) {
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertBefore(data, index) {
        const newNode = new LinkedListNode(data);

        // the list is empty
        if (this.head === null) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
        if (index === 0) {
            // create the link with first node and rest of the linked list
            newNode.next = this.head;
            // now it is safe to point the head to the start of the list.
            this.head = newNode;
        } else {
            let current = this.head, previous = null;
            let i = 0;
            while (current.next !== null && i < index){
                previous = current;
                current = current.next;
                i++;
            }
            if (i < index) {
                throw new RangeError(`Index ${index} does not exist in the list.`);
            }
            previous.next = newNode;
            newNode.next = current;
        }

    }

    insertAfter(data, index) {

        const newNode = new LinkedListNode(data);
        // the list is empty
        if (this.head === null) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
        let current = this.head;
        let i = 0;
        while(current.next !== null && i < index) {
            current = current.next;
            i++;
        }
        if (i < index) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        newNode.next = current.next;
        current.next = newNode;
    }
    get(index) {
        if(index > -1){
            let current = this.head;
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }
            return current == null ? undefined : current.data;
        }else{
            return undefined;
        }
    }

    remove(index){

        if ((this.head === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        if (index === 0) {
            const data = this.head.data;
            this.head = this.head.next;
            return data;
        }

        if(index > 0) {
            let current = this.head;
            let i = 0;
            let previous = null;
            while ((current !== null) && (i < index)) {
                previous = current;
                current = current.next;
                i++;
            }
            if (current !== null) {
                previous.next = current.next;
                return current.data;
            }
        }
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    indexOf(data){
        let current = this.head;
        let i = 0;
        while(current != null){

            if(current.data == data){
                return i;
            }
            i = i + 1;
            current = current.next;
        }
        return -1
    }

    [Symbol.iterator](){
        return this.values()
    }
    *values(){
        let current = this.head;
        while(current!= null){
            yield current.data;
            current = current.next;
        }
    }

    toString(){
        return [...this].toString();
    }
}
module.exports.LinkedList = LinkedList;

