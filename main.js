var gen_buttons = document.getElementsByClassName('gen_color');

var randomColor;

gen_buttons[0].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[0].parentElement.style.backgroundColor = '#' + randomColor;
});

gen_buttons[1].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[1].parentElement.style.backgroundColor = '#' + randomColor;
});

gen_buttons[2].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[2].parentElement.style.backgroundColor = '#' + randomColor;
});

gen_buttons[3].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[3].parentElement.style.backgroundColor = '#' + randomColor;
});