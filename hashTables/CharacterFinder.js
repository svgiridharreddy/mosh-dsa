// find the first non repeating character 

class CharacterFinder{
  constructor(str){
    this.str = str;
  }

  firstNonRepeatingChar(){
    let str = this.str;
    let map = {};
    let len = str.length;
    for(let i=0;i< len; i++){
      let count = map.hasOwnProperty(str[i]) ? map[str[i]] : 0
      map[str[i]] = count+1;
      // if(map.hasOwnProperty(str[i])){
      //   map[str[i]] +=1
      // }else{
      //   map[str[i]] = 1
      // }
    }
    for(let i=0; i<len;i++){
      if(map[str[i]] === 1){
        console.log(str[i]);
        return str[i];
      }
    }

    return null;
  }

  findFirstRepeatedChar(){
    let set = new Set();
    for(let i=0;i<this.str.length; i++){
      if(set.has(this.str[i])){
        console.log(this.str[i])
        return this.str[i];
      }
      set.add(this.str[i]);
    }
    return null;
  }
}

let cf = new CharacterFinder("a green apple") 
cf.firstNonRepeatingChar()
cf.findFirstRepeatedChar();