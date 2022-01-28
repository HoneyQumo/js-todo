'use strict';

function init() {
    const list = document.querySelector('.list');
    for (let i = 0; i < localStorage.length; i++) {
        let fromStorage = `<li class="list__case">${localStorage[i]}</li>`;
        list.insertAdjacentHTML('beforeend', fromStorage);
    }
    actionAddCase();
    drawCloseButton();
    toggleCheckedClass();
    deleteCase();
}
init();


function drawCloseButton() {
    const listCase = document.querySelectorAll('.list__case');
    listCase.forEach(el => {
        const deleteButton = document.createElement('span');
        const drawCross = document.createTextNode('×');

        deleteButton.append(drawCross);
        deleteButton.classList.add('close');
        el.append(deleteButton);
    });
}


function toggleCheckedClass() {
    let listCase = document.querySelectorAll('.list__case');
    listCase.forEach(el => {
        if (!el.classList.contains('toggle')) {
            el.classList.add('toggle');
            el.addEventListener('click', (e) => {
                e.target.classList.toggle('list__checked');
            });
        }
    });
}



function createCase(text) {
    return `<li class="list__case">${text}<span class="close">×</span></li>`;
}


function addCase() {
    const list = document.querySelector('.list');
    const input = document.querySelector('.header__input');

    if (input.value != '') {
        list.insertAdjacentHTML('beforeend', createCase(input.value));
        localStorage.setItem(localStorage.length, input.value);
        toggleCheckedClass();
        deleteCase();
    }
    input.value = '';
}


function actionAddCase() {
    const addButton = document.querySelector('.header__btn');
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        addCase();
    });
}


function deleteCase() {
    const cases = document.querySelectorAll('.list__case');
    const closeButtons = document.querySelectorAll('.close');

    cases.forEach(caseis => {
        caseis.addEventListener('click', (e) => {
            for (let i = 0; i < cases.length; i++) {
                if (closeButtons[i] === e.target) {
                    caseis.remove();
                    localStorage.removeItem(i);
                }
            }
        });
    });

}


