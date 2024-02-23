class CircularQueue {
    constructor(size) {
      this.size = size;
      this.items = new Array(size);
      this.front = this.rear = -1;
    }
  
    enqueue(element) {
      if ((this.rear + 1) % this.size === this.front) {
        return "Overflow";
      }
      if (this.isEmpty()) {
        this.front = this.rear = 0;
      } else {
        this.rear = (this.rear + 1) % this.size;
      }
      this.items[this.rear] = element;
    }

    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      let removedItem = this.items[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
      return removedItem;
    }
    print(){
        console.log('circular value',this.items.toLocaleString());
    }
  
    isEmpty() {
      return this.front === -1;
    }
  }

  const Circular= new CircularQueue(3)

  Circular.enqueue(10)
  Circular.enqueue(20)
  Circular.enqueue(30)
  Circular.enqueue(30)
  Circular.enqueue(30)
  Circular.enqueue(30)
  
  Circular.dequeue()
  Circular.dequeue()
  Circular.print()
  