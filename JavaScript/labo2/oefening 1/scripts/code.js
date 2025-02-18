const setup = () => {
    window.alert("Pop-up");
    console.log(window.confirm("Ben je zeker?"));
    console.log(window.prompt("Wat is uw naam", "onbekend"));
}

window.addEventListener("load", setup);
