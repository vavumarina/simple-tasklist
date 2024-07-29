'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener("click", function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('light-theme')) {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    console.log('current class name: ' + document.body.className);
});
