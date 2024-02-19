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
// let yourMoney;
// do{
//     yourMoney = Number(prompt("How much money you got?"))
//         // if the input money is less than 100
//        if(yourMoney < 100){
//            alert("YOU IS BROKE BROKE");
//         // if the input money is in between 100 and 1000 but not pass 1000
//        }else if(yourMoney < 1000){
//        alert("YOUR'RE BROKE ASF");
//         // if the input money is between 1000 and 2000
//        }else if(yourMoney < 2000){
//         alert("YOUR RICH");
//         // if it's not input
//        }else{
//         alert("Damn Yo! YOUR'RE RICH RICH!")
//        }       
// }while(!yourMoney);
// console.log(yourMoney)
// Ex:2
// const age = {
//     Andrew: 15,
//     Kyle: 20,
//     Mike:30,
// }
// console.log(age)
// const yourAge = Number(prompt("How old are you?"))
//     if(yourAge < age.Andrew){
//     console.log("You're pretty young");
//     }else if(yourAge == age.Andrew){
//     console.log("You're the same age as andrew");
//     }else if(yourAge < age.Kyle){
//         console.log("You're older than Andrew but still younger than"); 
//     }else{
//         console.log("You're pretty old")
//     }

// While Loop
// Looping control allows us to go back to some point in the program where we were before and repeat it with our current program state.
// Ex. 1 - multiplication of 2 
let number = 0
while (number <= 20){
    console.log(number);
    number = number + 2;
}
// Ex. 2 - 2 to the power of 5
let count = 1;
let counter = 0;

while (counter <= 5){
    count = count * 2
    counter = counter + 1
}
console.log(count)
// Ex. 3 - Kyle worked 40 hours in 1 one week and he gets paid 15 an hour. How much did her earn?
let kyle = 0
let job = 0
while (kyle < 40){
    kyle = kyle + 1
    job = job + 15
}
console.log(job)
// --> $600 in a week 


// do loop:
// let yourName;
// do {
//     yourName = prompt("Who are you?");
// }while(!yourName);
// console.log(yourName)

// Proper Indentation
const debt = {
    Milo: 100,
    Miko:200,
    Mina: 500,
}

if(debt.Mina > debt.Miko){
    console.log("That's True");
    if(debt.Milo !== debt.Miko + debt.Mina){
        console.log("Tha's also True")
    }
}


// for loops:
// *before the first simicolon initializes the loop, ususally by defining  binding.
// *the second part is the expression that checks whether the loop must continue.
// *the final part updates the state of the loop after every iteration.
for(let numberz = 1; numberz <= 12; numberz++){
    console.log(numberz);
}

for(let their in debt){
    console.log(their + " debt is " + "$" + debt[their])
}
 
const cars = ["Toyota Trueno AE86,","Range Rover Sport,", "Honda NSX 1991 and","Mazda RX7"];
let fav = "My favorite Cars: ";
let txt = "";

for(let i = 0; i < cars.length; i++){
    txt += cars[i] + " ";
}
console.log(fav + txt)

let rslt = 1;
    for(let counter = 0; counter < 4; counter++){
        rslt  = rslt  * 2;
}
console.log(rslt);

// Breaking out of the loop
for(let current = 20; ; current++){
    if(current %7 == 0){
        console.log(current);
        break;
    }
}

const ar = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]
let arr = 0
console.log(ar)
for(let m = 0; m <= ar.length ; m += 1){
    if(m % 3 == 0){
        console.log(m);
    }
}

// Updating Bindings Succinctly
// Instead of "counter = counter + 1", a shortcut is "counter += 1" or even short: "counter++"
for(let l = 0; l <= 12; l += 2){
    console.log(l);
}

// Dispatching on a value with switching
// switch (prompt("What is the weather like?")){
//     case "rainy":
//         alert("Don't forget to bring an Umbrella.")
//         break;
//     case "sunny":
//         alert("Remember to put on sunscreen.");
//         break;
//     case "cloudy":
//         alert("Well, can't do anything about it.");
//         break;
//     case "snowy":
//         alert("Stay inside and stay warm to avoid being sick.")
//         break;
//     default:
//         alert("What is that weather? \nAnswer only sunny, rainy, cloudy or snowy. \nPlease and thank you.");
//         break;
// }

// Capitalization and Comments
/* fuzzylittleturtle = hard to read
   fuzzyLittleTurtle = the right way 
*/
// Comments are very very important for human readers.

// Exercises:
// Triangle
console.log("Triangle");
for(let triangle = '#'; triangle.length <= 10; triangle += '#'){
    console.log(triangle)
}
/* First Attempt */
console.log("FizzBuzz Interview Question");
for(let fb = 1; fb <= 100; fb++){
    let op = "";
    if(fb %3 == 0) op += "Fizz";
    if(fb %5 == 0) op += "Buzz";
    console.log(op || fb)
}
/* Solution */
// for(let n = 1; n <= 100; n++){
//     let output = "";
//     if(n %3 == 0) output += "Fizz";
//     if(n %5 == 0) output += "Buzz";
//     console.log(output || n)
// }

// Chessboard

// NOT THIS!!
// const chessBoard = 
// ` # # # #
// \n# # # # 
// \n # # # #
// \n# # # #
// \n # # # #
// \n# # # #
// \n # # # #
// \n# # # # 
// `
// console.log(chessBoard)

// SOLUTION!!
let size = 8;
let board = "";
for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
     if((x+y) %2 == 0){
        board += " ";
    }else{
        board += "#";
    }
  }
 board +="\n"
}
console.log(board)

// Functions
// "x" is the parameter
const square = function(x){
    if(y = 20){
        
        return y * x;
    }
}

console.log(square(12))

// Function with no parameters
const makeNoise = function(){
    console.log("Ping!");
}

makeNoise();

// multiple parameters

const power = function(base, exponent){
  let result = 1;
  for(let count = 0; count < exponent; count++ ){
    result *= base;
  }
  return result;  
}
console.log(power(2, 10));

// Bindings and Scopes
let q = 10;
if(true){
  let sum = 100
  var c = 50
  console.log(q + sum + c)
}

const halve = function(n){
  return n / 2;
}
let n = 10;
console.log(halve(100));
console.log(n)

// Nested Scopes
const hummus = function(factor){
  const ingridient = function(amount, unit, name) {
    let ingridientAmount = amount + factor;
    if(ingridientAmount > 1){
      unit += "s"
    }
    console.log(`${ingridientAmount} ${unit} ${name}`);
  };
  ingridient(1, "can", "chickpeas");
  ingridient(0.25, "cup", "tahini");
  ingridient(0.25, "cup", "lemon juice");
  ingridient(1, "clove", "garlic");
  ingridient(2, "tablespoon", "olive oil");
  ingridient(0.5, "teaspoon", "cumin");
};

console.log(hummus(1))


