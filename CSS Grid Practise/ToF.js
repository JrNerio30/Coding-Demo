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


    