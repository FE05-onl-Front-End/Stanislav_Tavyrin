// Task 1

const unique = (array) => {
    return array.filter((element, index) => {
        return array.indexOf(element) == index;
    })
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]


//    Tassk 2 

const isEqual = (firstArray, secondArray) => {

    let compareResult = true;

    if (firstArray.length == secondArray.length) {
        firstArray.forEach((element, index) => {
            element == secondArray[index] ? true : compareResult = false;
        })
    } else compareResult = false;

    return compareResult;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false


//   Task 3

const reverse = (array) => {
    const reversedArray = [];
    while (array.length) {
        reversedArray.push(array.pop());
    }
    return reversedArray;
}

const dataResult = [1, 2, 3, 5, 6];
console.log(reverse(dataResult)); // [3, 2, 1]