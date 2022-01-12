'use strict';


const listCase = document.getElementsByClassName('list__case');


function init() {
    const list = document.querySelector('.list');
    for (let i = 0; i < localStorage.length; i++) {
        let fromStorage = `<li class="list__case">${localStorage[i]}</li>`;
        list.insertAdjacentHTML('beforeend', fromStorage);
    }
    drawCloseButton();
    toggleCheckedClass();
    deleteCase();
}
init();


function drawCloseButton() {

    for (const item of listCase) {

        const deleteButton = document.createElement('span');
        const drawCross = document.createTextNode('×');

        deleteButton.append(drawCross);
        deleteButton.classList.add('close');

        item.append(deleteButton);
    }
}


function toggleCheckedClass() {
    for (const item of listCase) {
        item.addEventListener('click', (event) => {
            if (event.target.className !== 'close') {
                item.classList.toggle('list__checked');
            }
        });

    }
}

// toggleCheckedClass();


function createCase(text) {
    return `<li class="list__case">${text}</li>`;
}


function addCase() {
    const list = document.querySelector('.list');
    const input = document.querySelector('.header__input');
    if (input.value != '') {
        list.insertAdjacentHTML('beforeend', createCase(input.value));
        drawCloseButton();
        toggleCheckedClass();
        deleteCase();

        localStorage.setItem(localStorage.length, input.value);
    }
    input.value = '';
}


function actionAddCase() {
    const addButton = document.querySelector('.header__btn');
    addButton.addEventListener('click', addCase);
}

actionAddCase();


function deleteCase() {
    const closeButtons = document.getElementsByClassName('close');

    for (const list of listCase) {
        list.addEventListener('click', (event) => {

            for (let i = 0; i < closeButtons.length; i++) {
                if (closeButtons[i] === event.target) {
                    list.remove();
                }
                if (event.target.parentNode.textContent.slice(0, event.target.parentNode.textContent.length - 1) === localStorage[i]) {
                    localStorage.removeItem(i);
                }

            }
        });
    }
}


