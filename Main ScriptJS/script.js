
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
const cursorRing = document.getElementById("cursor-ring")
    document.addEventListener("mousemove", (e) =>{
        requestAnimationFrame(() =>{
            cursorRing.style.left = `${e.clientX}px`;
            cursorRing.style.top = `${e.clientY}px`;
        });
    });

const toggleCursor = () => {
    cursorRing.classList.toggle("active");
    document.addEventListener("mousedown", toggleCursor);
    document.addEventListener("mouseup", toggleCursor);
}

    
// Footer Year
let footerYear = year;
let footerName = ("Fernando Nerio Jr");
let result = `${footerYear} ${footerName}`;
    document.getElementById("footerStuff").outerHTML = result;







    


    

 



