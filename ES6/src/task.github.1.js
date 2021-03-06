(function () {

//  Обьявляем массив
var arr = [];

// Заполнение массива элементами от 1 до 100 рандомно
for (let i = 1; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

// Вывод массива в консоль
console.log(arr);

// Поиск min и max
function findMinMax(array = [], operator) {
    var max;
    var min;
    switch (operator) {
        case 'min':
            min = array[1];
            for (let i = 1; i < 100; i++) {
                if (array[i + 1] < min) {
                    min = array[i + 1];
                }
            }
            console.log(`min = ${min}`)
            break

        case 'max':
            max = array[1];
            for (let i = 1; i < 100; i++) {
                if (array[i + 1] > max) {
                    max = array[i + 1];
                }
            }
            console.log(`max = ${max}`)
            break

        default: console.log('Вы ввели неверные параметры!!!');
    }
}

// Вывод min и max
findMinMax(arr, 'min');
findMinMax(arr, 'max');

// преобразование массива в обьект вида структурированного массива
function objArr(array = []) {
    var obj = {};
    var char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 1; i <= 26; i++) {
        obj[char[i-1]] = array[i];
        // document.write(char[i-1] + ' : ');
        // document.write(obj[char[i-1]] + '<br>');
        //console.log(`${char[i-1]} : ${array[i]}`);
    }

    for (let i = 1; i <= 74; i++) {
        obj[i] = array[i];
        // document.write(i + ' : ');
        // document.write(obj[i] + '<br>');
        //console.log(`${i} : ${array[i]}`);
    }
    return obj;
}

console.log(objArr(arr));

var arr1 = [1, 2, 2, 2, 43, 32, 23, 6, 7, 8, 9];
var arr2 = [14, 2, 13, 43, 23, 6, 7, 8, 9];


// Удаление одинаковых элементов и вывод массива arr1 без них (чистый JS)
    // function filterNew(arr1, arr2) {
    //     for (var i = 0; i < arr1.length; i++) {
    //         for (var j = 0; j < arr2.length; j++) {
    //             if (arr1[i] == arr2[j]) {
    //                 arr1.splice(i--, 1);
    //             }
    //         }
    //     }
    // }

console.log(arr1);
console.log(arr2);

var arr = _.difference(arr1, arr2);
console.log(arr);

})();