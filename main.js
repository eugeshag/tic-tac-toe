const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function clearTable(inners) {
    inners.forEach(item => {
        item.innerHTML = '';
        item.classList.add('empty');
    });
}

function tableHasWinner(inners) {

    let win = false;

    winCombinations.forEach(combination => {
        if (inners[combination[0]].innerHTML == inners[combination[1]].innerHTML && inners[combination[0]].innerHTML == inners[combination[2]].innerHTML && !inners[combination[0]].classList.contains('empty')) {
            win = true;
        }
    });

    return win;
}

function createCross() {
    const cross = document.createElement('div');
    cross.classList.add('cross');
    return cross;
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    return circle;
}

function addShape(element, parent) {
    parent.appendChild(element);
    parent.classList.remove('empty');
}

const pop = document.querySelector('.pop');

const moveLabel = document.querySelector('.move');

const inners = document.querySelectorAll('.inner');

const mainButton = document.querySelector('#main-button');

const popButton = document.querySelector('#pop-button');

const winner = document.querySelector('.winner');

let move = 1;

inners.forEach((item) => {
    item.addEventListener('click', () => {
        if (move == 1 && item.classList.contains('empty')) {
            const cross = createCross();
            item.appendChild(cross);
            move = 2;
            if (tableHasWinner(inners)) {
                pop.classList.add('active');
                clearTable(inners);
                moveLabel.innerHTML = 'Хід 1 гравця';
                winner.innerHTML = `Переміг 1 гравець`;
                move = 1;
            }
        }
        else if (move == 2 && item.classList.contains('empty')) {
            const circle = createCircle();
            item.appendChild(circle);
            move = 1;
            if (tableHasWinner(inners)) {
                pop.classList.add('active');
                clearTable(inners);
                moveLabel.innerHTML = 'Хід 1 гравця';
                winner.innerHTML = `Переміг 2 гравець`;
                move = 1;
            }
        }
        moveLabel.innerHTML = `Хід ${move} гравця`;
        item.classList.remove('empty');
        if (!document.querySelector('.empty')) {
            pop.classList.add('active');
            clearTable(inners);
            moveLabel.innerHTML = 'Хід 1 гравця';
            winner.innerHTML = 'Нічия';
            move = 1;
        }
    });
});

mainButton.addEventListener('click', () => {
    clearTable(inners);
    moveLabel.innerHTML = 'Хід 1 гравця';
    winner.innerHTML = 'Нічия';
    move = 1;
});

popButton.addEventListener('click', () => {
    pop.classList.remove('active');
    clearTable(inners);
    moveLabel.innerHTML = 'Хід 1 гравця';
    winner.innerHTML = 'Нічия';
    move = 1;
});
