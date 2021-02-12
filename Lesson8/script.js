// const random = () => {
//     return Math.floor((Math.random() * 100) + 1);
// }

// function randomArr() {

//     let newArr = [];
//     return function () {
//         while (newArr.length < 100) {
//             let randomNum = random();
//             newArr.includes(randomNum) ? true : newArr.push(randomNum);
//         }
//         return newArr;
//     }
// }

// let array = randomArr();
// console.log(array());

let modal = document.querySelector('.wrapper');
let firstName = document.querySelector('input[name=first-name]');
let lastName = document.querySelector('input[name=last-name]');
let age = document.querySelector('input[name=age]');
let form = document.querySelector('#userform');
let incorrect = document.querySelectorAll('.incorrect');
function show() {

    modal.style.display = 'block';
}

function hide() {
    modal.style.display = 'none';

}
function checkNameInput() {

    if (firstName.value.match(/\d/g) || firstName.value.length > 10) {
        incorrect[0].style.display = 'block';
        document.querySelector('.ok').disabled = true;
    } else {
        incorrect[0].style.display = 'none';
        document.querySelector('.ok').disabled = false;
    }

}
function checkLastNameInput() {

    if (lastName.value.match(/\d/g) || lastName.value.length > 10) {
        incorrect[1].style.display = 'block';
        document.querySelector('.ok').disabled = true;
    } else {
        incorrect[1].style.display = 'none';
        document.querySelector('.ok').disabled = false;
    }

}

form.addEventListener('submit', () => {
    // event.preventDefault();
    alert(`
           Имя: ${firstName.value}
           Фамилия: ${lastName.value}
           Возраст: ${age.value}`);
    // hide();
})