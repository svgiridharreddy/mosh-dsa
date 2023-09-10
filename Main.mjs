import QueueWithTwoStacks from "./queues/QueueWithTwoStacks";

class Main{
  constructor(){
    this.queue = new QueueWithTwoStacks()
    this.queue.enqueue(10)
    this.queue.enqueue(20)
    this.queue.enqueue(30)
    this.queue.enqueue(40)
    let item = this.queue.dequeue()
    console.log(item);
  }
}