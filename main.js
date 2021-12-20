var gen_buttons = document.getElementsByClassName('gen_color');
var randomColor;
var color_codes = document.getElementsByClassName('color_code');
const saveBtn = document.getElementById('save');
const showSaved = document.getElementById('show');
var pl_list = document.querySelector('.palette_list');
var clPalettes = [];
var colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff'];

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
    showPalettes(clPalettes);
}

function showPalettes(paletteList){
    pl_list.innerHTML = '';
    paletteList.forEach(function(item) {
        let list_item = document.createElement('li')
        list_item.setAttribute('data-key', item.id);
        list_item.setAttribute('class', 'palette');
        list_item.innerHTML = `
            <p>Palette #${paletteList.indexOf(item) + 1}</p>
            <div class="palette_buttons">
                <button class="load_btn"><i class="fas fa-spinner"></i></button>
                <button class="del_item"><i class="del_btn fas fa-times"></i></button>
            </div>
        `;
        pl_list.append(list_item);
    })
}

loadColors();

showSaved.addEventListener('click', () => {
    // colors_list = JSON.parse(colorStorage.getItem('paletts'));
    // console.log(colors_list);
    loadColors();
})

