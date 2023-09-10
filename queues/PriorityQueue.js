// 1- Given an integer K and a queue of integers, write code to reverse the order of the first K elements of the queue.  Input:  Q = [10, 20, 30, 40, 50], K = 3Output: Q = [30, 20, 10, 40, 50]

// 2- Build a queue using a linked list from scratch. Implement the following operations and calculate their runtime complexities.  -enqueue -dequeue -peek -size -isEmpty

// 3- Build a stack using two queues. Implement the following operations and calculate their runtime complexities.  -push 
-pop  -peek -size  -isEmpty

class PriorityQueue{
  constructor(){
    this.items = new Array(5);
    this.count = 0;
  }

  add(element){
    if(this.isFull()) return console.log("que is full");
    console.log("this.count is",this.count-1)
    let i = this.shiftItemsToInsert(element)
    this.items[i] = element;
    this.count++;
  }

  shiftItemsToInsert(element){
    let i;
    for(i=this.count-1; i>=0; i--){
      if(this.items[i] > element){
        this.items[i+1] = this.items[i]
      }else{
        break;
      }
    }
    return i+1;
  }

  remove(){
    if(this.isEmpty()) return console.log("queue is empty")
    return this.items[--count];
  }

  isEmpty(){
    return count === 0;
  }

  isFull(){
    return this.items.length === this.count;
  }

  print(){
    console.log(this.items);
  }

}

let pq = new PriorityQueue();
pq.add(5);
pq.add(3);
pq.add(6);
pq.add(2);
pq.add(10)
pq.add(1);
pq.print()