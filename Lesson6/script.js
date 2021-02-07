// // Task 1

// const unique = (array) => {
//     return array.filter((element, index) => {
//         return array.indexOf(element) == index;
//     })
// }

// const data = [1, 2, 1, 2, 3];
// console.log(unique(data)); // [1, 2, 3]


// //    Tassk 2 

// const isEqual = (firstArray, secondArray) => {

//     let compareResult = true;

//     if (firstArray.length == secondArray.length) {
//         firstArray.forEach((element, index) => {
//             element == secondArray[index] ? true : compareResult = false;
//         })
//     } else compareResult = false;

//     return compareResult;
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false


// //   Task 3

// const reverse = (array) => {
//     const reversedArray = [];
//     while (array.length) {
//         reversedArray.push(array.pop());
//     }
//     return reversedArray;
// }

// const dataResult = [1, 2, 3, 5, 6];
// console.log(reverse(dataResult)); // [3, 2, 1]


// // Task 4


// const array = [43, 54, 12, 'text', 'TeXt', 54, "54", 0, false, "car", "CAR", 43];
// let sortedArr = [];
// const newArr = [];
// const unique = arr => {
//     sortedArr = arr.map(element => {

//         if (typeof element == 'string') { return element.toLowerCase() }
//         else return element
//     });

//     return sortedArr.filter((elem, index) => {
//         return arr.indexOf(elem) == index;
//     })
// }
// function repeatValue(arr) {

//     unique(arr).map(element => {
//         let counter = 0;
//         for (i of arr) {
//             if (typeof element == 'string' && typeof i == 'string') {
//                 element.toLowerCase() === i.toLowerCase() ? counter++ : false;
//             } else element === i ? counter++ : false;

//         }
//         newArr.push({ value: element, count: counter })
//     })
//     return newArr;
// }


// Task 5

let data = [
    {
        price: 324,
        type: 2,
        area: 375,
        presence: true,
        name: "Aria",
        id: 41098,
    }, {
        price: 660,
        type: 4,
        area: 451,
        presence: true,
        name: "Bayard",
        id: 48467
    }, {
        price: 337,
        type: 4,
        area: 525,
        presence: true,
        name: "Bellehurst",
        id: 49340
    }, {
        price: 343,
        type: 4,
        area: 538,
        presence: false,
        name: "Brookview",
        id: 52504
    }, {
        price: 423,
        type: 2,
        area: 506,
        presence: true,
        name: "Dumont Place",
        id: 41172,
    }, {
        price: 257,
        type: 4,
        area: 379,
        presence: false,
        name: "Halstead",
        id: 49952
    }, {
        price: 230,
        type: 2,
        area: 468,
        presence: true,
        name: "Hillgrove",
        id: 41166
    }, {
        price: 183,
        type: 4,
        area: 451,
        presence: true,
        name: "Kempston Place",
        id: 48471
    }, {
        price: 674,
        type: 2,
        area: 522,
        presence: true,
        name: "Overlook at Queen Creek",
        id: 48470
    }, {
        price: 450,
        type: 2,
        area: 373,
        presence: true,
        name: "Reserve at Wildwood",
        id: 50316
    }, {
        price: 795,
        type: 1,
        area: 366,
        presence: true,
        name: "Reverie on Cumberland",
        id: 48465
    }, {
        price: 550,
        type: 4,
        area: 376,
        presence: true,
        name: "Riverside",
        id: 41080
    }, {
        price: 190,
        type: 1,
        area: 367,
        presence: true,
        name: "Serenade",
        id: 41168
    }, {
        price: 589,
        type: 4,
        area: 368,
        presence: false,
        name: "The Grove",
        id: 40912
    }, {
        price: 330,
        type: 2,
        area: 368,
        presence: true,
        name: "Woodwinds at New Providence",
        id: 41086
    }, {
        price: 299,
        type: 2,
        area: 455,
        presence: true,
        name: "Canopy at Hudson Bend",
        id: 51105
    }, {
        price: 263,
        type: 3,
        area: 481,
        presence: true,
        name: "Carmel",
        id: 41193
    }, {
        price: 169,
        type: 1,
        area: 454,
        presence: true,
        name: "Estates of Flintrock",
        id: 41060
    }, {
        price: 222,
        type: 1,
        area: 483,
        presence: true,
        name: "Fairview Heights",
        id: 41192
    }, {
        price: 385,
        type: 4,
        area: 448,
        presence: false,
        name: "Headwaters",
        id: 53168
    }, {
        price: 180,
        type: 2,
        area: 447,
        presence: true,
        name: "Highlands at Mayfield Ranch ",
        id: 50235
    }, {
        price: 570,
        type: 4,
        area: 448,
        presence: true,
        name: "Highpointe",
        id: 41154,
    }, {
        price: 690,
        type: 3,
        area: 480,
        presence: true,
        name: "Lagos",
        id: 41198
    }, {
        price: 280,
        type: 3,
        area: 446,
        presence: false,
        name: "Mockingbird Park",
        id: 51381
    }, {
        price: 133,
        type: 1,
        area: 446,
        presence: false,
        name: "Mockingbird Park",
        id: 51381,
    }, {
        price: 530,
        type: 1,
        area: 448,
        presence: true,
        name: "Saratoga Hills",
        id: 41019
    }, {
        price: 577,
        type: 4,
        area: 455,
        presence: true,
        name: "Summit at Lake Travis",
        id: 41061
    }, {
        price: 290,
        type: 4,
        area: 481,
        presence: false,
        name: "Vine Creek",
        id: 51382
    }, {
        price: 150,
        type: 1,
        area: 443,
        presence: true,
        name: "Vista Vera",
        id: 49408,
    }, {
        price: 453,
        type: 3,
        area: 411,
        presence: true,
        name: "Lake Castleberry",
        id: 49596
    }
];



