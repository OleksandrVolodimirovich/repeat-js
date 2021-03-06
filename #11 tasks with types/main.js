'use strict';
// 1.Какое будет выведено значение: 
let x = 5; 
alert( x++ ); //5
//alert( ++x ); //6

// 2.Чему равно такое выражение: 
console.log([ ] + false - null + true); //NaN
// пустий масив завжди переводиться в пусту стрічку "", тобто ([ ] + false) буде ("" + false) = "false"
//([ ] + false - null) це ("false" - null) дорівнює NaN

// 3.Что выведет этот код: 
let y = 1; 
//let g = y = 2; 
//alert(g); //2

// 4.Чему равна сумма 
console.log([ ] + 1 + 2);//"12"
//([ ] + 1 + 2) перетворюється ("" + 1 + 2) = "12"

// 5.Что выведет этот код: 
alert( "1"[0] );//1
//це стрічка одиниця з нульовим індексом, тобто в стрічці можна звернутися до кожного елемента масив індексу 

// 6.Чему равно 
console.log(2 && 1 && null && 0 && undefined); //null
//логічний оператор && -> хоче щоб зліва і зправа умови були правдиві, але завжди спиняється на брехні(false)
//2(true) && 1(true) && null(false) -> на цьому місці && отримав false і видає те значення, яке перше видало брехню
//тобто це null. А дальше код ігнорується(ніби спрацював return).

// 7.Есть ли разница между выражениями? 
//console.log(!!( 1 && 2 ) === (1 && 2));//false
//видає брехню тому,що !! -> оператор перетворює у Boolean тип, а тому інші типи неможуть бути рівними буліан

// 8.Что выведет этот код: 
alert( null || 2 && 3 || 4 );//3
//для цієї задачі потрібно дивитися в таблицю приорітетеності операторів
//по таблиці першим йде оператор && (2 && 3) так,як 2 і 3 рівні по типу значить виводиться останній елемент
//2 && 3 -> 3
//дальше йде ліва частина  (null || 3), а так як || -> завжди спиняється на правді буде 3, тобто null(брехня), 
//а 3(правда)
//null || 3 -> 3
//дальше права частина (3 || 4) так, як 3(true) програма зупинилася

//Правда ли что a == b ?
//a = [1, 2, 3]; 
//b = [1, 2, 3]; 
//console.log(a == b);//false
//a,b -> це контейнепи в яких зберігається різна інфа, а отже не є рівними

// 9.Что выведет этот код: 
alert( +"Infinity"); //Number
//але перед Infinity стоїть унарний (+), а отже тип буде Number

// 10.Верно ли сравнение: 
console.log("Ёжик" > "яблоко");
//для цієї задачі потрібно дивитися в таблицю Юнікод

// 11.Чему равно 
///console.log(0 || "" || 2 || undefined || true || falsе);//2
// (||) - спиняється на правді
// 0(брехня) ""(брехня) 2(правда) дальше ігнорується