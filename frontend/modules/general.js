var accueil = document.getElementById("accueil");
var score = document.getElementById("score");
var partie = document.getElementById("partie");
var body = document.getElementById

partie.style.display = "none";

document.body.addEventListener("click", function (event) {

    // Vérifie si le clic est effectué avec le bouton gauche de la souris
    if (event.button === 0) {
        accueil.style.display = "none";
        partie.style.display = "block"
        
    }
})