var gen_buttons = document.getElementsByClassName('gen_color');
var randomColor;
var color_codes = document.getElementsByClassName('color_code');
const saveBtn = document.getElementById('save');
const showSaved = document.getElementById('show');
var pl_list = document.querySelector('.palette_list');
var clPalettes = [];
var colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff'];
var colorDivs = document.getElementsByClassName('color');

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
    showPalettes(clPalettes);
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
                <button class="load_btn"><i class="load_i fas fa-spinner"></i></button>
                <button class="del_item"><i class="del_i fas fa-times"></i></button>
            </div>
        `;
        pl_list.append(list_item);
    })
}

loadColors();

showSaved.addEventListener('click', () => {
    loadColors();
    document.querySelector('.saved_colors').classList.toggle('active');
})

function del_palette(id){
    clPalettes = clPalettes.filter(function(item) {
        return item.id != id;
    })
    colorStorage.setItem('palettes', JSON.stringify(clPalettes));
    showPalettes(clPalettes);
}

function loadPalette(id){
    clPalettes.forEach((item) => {
        if (item.id == id){
            colorDivs[0].style.backgroundColor = item.color1;
            color_codes[0].innerHTML = item.color1;
            colorDivs[1].style.backgroundColor = item.color2;
            color_codes[1].innerHTML = item.color2;
            colorDivs[2].style.backgroundColor = item.color3;
            color_codes[2].innerHTML = item.color3;
            colorDivs[3].style.backgroundColor = item.color4;
            color_codes[3].innerHTML = item.color4;
        }
    })
}

pl_list.addEventListener('click', function(event) {
    if (event.target.classList.contains('del_item')){
        del_palette(event.target.parentElement.parentElement.getAttribute('data-key'));
    }
    else if (event.target.classList.contains('del_i')){
        del_palette(event.target.parentElement.parentElement.parentElement.getAttribute('data-key'));
    }
    else if (event.target.classList.contains('load_btn')){
        loadPalette(event.target.parentElement.parentElement.getAttribute('data-key'));
    }
    else if (event.target.classList.contains('load_i')){
        loadPalette(event.target.parentElement.parentElement.parentElement.getAttribute('data-key'));
    }
})