'use strict';

 //To string
// 1) method String
console.log(typeof(String(null))); //string
console.log(typeof(String(4))); //string

//2) method concatenation
console.log(typeof(5 + '')); // string (при обєднанні з стрічкою завжди буде стрічка)

const num = 5;
console.log('http://vk.com/catalog/' + num); //динамічна зміна http з додаванням цифри, тому перетворюється на стрічку

const fontSize = 26 + 'px'; //динамічна зміна fontSize, перетворення в стрічку

//TO Number
// 1)method Number
console.log(typeof(Number('4'))); //number

//2 method унарний +
console.log(typeof(+'5'));

//3 method parseInt
console.log(typeof(parseInt('15px', 10))); //number

let ans = +prompt('Hello', '');

//TO boolean
//0, '', null, undefined, Nan; -> false

// 1)method умова з змінною let
let switcher = null;
if(switcher){
  console.log('Working...');
}
switcher = 1;
if(switcher){
  console.log('Working...');
}

//2) method Boolean
console.log(typeof(Boolean('4')));

//3)method !!(два знака оклику)
console.log(typeof(!!('4444')));