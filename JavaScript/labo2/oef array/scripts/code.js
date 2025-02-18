let setup = () => {
    let fam = ["Eliza", "Amira", "Mama", "Sohayla", "Amaal"];
    console.log(fam.length);

    for(let i = 0; i<fam.length; i++){
        if(i%2 === 0){
            console.log("Familielid op de plaats: " + (i+1) + " " + fam[i]);
        }
    }

    var nieuwenaam = prompt("Geef de naam van een nieuw familielid in:");
    function VoegNaamToe(arr, nieuwenaam){
        arr.push(nieuwenaam);
    }
    VoegNaamToe(fam, nieuwenaam);
    console.log(fam);

    let message = fam.join(" - ");
    console.log("Array: " + message);
}
window.addEventListener("load", setup);