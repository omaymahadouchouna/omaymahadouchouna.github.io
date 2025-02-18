const setup = () => {

    let lblCursus = document.getElementById("lblCursus"); //zoekt naar element. let is variabele (geen type, pas bij toekenning)
    //lblCursus.className = "cursus"; Kent klasse cursus toe aan variabele, wat gebeurd staat in css file
    lblCursus.addEventListener("mouseover", change); //change word functie hieronder gemaakt
    //lblCursus.className = "cursus";

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = ()=>{
    console.log("show"); //dit doeje meestal aan begin van functie want is handig om in log te zien waar je breakpoint is v functie
    let txtName = document.getElementById("txtName");

    if(txtName.value !== ""){
        alert("jouw naam is "+ txtName.value); // dit is voor op scherm

        console.log("jouw naam is " + txtName.value);

        console.log(`jouw naam is ${txtName.value}`); // `` voor de string en die ${} voor de value die je ergens uit haalt. Dit is voor in console in browser
    }
    else
    {
        alert("gelieve een naam in te vullen");
    }
}

const change = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

window.addEventListener("load", setup);
