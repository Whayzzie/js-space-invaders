var accueil = document.getElementById("accueil");
var score = document.getElementById("score");
var partie = document.getElementById("partie");
var body = document.getElementById

document.body.addEventListener("click", function (event) {

    // Vérifie si le clic est effectué avec le bouton gauche de la souris
    if (event.button === 0) {
        partie.style.display = "none";
        
    }
})