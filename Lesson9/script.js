
let modal = document.querySelector('.wrapper');
let firstName = document.querySelector('input[name=first-name]');
let lastName = document.querySelector('input[name=last-name]');
let age = document.querySelector('input[name=age]');
let form = document.querySelector('#userform');
let incorrect = document.querySelectorAll('.incorrect');
let okBtn = document.querySelector('.ok');
const usersArr = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
]
let table = document.getElementById('table');
let btn = document.getElementsByClassName('btn');
let rows = document.getElementsByTagName('tr');
const addUser = (index) => {
    let newTr = document.createElement('tr');
    newTr.innerHTML = `<td>${usersArr[index].firstName}</td>
                       <td>${usersArr[index].lastName}</td>
                       <td>${usersArr[index].age}</td>
                       <td><button class='btn' onclick='deleteUser(event)'>x</button></td>`;
    usersArr[index].age > 17 ? newTr.style.backgroundColor = 'green' : newTr.style.backgroundColor = 'red';
    table.appendChild(newTr);

}

usersArr.forEach((element, i) => {
    addUser(i);
})

const deleteUser = (event) => {
    let userName = event.target.closest('tr').firstChild.innerHTML;
    event.target.closest('tr').remove();
    usersArr.forEach(({ firstName }, index) => {
        firstName === userName ? usersArr.splice(index, 1) : false;
    })

}

function CreateUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const registerUser = function () {
    usersArr.push(new CreateUser(firstName.value, lastName.value, age.value));
    addUser(usersArr.length - 1);
    hide();
}
okBtn.addEventListener('click', registerUser);




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








