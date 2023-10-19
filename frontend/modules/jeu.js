const object = document.getElementById('joueur');
let positionX = 950;
let positionY = -500;
let moveX = 0;
let moveY = 0;
const moveSpeed = 3; // Vitesse de déplacement

function moveObject() {
    positionX += moveX;
    object.style.left = positionX + 'px';

}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            
            if (positionX + vitesse <= zoneDeJeu.clientWidth - joueur.clientWidth) {
                positionX += vitesse;
            }else{
                moveX = -moveSpeed;
            }
            break;
        case 'ArrowRight':
            moveX = moveSpeed;
           
            break;
    }
    
});

document.addEventListener('keyup', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
            moveX = 0;
            break;
    }
});

// Mettre à jour la position de l'objet en continu
function gameLoop() {
    moveObject();
    requestAnimationFrame(gameLoop);
}

gameLoop();