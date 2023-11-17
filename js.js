function createEnemiesGrid() {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 11; col++) {
            const alien = document.createElement('div');
            alien.className = 'alien';
            alienContainer.appendChild(alien);
        }
    }
}