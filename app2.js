const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;


function updateScore(player, opponet) {
    if (!isGameOver) {
        player.score += 1;

        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponet.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponet.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


// when p1Button clicked it will increase p1Score by 1 or change to winner if === winning score
p1Button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2Button.addEventListener('click', function () {
    updateScore(p2, p1)
})

resetButton.addEventListener('click', reset);


function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger'); // remove colour
        p.button.disabled = false;
    }
    // lopp above is the same as below
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success', 'has-text-danger'); // remove colour
    // p2.display.classList.remove('has-text-success', 'has-text-danger'); // remove colour
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}

// change winning score to the score the user selects 3 -11
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);// 3 - 11
    reset(); // resets when you choose a new value
})

