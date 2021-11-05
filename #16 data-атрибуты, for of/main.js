
//перегляд вузлів відштовхуючись від батька

// console.log(document.body); // -> body
//console.log(document.documentElement); // -> HTML
//console.log(document.body.childNodes); // -> структура вузлів body
//console.log(document.body.firstChild); // -> перший вузол body
//console.log(document.body.firstElementChild);
//->виклик першої дитини(елемента) body, а Node
//console.log(document.body.lastChild);// -> останній вузол  body
//console.log(document.body.lastElementChild);
//->виклик останньої дитини(елемента) body, а Node

//перегляд вузлів відштовхуючись від будь-якого елемента

//console.log(document.querySelector('#current').parentNode.parentNode); 
// ->виклик батька елемента(.parentNode) і батька батька(.parentNode.parentNode)
//console.log(document.querySelector('#current').parentElement);
// -> виклик конкретного батька елемента, а Node
//console.log(document.querySelector('[data-current="3"]').nextSibling);
//-> виклик наступного сусіда через data-
//console.log(document.querySelector('[data-current="3"]').previousSibling);
//-> виклик попереднього сусіда через data-
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// -> виклик наступного елемента, а Node
//console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// -> виклик попереднтого елемента, а Node

for (let node of document.body.childNodes){
  if(node.nodeName == '#text'){
    continue;
  }
  console.log(node);
}
/*
Хочу вивести елементи body, а не вузли(node) типу аналога childNodes, але такого неіснує. Тому застосую цикл
for of в нього є continue і brake, котрі допоможуть попустити текстову node. Переберу всі ноди і виключу тектові.

(let node) це кожна нода котра лежить в середині (document.body.childNodes){
  роблю умову(if) якщо вузол(node) з імям(nodeName), а в коді це(node.nodeName) буде дорівнювати текст('#text'){
    тоді хочу щоб ця ітерація зупинилася, не потрібно виводити в консоль(continue;)
  }
  а інший результат виводжу в консоль console.log(node)
}
*/


