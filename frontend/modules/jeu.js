const player = document.querySelector('#joueur');
const gameArea = document.querySelector('#game');
const playerWidth = player.offsetWidth;
const gameAreaWidth = gameArea.offsetWidth;
const projectileWidth = 2;
const projectileHeight = 20;
const projectileSpeed = 11;

let playerX = gameAreaWidth / 2 - playerWidth / 2;
let enTir = false;

const enemies = document.querySelectorAll('.enemy');

// Déplacer le joueur
function updateGameArea() {
    player.style.left = `${playerX}px`;
    requestAnimationFrame(updateGameArea);
}

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

const enemiesContainer = document.querySelector('#enemies-container');

function createEnemiesGrid() {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 11; col++) {
            const enemy = document.createElement('div');
            enemy.className = 'enemy';
            enemiesContainer.appendChild(enemy);
        }
    }
}

function moveEnemiesHorizontally() {
    const enemies = document.querySelectorAll('.enemy');

    enemies.forEach((enemy) => {
        let enemyX = parseInt(getComputedStyle(enemy).left);

        // Move the enemy
        enemyX += enemySpeed * enemyDirection;
        enemy.style.transform = `translateX(${enemyX}px)`;

        // Check if the enemy has reached the border
        const containerWidth = enemiesContainer.offsetWidth;

        if (enemyX <= 0 || enemyX + enemy.offsetWidth >= containerWidth) {
            // Change direction when the enemy touches the border
            enemyDirection *= -1;
        }
    });

    // Repeat the movement in the next animation frame
    requestAnimationFrame(moveEnemiesHorizontally);
}

function checkCollision(projectile) {


    enemies.forEach((enemy) => {
        const enemyRect = enemy.getBoundingClientRect();
        const projectileRect = projectile.getBoundingClientRect();

        if (
            projectileRect.bottom >= enemyRect.top &&
            projectileRect.top <= enemyRect.bottom &&
            projectileRect.right >= enemyRect.left &&
            projectileRect.left <= enemyRect.right
        ) {
            // Collision detected, remove both projectile and enemy
            projectile.remove();
            enemy.remove();
        }
    });
}

checkCollision();
createEnemiesGrid()
updateGameArea();
