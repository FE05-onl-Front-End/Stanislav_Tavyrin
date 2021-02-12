
let modal = document.querySelector('.wrapper');
let firstName = document.querySelector('input[name=first-name]');
let lastName = document.querySelector('input[name=last-name]');
let age = document.querySelector('input[name=age]');
let form = document.querySelector('#userform');
let incorrect = document.querySelectorAll('.incorrect');
let okBtn = document.querySelector('.ok');

function show() {
    modal.style.display = 'block';
}

function hide() {
    modal.style.display = 'none';
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    incorrect.forEach(elem => elem.style.display = 'none');
}

function checkNameInput() {

    if (firstName.value.match(/\d/g) || firstName.value.length > 10) {
        incorrect[0].style.display = 'block';
        okBtn.disabled = true;
    } else if (incorrect[1].style.display == 'block' || incorrect[2].style.display == 'block') {
        incorrect[0].style.display = 'none';
        okBtn.disabled = true;
    } else {
        incorrect[0].style.display = 'none';
        okBtn.disabled = false;
    }

}

function checkLastNameInput() {

    if (lastName.value.match(/\d/g) || lastName.value.length > 10) {
        incorrect[1].style.display = 'block';
        okBtn.disabled = true;

    } else if (incorrect[0].style.display == 'block' || incorrect[2].style.display == 'block') {
        incorrect[1].style.display = 'none';
        okBtn.disabled = true;
    } else {
        incorrect[1].style.display = 'none';
        okBtn.disabled = false;
    }

}

function checkAge() {
    console.log(+age.value);
    if (isNaN(+age.value) || +age.value < 0 || +age.value > 135) {
        incorrect[2].style.display = 'block';
        okBtn.disabled = true;

    } else if (incorrect[0].style.display == 'block' || incorrect[1].style.display == 'block') {
        incorrect[2].style.display = 'none';
        okBtn.disabled = true;
    } else {
        incorrect[2].style.display = 'none';
        okBtn.disabled = false;
    }
}

form.addEventListener('submit', () => {
    alert(`
           Имя: ${firstName.value}
           Фамилия: ${lastName.value}
           Возраст: ${age.value}`);

})