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