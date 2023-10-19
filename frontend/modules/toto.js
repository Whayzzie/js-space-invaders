const joueur = document.getElementById("joueur");
const zoneDeJeu = document.getElementById("game");

let positionX = 0;
const vitesse = 5;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            // Vérifiez si le joueur ne sort pas du côté gauche de la div
            if (positionX - vitesse >= 0) {
                positionX -= vitesse;
            }
            break;
        case 'ArrowRight':
            // Vérifiez si le joueur ne sort pas du côté droit de la div
            if (positionX + vitesse <= zoneDeJeu.clientWidth - joueur.clientWidth) {
                positionX += vitesse;
            }
            break;
    }

    // Mettez à jour la position horizontale du joueur
    joueur.style.left = positionX + "px";
});
