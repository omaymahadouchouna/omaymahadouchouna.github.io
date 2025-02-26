const button = document.getElementById("tButton");
button.addEventListener("click", function() {
    button.classList.toggle("pink");
})

const button2 = document.getElementById("tButton2");
button2.addEventListener("click", function() {
    button2.classList.toggle("pink");
})

const button3 = document.getElementById("tButton3");
button3.addEventListener("click", function() {
    button3.classList.toggle("pink");
})

window.addEventListener("load", setup);



/* mnr zen oplossing :
const setyp = () => {
    let buttons = document.getElementsByClassName("btn");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        buttons[i].classList.toggle("active");
    });
}
}
window.addEventListener("load", setup); */
