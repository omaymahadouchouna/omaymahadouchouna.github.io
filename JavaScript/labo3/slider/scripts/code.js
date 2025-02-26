const setup = () => {

    let sliders = document.getElementsByClassName("slider");

    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }
};


const update = () => {
    let valuered = document.getElementById("sldRed").value;
    let valuegreen = document.getElementById("sldGreen").value;
    let valueblue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerText = valuered;
    document.getElementById("lblGreen").innerText = valuegreen;
    document.getElementById("lblBlue").innerText = valueblue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = `rgb(${valuered}, ${valuegreen}, ${valueblue})`;
}

window.addEventListener("load", setup);