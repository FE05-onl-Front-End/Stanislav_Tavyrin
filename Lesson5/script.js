// First task


let newArr;

const fill = (arrSize, value) => {
    newArr = new Array(arrSize);
    return newArr.fill(value);
}

const data = 7;
const valueToFill = 'a';
console.log(fill(data, valueToFill));

// Second Task

const compact = (array) => {
    return array.filter(elem => elem);
};

const data2 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data2)) // [1, 2, 3]

// Third Task

let usersAge = {
    ivanov: '19',
    petrov: '17',
    sidorov: '21'
}
let adultsArr = [],
    youngArr = [];

const sortAge = function (obj) {
    Object.keys(obj).forEach(key => {
        +obj[key] >= 18 ? adultsArr.push({ name: key, age: obj[key] }) : youngArr.push({ name: key, age: obj[key] });

    })
    console.log(youngArr);
    console.log(adultsArr);
};

console.log(sortAge(usersAge));