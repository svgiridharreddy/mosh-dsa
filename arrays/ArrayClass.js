class Array{
  constructor(){
    this.arr = [];
    this.count=0;
  }

  print(){
    for(let i=0;i<this.count; i++){
      console.log(this.arr[i]);
    }
  }

  insert(item){
    let len = this.arr.length
    let count = this.count;
    if(len == count){
      let newArr = new Array(this.count*2)
      for(let i = 0;i<this.count; i++){
        newArr[i] = this.arr[i];
        this.arr = newArr;
      }
    }
    this.arr[count] = item;
    this.count++;
    return this.arr;
  }

  removeAt(index){
    let arr = this.arr;
    let len = this.arr.length;

    if(index >= this.count || index < 0) {
      throw new Error("Illegal operation")
    }

    for(let i=index; i < this.count; i++){
      arr[i] = arr[i+1];
    }
    this.count--;
    return arr;
  }

  indexOf(item){
    // binary search 
    // let startIndex = 0; 
    // let endIndex = this.count-1
    // let midIndex = Math.floor((startIndex + endIndex) / 2)
    // let arr = this.arr;
    // while(startIndex <= endIndex){
    //   let mid = arr[midIndex];
    //   if(mid === item){
    //     return midIndex;
    //   }else if(mid < item){
    //     startIndex = midIndex+1;
    //   }else {
    //     endIndex = midIndex-1
    //   }
    // }
    for(let i=0;i<this.count;i++){
      if(this.arr[i] === item){
        return i;
      }
    }

    return -1;
  }

  max(){
    let arr = this.arr;
    let maxValue = arr[0];
    for(let i=1; i < this.count; i++){
      if(arr[i] > maxValue){
        maxValue = arr[i]
      }
    }
    return maxValue
  }

  min(){
    let arr = this.arr;
    let minValue = arr[1];
    for(let i=1; i< this.count; i++){
      if(arr[i] < minValue){
        minValue = arr[i];
      }
    }
    return minValue;
  }

  reverse(){
    let arr = this.arr;
    let left = 0; 
    let right = this.count -1;
    while(left < right){
      let temp = arr[left]
      arr[left] = arr[right];
      arr[right] = temp;
      left ++;
      right --;
    }
    
    return arr;
  }

  getSize(){
    return this.arr.length;
  }
}

let array = new Array();

array.insert(10)
array.insert(90)
array.insert(50)
array.insert(40)
// array.removeAt(0);
array.print();
// console.log(array.indexOf(30));
// console.log(array.max());
// console.log(array.min());
console.log(array.reverse())
