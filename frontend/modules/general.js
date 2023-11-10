const accueil = document.getElementById("accueil");
const score = document.getElementById("score");
const partie = document.getElementById("partie");
const game = document.getElementById("game")
const retourMenu = document.getElementById("retour-menu")
const boutonJouer = document.getElementById("bouton-jouer")
const scoreDeux = document.getElementById("score-joueur-deux")

game.style.display = "none";
retourMenu.style.display = "none";

boutonJouer.addEventListener("click", function (event) {

    // Vérifie si le clic est effectué avec le bouton gauche de la souris
    if (event.button === 0) {
        accueil.style.display = "none";
        game.style.display = "block";
        retourMenu.style.display = "block";
        scoreDeux.style.visibility = "hidden";
        
    }
})

retourMenu.addEventListener("click", function (event) {

    // Vérifie si le clic est effectué avec le bouton gauche de la souris
    if (event.button === 0) {
        game.style.display = "none";
        accueil.style.display = "inline";
        retourMenu.style.display = "none"
    }
})