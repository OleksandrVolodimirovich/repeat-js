'use strict';

const arr = [1, 2, 3, 6, 8];
arr.sort();// ->сорту
console.log();

function compareNum(a, b){
  return a - b;
}

//спочатку виконується forEach, а потім ф-ції callback(function(item, i, arr))
arr.forEach(function(item, i, arr){ //item -> елементи всередині масиву,
                                    // і -> лічильник,номер попорядку
                                    //arr -> ссилка на масив, який перебеераємо
  console.log(`№${i}:цифра ${item} всередині масиву ${arr}`);
});

//console.log(arr.length)// -> показує к-сть елементів по порядку. До останнього додає +1

/*methods array
arr.pop(); // -> delete LAST element
arr.push();// -> add an element to the END of the array
arr.shift();// -> delete FIRST element (used rarely)
arr.unshift();// -> add an element to the START of the array (used rarely)
*/

for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}

for(let item of arr){ //циклом for of можна перебрати: масив(array), стрічку(string), 
                      //псевдомасив(pseudo-array), Map і Set
  console.log(item);
}

/*
різниця між циклами forEach і for of тільки в тому, що
в for of можна використовувати break і continue

різниця між масивом і псевдо масивом в тому, що
у псевдо масива немає методів
*/

const str = prompt('', '');
const products = str.split(', ');
//consoole.log(products.join('; '));
