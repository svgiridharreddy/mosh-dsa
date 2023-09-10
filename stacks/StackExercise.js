class Stack{
  static #leftBrackets = ['(', '[', '<', '{'] ;// declaring leftBrackets private fields (# represents a private field)
  static #rightBrackets = [')', ']', '>', '}']
  constructor(str){
    this.str = str;
  }

  isBalanced(){
    let strArr = this.str.split('')
    let arr = [];
    for(let ch of strArr){
      if(this.isLeftBracket(ch)){
        arr.push(ch)
      }
      if(this.isRightBracket(ch)){
        if(this.isEmpty(arr)) return false

        let removedElement =  arr.pop()
        if(!this.braketsMatch(removedElement, ch)){
            return false;
          }
      }
    }
    return this.isEmpty(arr);
  }

  isEmpty(arr){
    return arr.length === 0
  }

  isLeftBracket = (ch) => {
    return Stack.#leftBrackets.includes(ch)
  }

  isRightBracket = (ch) => {
    return Stack.#rightBrackets.includes(ch)
  }

  braketsMatch = (left, right) => {
    return Stack.#leftBrackets.indexOf(left) === Stack.#rightBrackets.indexOf(right)
  }

}

const s = new Stack("(1+2)");
s.isBalanced()
