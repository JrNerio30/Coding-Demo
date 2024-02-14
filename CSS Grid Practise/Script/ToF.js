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


// Changes Navigation Header Background
const scroll = document.getElementById("navigation")
    document.addEventListener("scroll", () => {
        if(window.scrollY > 0){
            scroll.classList.add("scrolled")
        }else{
            scroll.classList.remove("scrolled")
        }
    });

// Footer Year
let year = new Date(). getFullYear();
let footerYear = year;
let footerName = ("Fernando Nerio Jr");
let result = `${footerYear} ${footerName}`;
    document.getElementById("footerStuff").outerHTML = result;


    