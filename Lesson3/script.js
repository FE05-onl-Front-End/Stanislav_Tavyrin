// num - высота ёлки;
function tree(num) {
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
}

function reverseTree(num) {
    for (let i = num; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}


//для ёлки любой высоты
function fullTree(num) {
    let treeArr = [];
    let arr = new Array((num * 2) - 1);
    arr.fill("*");   //заполняем массив звездочками
    for (let i = num; i > 0; i--) { // делаем перебор с уменьшением счетчика для удаления ** 
        treeArr.unshift(arr.join('')); // вставляем в начало нового массива, уменьшающуюся с каждой итерацией строку. 

        arr.splice(arr.indexOf('*'), 2, ' '); // находим индекс первого вхождения * и используем его в качестве первого ар-та метода .splice, начиная с этого индекса удаляем одну * , а вторую заменяем пробелом.
    }
    for (key of treeArr) console.log(key); // выводим каждый эл-т массива через лог.


}

function numDivision(num, lim, del) {
    let count = 0;
    while (num / del > lim) {
        num /= del;
        count++;

    }
    return count;
}

function sum(a) {
    console.log(a);
    return function (n) {
        return sum(a + n)
    };
};


