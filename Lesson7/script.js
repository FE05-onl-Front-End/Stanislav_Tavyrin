const random = () => {
    return Math.floor((Math.random() * 100) + 1);
}

function randomArr() {
    
    let newArr = [];
    return function () {
        while (newArr.length < 100) {
            let randomNum = random();
            newArr.includes(randomNum) ? true : newArr.push(randomNum);
        }
        return newArr;
    }
}

let array = randomArr();
console.log(array());
