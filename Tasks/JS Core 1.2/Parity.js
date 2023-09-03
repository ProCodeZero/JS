// Реализуйте функцию getNumbersByParity, которая принимает массив 
// чисел в качестве первого аргумента и строку "even" или "odd" в 
// качестве второго. Функция должна вернуть новый массив, состоящий 
// из четных чисел, если вторым аргументом было передано "even" и 
// нечетных, если было передано "odd".

// Оба аргумента функции обязательны. Первый обязательно будет массивом, 
// а второй - строкой "even"/"odd".

function getNumbersByParity(arr, str) {
    let newArr = arr.slice(0);
    let returnArr = [];
    if (str == 'even') {
        newArr.forEach(function(value) {
            if (value % 2 == 0) {
                returnArr.push(value);
            }
        });
    }else if (str == 'odd') {
        newArr.forEach(function(value) {
            if (value % 2 != 0) {
                returnArr.push(value);
            }
        });
    }
    return returnArr;
}

console.log(getNumbersByParity([1,2,3,4,5,6,7,8,9], 'even'))