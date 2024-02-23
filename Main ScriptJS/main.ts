
const helloWorld = function(greet: string){
  return greet;
}
console.log(helloWorld("What's up World"))

const math = function(add:number, multiply: number){
  let equals = 1
  for(let counting = 0; counting < multiply; counting++){
    equals *= add
  }
  return equals;
}
console.log(math(2, 10));

/*
Trying to figure out how to do the problem 
where how many bigmacs can I get with the amount of money I have.
*/
const dollars = function(money: number){
  let bigMac = 15
  if(money < bigMac){
    return money
  }
  const bigMacs = function(amount: number, bigmacs: string){
    let howManyBigMacs = money + amount;
    if(howManyBigMacs > 1){
      bigmacs += "s"
    }
    console.log(`${howManyBigMacs} ${bigmacs}`)
  }
  bigMacs(0, "BigMac")
}
console.log(dollars(20))