// stacks are last in first out (LIFO)
class Stack{
  constructor(){
    this.items = new Array(5);
    this.count = 0
  }

  push(element){
    if(this.count === this.items.length) return ;
    this.items[this.count++] = element;
  }

  pop(){
    if(this.empty()){
      console.log("Stack is empty")
      return "Stack is empty"
    }
    return this.items[--this.count]

  }

  peek(){
    if(this.empty()){
      console.log("Stack is empty")
      return "Stack is empty"
    }
    return this.items[this.count -1]
  }

  toString(){
    let startIndex = 0;
    let endIndex = this.count;
    var copiedArr = []
    console.log("items are", this.items);
    for(let i=0; i < endIndex; i++){
      let element = this.items.pop()
      console.log("element is ", element)
      if(i>=startIndex){
        copiedArr[i] = element
      }
    }
    return copiedArr;
  }
  empty(){
    this.count === 0
  }

  reverse(){
    let items = this.items;
    let len = Math.floor(this.count/2)
    for(let i=0; i< len; i++){
      let element = items[i];
      items[i] = items[this.count - 1 -i]
      items[this.count - 1 -i] = element;
    }
    return items;
  }
  
}

// queues are first in first out (FIFO)
class QueueWithTwoStacks{
  constructor(){
    this.stack1 = new Stack()
    this.stack2 = new Stack();
  }

  enqueue(element){
    this.stack1.push(element);
  }

  dequeue(){
    if(this.stack2.isEmpty()){
      while(!this.stack1.isEmpty()){
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }
}

this.queue = new QueueWithTwoStacks()
this.queue.enqueue(10)
this.queue.enqueue(20)
this.queue.enqueue(30)
this.queue.enqueue(40)
let item = this.queue.dequeue()
console.log(item);