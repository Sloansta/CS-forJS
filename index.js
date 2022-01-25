// code example not using a closure

/*const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
    let count = parseInt(this.getAttribute('data-count'));
    count++;

    this.setAttribute('data-count', count);
    this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener('click', clickHandler);*/

// basically the benifit here when using a closure is not only does the button own their own data, but the code is also cleaner and more maintainable

// const buttonEl = document.getElementById('my-button');

const buttons = document.getElementsByTagName('button');



const clickHandler = function() {
    let count = 0;

    return function() {
        count++;
        this.textContent = `Clicks: ${count}`;
    };
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickHandler());
}