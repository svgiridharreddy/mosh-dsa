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

let stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.peek()

console.log(stack.reverse());


export default Stack;