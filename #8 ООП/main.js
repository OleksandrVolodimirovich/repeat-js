'use strict';

/*
'fgrger'// ->примітив
'fgrger'.toUpperCase //-> при застосуванні методу це вже обєкт
*/

let str = 'some';
let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const solidier = {
  health: 400,
  armor: 100,
  sayHello: function(){
    console.log('hello');
  }
};

const jonh = Object.create(solidier);//створив новий обєкт Джон, яки прототипно наслідується від solidier

// const jonh = {
//   healh: 100
// };

//jonh.__proto__ = solidier; //-> невикористовуэться __proto__

//console.log(jonh.sayHello);

Object.setPrototypeOf(jonh, solidier);//(1-й аргумент -  обэкт якому я хочу призначити прототип)
                                      //(2-й аргумент - обэкт рпрототип якого я втавляю)
//console.log(jonh.armor);
jonh.sayHello();