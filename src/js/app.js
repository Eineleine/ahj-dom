import image from '../js/goblin.png';


    document.addEventListener('DOMContentLoaded', () => {
        const field = document.querySelector('.field');
        const fieldBoard = [];
        const imgGoblin = document.createElement('img');
        imgGoblin.src = image;

        for (let i = 0; i < 16; i++) {
            let newDiv = document.createElement('div');
            field.append(newDiv);
            fieldBoard.push(newDiv);
        }
        
        let currentField = 0;

        function goblin() {
            fieldBoard[currentField].innerHTML = '';
            currentField = Math.floor(Math.random() * fieldBoard.length);
            fieldBoard[currentField].append(imgGoblin);
        }
        setInterval(goblin, 1000);
    });
