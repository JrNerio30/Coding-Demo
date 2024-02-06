// Console Testing
console.log(1 + 1 == 2 || 1000 < 200)  
console.log(false ? 10 : 20)
console.log(1 !== 2)

// Objects
const containsAny = {
    Micheal_Jordan: 1,
    Lebron_James: 2,
    Steph_Curry: 3,
    Kyrie_Irving: 4,
    Luka_Doncic: 5,
}
// For loops Iteration: Displays Names and Ranking.
for(let any in containsAny){
    console.log(any, containsAny[any])
}

// Null
let variable = null 
    if( variable == null){
        console.log(variable)
    }
// Undefined
let myVar; 
console.log(myVar)
// Chechink which is true or false
let right = (1 + 1 == 2 && 30 > 20)
let left = (1 + 1 >= 3 && 30 > 20)
let operators =  (true ? left:right)
console.log(operators)

// For loop combining numbers
// This is weird
const check = checksum([1, 2, 3, 4, 5], 10)
function checksum(numbers, nums){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        
        if(sum = nums){
            return true;
          }else{
            return false;
        }
    }
    console.log(sum)
}

// More testing and practise about let variable
let x = 2, y = 2
console.log(x * y)

const greetings = "Hello There,"
const nm = "Nikka";
console.log(`${greetings} ${nm}`)

let z = [10, 20, 30, 40, 50];
let sums = 0
  for(let k = 0; k < z.length; k++){
    sums += z[k];
  }
  console.log(sums)
// assigns light to mood
let mood = "light"
console.log(mood)
// Re assign the value dark to the mood
mood = "dark"
console.log(mood)

// let mariosDebt = 1000
// mariosDebt = mariosDebt - 500
// console.log(mariosDebt)

// Multiple Bindings.
let luigisDebt = 150, mariosDebt = 250, Arthur = 200, paidbyLuck = 600
console.log(luigisDebt + mariosDebt + Arthur - paidbyLuck)

// The "let, const and var" are called bindings
// const: "contstant" and var: "variable"
// "let" can create multiple bindings and can be reassigned 
// ex: line 65-69
// but const is a "constant binding" and connat reassign another value. 
// var/variable is for old websites. it is similar to let and const but can be very hard to read.

// Return Values with Math max and min

let valueS = 100
console.log(Math.min(10, 20) + valueS)

// Control Flow: When your program contains multiple statements, they are executed as if they a story, from the beggining to the end. 

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// Conditional Execution: A Branching Road. Whenever you start with one situation, it'll beocome more than one. 
// Conditional Execution is created with the "if" statement/keyword in JavaScript. 

// theNumber = Number(prompt("Pick a number"));
//   if(!Number.isNaN(theNumber)){
//     console.log("Your number is the square root of " + theNumber * theNumber);
//   }

if(1 + 1 == 2)console.log("It's True")
// You can use "else" statement/keyword to create two separate, alternative execution paths. 
// Ex #1:
// let theNumber = Number(prompt("Pick a number"));
// if(!Number.isNaN(theNumber)){
//     console.log("You number is a square root of " + theNumber * theNumber);
// }else{
//     console.log("Hey. Why didn't you give me a number?");
// }
// Ex #2:
const MichealMoney = 30, JamesMoney = 100
if(MichealMoney > JamesMoney){
    console.log("Micheal is broke");
}else{
    console.log("James is richer than Micheal and Micheal broke asf.")
}

// if you have more than two paths to choose from, you can "chain" using multiple if else or else if together.
// Ex:1
// let yourMoney = Number(prompt("How much money you got?"))
// if(yourMoney < 100){
//     alert("YOU IS BROKE BROKE")
// }else if(yourMoney < 1000){
//     alert("YOUR'RE BROKE ASF")
// }else{
//     alert("YOUR'RE RICH RICH")
// }
