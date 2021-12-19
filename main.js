var gen_buttons = document.getElementsByClassName('gen_color');
var randomColor;
var color_codes = document.getElementsByClassName('color_code');
const saveBtn = document.getElementById('save');
const showSaved = document.getElementById('show');
var colors = ['#', '#', '#', '#'];

var colorStorage = window.localStorage;

var colorPalettes = [];

var defaultPalette = {
    id: Date.now(),
    color1: '#',
    color2: '#',
    color3: '#',
    color4: '#'
}

colorPalettes.push(defaultPalette);

console.log(colorPalettes);

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

// function addPallete(palette){
//     console.log(colorPalettes);
// }

saveBtn.addEventListener('click', function() {
    const palette = {
        id: Date.now(),
        color1: colors[0],
        color2: colors[1],
        color3: colors[2],
        color4: colors[3]
    }
    // if (colorPalettes.length === 1){
    //     colorPalettes[0] = palette;
    // }
    // else {
    //     colorPalettes.push(palette);
    // }
    // colorPalettes = ;
    console.log(colorPalettes);
    // colorStorage.setItem('palettes', JSON.stringify(colorPalettes));
    // console.log(colorStorage);
})

function loadColors(){
    colorPalettes = JSON.parse(colorStorage.getItem('palettes'))
}

loadColors();
// localStorage.clear();
showSaved.addEventListener('click', () => {
    colors_list = JSON.parse(colorStorage.getItem('paletts'));
    console.log(colors_list);
})