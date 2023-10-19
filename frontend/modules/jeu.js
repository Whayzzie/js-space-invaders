const player = document.querySelector('#joueur');
const gameArea = document.querySelector('#game');
const playerWidth = player.offsetWidth;
const gameAreaWidth = gameArea.offsetWidth;
const projectileWidth = 2;
const projectileHeight = 20;
const projectileSpeed = 9;

let playerX = gameAreaWidth/2;
let enTir = false;


function updateGameArea() {
    // Déplacer le joueur
    player.style.left = `${playerX}px`;
    requestAnimationFrame(updateGameArea);
}

function startMoving(direction) {
    if (direction === 'left' && playerX > 0) {
        // Déplacer le joueur vers la gauche
        playerX -= 6; // Ajustez la valeur pour changer la vitesse
    } else if (direction === 'right' && playerX < gameAreaWidth - playerWidth) {
        // Déplacer le joueur vers la droite
        playerX += 6; // Ajustez la valeur pour changer la vitesse
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === ' '  && enTir === false || event.key === 'Spacebar' && enTir === false) {
        fireProjectile(playerX + playerWidth / 2);
        enTir = true;
    }
    if (event.key === 'ArrowLeft' && playerX > 0) {
        startMoving('left');
    } else if (event.key === 'ArrowRight' && playerX < gameAreaWidth - playerWidth) {
        startMoving('right');
    }
      // Tirer un projectile lorsque la barre d'espace est pressée

});

document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        // Arrêter le mouvement lorsque la touche est relâchée
    }
});

function fireProjectile(positionX = playerX) {
    const projectile = document.createElement('div');
    projectile.className = 'projectile';
    projectile.style.width = projectileWidth + 'px';
    projectile.style.height = projectileHeight + 'px';
    projectile.style.backgroundColor = 'white';
    projectile.style.position = 'absolute';
    projectile.style.left = positionX - projectileWidth / 2 + 'px';
    projectile.style.bottom = '30px'; // Starting position from the bottom of the game container
    projectile.style.zIndex = 10;


    gameArea.appendChild(projectile);

    // Déplacer le projectile vers le haut
    function moveProjectile() {
        const projectileBottom = parseInt(projectile.style.bottom);
        if (projectileBottom < gameArea.offsetHeight) {
            projectile.style.bottom = (projectileBottom + projectileSpeed) + 'px';
            requestAnimationFrame(moveProjectile);
        } else {
            // Supprimer le projectile une fois qu'il sort de la zone de jeu
            projectile.remove();
            enTir = false;
        }
    }

    moveProjectile();
}

// Démarrer l'animation
updateGameArea();
