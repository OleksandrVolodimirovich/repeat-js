'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');//при використанні getElementsByTagName для одного елемента 
//на сторінці, він всерівно буде виводитися як колекція. Отже щоб зробити якусь дію з елементом у масиві потрібно
//звернутися до нього через індекс btns[1].
const circles = document.getElementsByClassName('circle'); // отримаю колекцію так само як і у 
//метода getElementsByTagName, аналогічно
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btns[1]);//отримаю з колекції одну кнопку під індексом 1
console.log(circles);
console.log(hearts);
hearts.forEach(item =>{
  console.log(item);
});
console.log(oneHeart);