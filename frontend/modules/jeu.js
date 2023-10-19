var vaisseau = document.getElementById("joueur");
var position = 0;
var vitesse = 5; // Vitesse de déplacement en pixels par touche pressée

// Fonction de gestion de l'événement pour les touches de direction
function deplacerVaisseau(event) {
    // Touche de gauche
    if (event.keyCode === 37) {
        position -= vitesse;
    }
    // Touche de droite
    else if (event.keyCode === 39) {
        position += vitesse;
    }

    // Limitez la position du vaisseau dans la fenêtre
    position = Math.min(window.innerWidth - vaisseau.offsetWidth, Math.max(0, position));

    // Mettez à jour la position du vaisseau
    vaisseau.style.left = position + "px";
}

// Ajoutez un écouteur d'événements pour les touches de direction
document.addEventListener("keydown", deplacerVaisseau);