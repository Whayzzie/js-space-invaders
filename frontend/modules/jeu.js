const player = document.querySelector('#joueur');
const gameArea = document.querySelector('#game');
const playerWidth = player.offsetWidth;
const gameAreaWidth = gameArea.offsetWidth;
const projectileWidth = 2;
const projectileHeight = 20;
const projectileSpeed = 11;
const enemiesContainer = document.querySelector('#enemies-container');
const aliens = document.querySelector('#aliens');
const aliensWidth = aliens.offsetWidth;

let playerX = gameAreaWidth / 2 - playerWidth / 2;
let enTir = false;

const enemies = document.querySelectorAll('.enemy');

console.log(gameAreaWidth);

    let isGameOver = false;

function moveAlien() {
        if (!isGameOver) {
            let direction = 1; // 1 for right, -1 for left
            const alienPosition = parseInt(getComputedStyle(aliens).left);
            const alienBottom = parseInt(getComputedStyle(aliens).bottom);

            if (alienPosition == 0) {
                // Change direction
                direction = 1;

                // Move the alien down
                aliens.style.bottom = (alienBottom - 30) + 'px';
                aliens.style.left = 1 + 'px';
                // Check if the alien has reached the bottom
            }

            // Move the alien horizontally
            aliens.style.left = (alienPosition + direction) + 'px';

            // Check if the alien has reached the border
            if (alienPosition >= gameAreaWidth - aliensWidth) {
                // Change direction
                direction = -1;

                // Move the alien down
                aliens.style.bottom = (alienBottom - 30) + 'px';
                aliens.style.left = 365 + 'px';
            }
            if (alienBottom <= 0) {
                gameOver();
            }
            requestAnimationFrame(moveAlien);
            ;
        }
    }

function gameOver() {
    isGameOver = true;
    alert('Game Over!');
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' && playerX > 0) {
        startMoving('left');
    } else if (event.key === 'ArrowRight' && playerX < gameAreaWidth - playerWidth) {
        startMoving('right');
    }
    if (event.key === ' ' && enTir === false || event.key === 'Spacebar' && enTir === false) {
        fireProjectile(playerX + playerWidth / 2);
        enTir = true;
    }
});

// Arrêter le mouvement lorsque la touche est relâchée
document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    }
});

// Déplacer le joueur
function startMoving(direction) {
    if (direction === 'left' && playerX > 0) {
        playerX -= 6;
    } else if (direction === 'right' && playerX < gameAreaWidth) {
        playerX += 6;
    }
}

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


function createEnemiesGrid() {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 11; col++) {
            const enemy = document.createElement('div');
            enemy.className = 'enemy';
            enemiesContainer.appendChild(enemy);
        }
    }
}



// Déplacer le joueur
function updateGameArea() {
    player.style.left = `${playerX}px`;
    requestAnimationFrame(updateGameArea);
}
createEnemiesGrid()
updateGameArea();
moveAlien();