const typeFilter = (arr, type) => {
    return arr.reduce((sum, item) => {
        if (item.type == type) sum.push(item);
        return sum;
    }, [])
}

const priceFilter = (arr, maxPrice, minPrice) => {
    return arr.filter(({ price }) => {
        return price >= minPrice && price <= maxPrice;
    })
}
const areaFilter = (arr, maxArea, minArea) => {
    return arr.filter(({ area }) => {
        return area >= minArea && area <= maxArea;
    })
}

//  1 task with reduce




const mostExpensiveSector = (arr, type) => {
    const typeFilteredArray = typeFilter(arr, type);
    console.log(typeFilteredArray);
    return typeFilteredArray.reduce((sum, item) => {
        return sum.price > item.price ? sum : (sum = item);
    });
}
console.log(mostExpensiveSector(data, 2));

// 2 task with reduce 


const mostExpensiveType = (arr) => {
    const overallCost = [];
    let sumResult = 0;
    for (let type = 1; type <= 4; type++) { // Цикл для суммирования всех цен участков одного типа от первого типа до четвертого. 
        sumResult = typeFilter(arr, type).reduce((sum, { price }) => {
            return sum + price;
        }, 0);
        overallCost.push({ overall: sumResult, type: type });  // массив из 4 объектов, сортированных по типу + сумма всех участков одного типа;
    }
    console.log(overallCost); //для наглядности вывод массива до работы по отбору;
    return overallCost.reduce((acc, item) => {  // Возвращаем самую большую сумму цен; 
        return acc.overall > item.overall ? acc : (acc = item);
    })

}
console.log(mostExpensiveType(data));


// 3 task filter whith price and area


const searchLandByParams = (arr, maxPrice, minPrice, maxArea, minArea) => {

    const pricefilteredArray = priceFilter(arr, maxPrice, minPrice);
    if (pricefilteredArray.length) {
        const areaFilteredArray = areaFilter(pricefilteredArray, maxArea, minArea);
        if (areaFilteredArray.length) {
            return areaFilteredArray;
        } else alert('Подходящего участка нет');
    } else alert('Подходящего участка нет');


}

let searchResult = searchLandByParams(data, 700, 400, 600, 400);
console.log(searchResult);