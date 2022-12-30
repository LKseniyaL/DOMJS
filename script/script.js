//1. Сделать страницу из одного кружка и 3 кнопок Turm red, Turn green и Turn blue
//По клику на любую из кнопок кружок должен краситься в соответствующий цвет.

//****************** Task 1******************/

const divCircle = document.querySelector('.divCircle');
const bth_red = document.querySelector('.bth_red');
const bth_green = document.querySelector('.bth_green');
const bth_blue = document.querySelector('.bth_blue');

bth_red.addEventListener('click', () => {
    divCircle.classList.toggle('active_red');
    divCircle.classList.remove('active_green');
    divCircle.classList.remove('active_blue');
});

bth_green.addEventListener('click', () => {
    divCircle.classList.toggle('active_green');
    divCircle.classList.remove('active_red');
    divCircle.classList.remove('active_blue');
});

bth_blue.addEventListener('click', () => {
    divCircle.classList.toggle('active_blue');
    divCircle.classList.remove('active_red');
    divCircle.classList.remove('active_green');
});

//****************** Task 2******************/
//1. Сделать задачу 1 с поддержкой любого числа цветов

const divCircle2 = document.querySelector('.divCircle2');
const buttons2 = document.querySelector('.buttons2');

const array = ['red', 'blue', 'pink', 'green', 'black', 'yellow'];

function newFunc(array){
    for(let i = 0; i < array.length; i++){
        const newBth = document.createElement('button');
        newBth.innerText = array[i];
        newBth.style.backgroundColor = array[i];
        newBth.classList.add('buttonsCollection');

        newBth.addEventListener('click', () => {
            divCircle2.style.backgroundColor = array[i];
        })

        buttons2.append(newBth); 
    }
}
newFunc(array);
