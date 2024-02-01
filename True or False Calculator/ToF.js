// Changes Navigation Header Background
const scroll = document.getElementById("navigation")
    document.addEventListener("scroll", () => {
        if(window.scrollY > 0){
            scroll.classList.add("scrolled")
        }else{
            scroll.classList.remove("scrolled")
        }
    });