class Node{
  constructor(value){
    this.value = value;
    this.next = null; 
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size;
  }
  
  addFirst(value){
    let node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else {
      node.next = this.head;
      this.head = node
    }
    this.size++
  }

  addLast(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else {
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  removeFirst(){
    if(this.isEmpty()){
      return null
    }else {
      let prev = this.head
      prev = null;
      this.head = this.head.next
    }
    this.size--;
  }
  
  removeLast(){
    if(this.isEmpty()){
      return null;
    }else{
      let current = this.head;
      if(!current.next){
        this.head = null;
        return
      }
      while(current.next.next){
        current = current.next
      }
      current.next = null;
    }
    this.size--;
  }

  removeAt(index){
    if(index < 0 || index >= this.size()){
      console.log("Out of range");
      return ;
    }
    let removeNode;
    if(index === 0){
      this.head = this.head.next
    }else {
      let current = this.head;
      for(let i=0; i<index-1; i++){
        current = current.next;
      }
      removeNode = current.next;
      current = removeNode.next;
    }
  }

  removeByValue(value){
    if(this.isEmpty()){
      return
    }
    if(this.head.value === value){
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let current = this.head;
    while(current.next && current.next.value !== value){
      current = current.next
    }
    if(current.next){
      let removeNode = current.next;
      current = removeNode.next
      this.size--;
      console.log("removeNode is :",removeNode)
      return value
    }
    return null
  }

  indexOf(value){
    let current = this.head;
    let index = 0;
    while(current){
      if(current.value === value){
        return index;
      }
      current = current.next;
      index++;
    }
    console.log(-1);
    return -1;
  }

  contains(value){
    if(this.isEmpty()){
      console.log("List is empty")
      return;
    }
    let current = this.head;
    while(current){
      if(current.value === value){
        return true
      }
      current = current.next
    }
    return false
  }

  toArray(){
    let array = new Array();
    if(this.isEmpty()){
      return array;
    }

    let current = this.head;
    let index = 0
    while(current && current.value){
      array[index++] = current.value
      current = current.next
    }
    return array;
  }

  reverseList(){
    // if this is not working fix the issue
    // [10 -> 20 -> 30 -> 40]
    // [10 <- 20 <- 30 <- 40] == [40 -> 30 -> 20 -> 10]
    if(this.isEmpty()){
      console.log("List is empty");
      return;
    }

    let prev = this.head;
    let current = this.head.next;
    let next;
    while(current !== null){
      next = current.next
      current.next = prev
      prev = current;
      current = next;
    }

    console.log("out of loop")
    
  }

  print(){
    console.log("size is",this.getSize());
    if(this.isEmpty()){
      console.log("List is empty")
    }else {
      let current = this.head;
      let listValues = '';
      while(current){
        listValues += `${current.value} `;
        current = current.next
      }
      console.log("List values are :",listValues);
    }
  }

  getKthNodeByEnd(k){
    // [10 => 20 => 30 => 40 => 50]
    //              *            *
    // this is incomplete ... understand linked lists much better and solve it;
    if(this.isEmpty() || k < 0) return;
    if(k === 0) return this.head;
    let first = this.head;
    let second = this.head;
  }
}

let list = new LinkedList()
list.addFirst(10)
list.addFirst(20)
list.addFirst(30)
list.addFirst(40)
list.addLast(60)
list.print();
list.reverseList();


// console.log(list.toArray());