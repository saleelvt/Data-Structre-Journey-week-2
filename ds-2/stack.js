
class Node {
    constructor(value) {

        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {

        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next

            }
            prev.next = node

        }
        this.size++
    }

    print() {

        if (this.isEmpty()) {
            console.log('linked list is empty ');
        } else {
            let curr = this.head
            while (curr) {

                console.log('my linked list values', curr.value);
                curr = curr.next

            }
        }
    }

    insert(value, index) {

        if (index < 0 || index > this.size) {
            console.log('please enter valid number');
        } else if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}


// console.log('return size',list.getSize());
// console.log('is emptuy',list.isEmpty());

const list =new LinkedList()









// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.reverse()
// // list.insert(40,2)
// // list.append(43)
// // list.append(33)
// // list.append(23)
// // list.append(13)
// list.print()
