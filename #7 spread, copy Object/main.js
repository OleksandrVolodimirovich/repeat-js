'use strict';

let a = 5,
    b = a; //змінній присвоєти змінну можна тільки в примітивних типах 
b = b + 5;
console.log(b); //10
console.log(a); //5

/*
const obj = {
  a: 5,
  b: 1
};

const copy = obj; //обє"кту не можна присвоїти інший обєкт, об"єкт робить копію об"єкту сурез Ссилку
copy.a = 10; //при змінні значення в скопійованому об"єкті, зміни відпуваються в оригінальному об"єкті

console.log(obj);
console.log(copy);
*/

//варіант-1
function copy(mainObj){ //повноцінна копія об'єкта задопомогою циклу
  let objCopy = {}; //пустий об'єкт

  let key;
  for(key in mainObj){  // цикл
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
const numbers = { //оригінальний об'єкт
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};
const newNumbers = copy(numbers); //копія об'єкту

newNumbers.a = 10; //нове значення в копії об'єкту
newNumbers.c.x = 10; //так, як це поверхнева(а не глибока копія) копія об'єкту, дані вложених об'єктів змінити неможна 

//console.log(newNumbers);
//console.log(numbers);

//варіант-2
const add = {
  d: 17,
  e: 20
};
console.log(Object.assign(numbers, add));//задопомогою цього методу об"єднуються обєкти
//{ a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

//копія задопомогою Object.assign
const clone = Object.assign({}, add); //в пустий обэкт поміщаємо копію обєкту
clone.d = 20; //заміна значчення в копії обєкта
console.log(add);
console.log(clone);

//варіант-3 поверхнева копія масиву
const oldArray = ['a', 'b', 'c'];//оригінальний масив
const newArray = oldArray.slice();//копія цілого масиву

newArray[1] = 'abracadabra';//заміна значення в копії

console.log(oldArray);
console.log(newArray);

//варіант-4 оператор розвороту Spred
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [... video, ...blogs, 'vk', 'facebook'];
console.log(internet);
//['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']

function log(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const spredArray = [...array];
const q = {
  one: 1,
  two: 2
};
const newObj = {...q};
console.log(newObj);

