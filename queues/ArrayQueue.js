class ArrayQueue {
  constructor(capacity){
    this.items = new Array(capacity)
    this.front = 0;
    this.back = 0;
    this.count = 0;
  }

  enqueue(element){
    if(this.count === this.items.length) return console.log("que is full")
    this.items[this.back] = element;
    this.back++;
    this.count++;
  }

  enqueueCircular(element){
    // if(this.count === this.items.length) return console.log("que is full")
    this.items[this.back] = element;
    // this.back++; comented because as the length of array is 5 and when adding an extra element this will cause out of boundary exception.
    // so we need to apply below  formula to make it circular array;
    // arr = [10,20,30,40,50] => length = 5; and index range = 0-4; this is fine
    // when we add new element to the above array, len will exceed so we make the circular array. when a new element 60 is added then the arr looks like [60,20,30,40,50]
    this.back = (this.back + 1) % this.items.length; // this.back = 4 if array length =5; if new element is added we are doing (back + 1) i.e (4+1) / 5 = 0, so new element will be added to front of the queue;
    this.count++;
  }
  
  dequeue(){
    if(this.isEmpty()) return console.log("queue is empty")
    let item = this.items[this.front];
    this.items[this.front] = 0;
    this.front++;
    this.count--;
    return item;
  }

  dequeueCircular(){
    if(this.isEmpty()) return console.log("queue is empty")
    let item = this.items[this.front]
    this.items[this.front] = 0
    // this.front++; comented because this will 
    this.front = (this.front + 1) % this.items.length // read notes in deque method and understand
    this.count--;
    return item;
  }
  
  peek(){
    if(this.isEmpty()){
      return console.log("que is emtpy")
    }
    return this.items[this.front];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  print(){
    return console.log(this.items);
  }

}

let q = new ArrayQueue(5)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)
q.enqueue(70)
q.print();

// let front = q.dequeue()
// console.log(front);