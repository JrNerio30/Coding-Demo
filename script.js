
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



    












