'use strict';

let btn = document.querySelectorAll('button');
btn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

function handleClick(clickButton) {
    let cardNode = clickButton.target.parentNode;

    let card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    let buttonText = card.button.innerText;
    if (buttonText === 'Подробнее') {
        openText(card);
    } else if (buttonText === 'Отмена') {
        closeText(card);
    };

    function openText(card) {
        card.img.style.display = "none";
        const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
        card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
        card.button.innerText = 'Отмена';
    };

    function closeText(card) {
        card.img.style.display = 'block';
        card.wrap.querySelector('.desc').remove();
        card.button.innerText = 'Подробнее';
    };
}