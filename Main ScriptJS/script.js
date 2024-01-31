
// First Name "Mike"

// Click to say hello world
const press_me = document.querySelector("#btn")
const message = `${"Hello " + "World"}`
    press_me.addEventListener("click", ()=>{
        alert(message);
    })

// Click to show date
const click = document.querySelector('#pm');
const currenDdate = new Date();
const month = currenDdate.getMonth() + 1;
const day = currenDdate.getDate();
const year = currenDdate.getFullYear();
const full_date = [month, day, year].join('/');
    click.addEventListener('click', ()=>{
        alert(full_date);
    })

// Navigation change background when scroll
const scroll = document.getElementById("navigation")
    document.addEventListener("scroll", () => {
        if(window.scrollY > 0){
            scroll.classList.add("scrolled")
        }else{
            scroll.classList.remove("scrolled")
        }
    });

// Christmas Tree
function drawmeatree(height){
    for(i = 0; i - height; i++) {
        let spaces = ' '.repeat(height - i - 1);
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }
    let trunkspaces = ' '.repeat(height - 1);
    console.log(trunkspaces + '|');
    console.log(trunkspaces + '|');
}

let treeheight = 10;
drawmeatree(treeheight);

// Cursor Trail Effect
// const cursorRing = document.getElementById("cursor-ring")
//     document.addEventListener("mousemove", (e) =>{
//         requestAnimationFrame(() =>{
//             cursorRing.style.left = `${e.clientX}px`;
//             cursorRing.style.top = `${e.clientY}px`;
//         });
//     });

// const toggleCursor = () => {
//     cursorRing.classList.toggle("active");
//     document.addEventListener("mousedown", toggleCursor);
//     document.addEventListener("mouseup", toggleCursor);
// }

    
// Footer Year

let footerYear = year;
let footerName = ("Fernando Nerio Jr");
let result = `${footerYear} ${footerName}`;
    document.getElementById("footerStuff").outerHTML = result;

 
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

let right = (1 + 1 == 2 && 30 > 20)
let left = (1 + 1 >= 3 && 30 > 20)
let operators =  (true ? left:right)
console.log(operators)



