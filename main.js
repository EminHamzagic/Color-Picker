var gen_buttons = document.getElementsByClassName('gen_color');
var randomColor;
var color_codes = document.getElementsByClassName('color_code');
const saveBtn = document.getElementById('save');
const showSaved = document.getElementById('show');
var clPalettes = [];
var colors = ['#', '#', '#', '#'];

var colorStorage = window.localStorage;

console.log(clPalettes);

gen_buttons[0].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[0].parentElement.style.backgroundColor = '#' + randomColor;
    color_codes[0].innerHTML = '#' + randomColor;
    colors[0] = '#' + randomColor;
});

gen_buttons[1].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[1].parentElement.style.backgroundColor = '#' + randomColor;
    color_codes[1].innerHTML = '#' + randomColor;
    colors[1] = '#' + randomColor;
});

gen_buttons[2].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[2].parentElement.style.backgroundColor = '#' + randomColor;
    color_codes[2].innerHTML = '#' + randomColor;
    colors[2] = '#' + randomColor;
});

gen_buttons[3].addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    gen_buttons[3].parentElement.style.backgroundColor = '#' + randomColor;
    color_codes[3].innerHTML = '#' + randomColor;
    colors[3] = '#' + randomColor;
});

saveBtn.addEventListener('click', () => {
    loadColors();
    const palette = {
        id: Date.now(),
        color1: colors[0],
        color2: colors[1],
        color3: colors[2],
        color4: colors[3]
    }
    clPalettes.push(palette)
    colorStorage.setItem('palettes', JSON.stringify(clPalettes));
    console.log(colorStorage);
})

function loadColors(){
    const ref = colorStorage.getItem('palettes');
    if (ref) {
        clPalettes = JSON.parse(ref);
    }
}

loadColors();
// localStorage.clear();
showSaved.addEventListener('click', () => {
    colors_list = JSON.parse(colorStorage.getItem('paletts'));
    console.log(colors_list);
})