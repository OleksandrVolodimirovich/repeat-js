'use strict';
const box = document.getElementById('box'),
      btn = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle');
      //hearts = document.querySelectorAll('.heart'),
      //oneHarts = document.querySelector('.heart'),
      //wrapper = document.querySelector('.wrapper');
      

//Для отримання класу в середині блоку можна написати так
const wrapper = document.querySelector('.wrapper'),
//а тепер можна використати wrapper, а не document. Тобто елементи будуть шукатися тільки в блоці, а не в документі
      hearts = wrapper.querySelectorAll('.heart'),
      oneHarts = wrapper.querySelector('.heart');


box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: #BCCC9A; width: 500px';
/*//код для динамічної зміни даних
let color = '#FF8243';
let width = '700';
box.style.cssText = `background-color: ${color}; width: ${width}px`;
*/

btn[2].style.borderRadius = '0px';

circle[1].style.backgroundColor = 'red';

/* заміна кольору для всіх елементів
for (let i = 0; i < hearts.length; i++){
  hearts[i].style.backgroundColor = 'blue';
}
*/
//заміна кольору для всіх елементів(best practics)
hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

//const div = document.createElement('div');//створений елемент знаходиться в JS
//const text = document.createTextNode('Рідко використовується');

//div.classList.add('black');//до створеного div додаю клас, який наперед створений в style

// --new method--
//document.body.append(div); //за основу беру body і задопомогою методу append елемент div вставлю в кінець html
//document.querySelector('.wrapper').append(div);//метод з використанням для вставки елементу в блок через клас 
                                              //без використання змінної
//wrapper.append(div);//метод з використанням для вставки елементу в блок через клас з використанням змінної
//wrapper.prepend(div);//вставляється на початок блоку
//hearts[1].before(div);//вставляється пред вказаним елементом
//hearts[1].after(div);//вставляється після вказаного елемента

//circle[1].remove(); //видаляє елемент

//circle[1].replaceWith(hearts[1]); //заміна елемента

// --old method--
//wrapper.appendChild(div);// аналог append
//wrapper.insertBefore(div, hearts[2]);//використовується замість: prepend, before, after
//wrapper.removeChild(hearts[1]);//видаляє елемент
//document.body.removeChild(circle[1]);//видаляє елемент
//wrapper.replaceChild(circle[1], hearts[1]);//заміна елемента


//добавляння коду або тексту в HTML
const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);

div.innerHTML = '<h1>Where block</h1>'; //вставка HTML-теги
//div.textContent = '<h1>I block</h1>';//вставка текст
div.insertAdjacentHTML('afterend','<h2>I block</h2>');


const blockText = document.createElement('div');
document.body.append(blockText);
blockText.classList.add('inner-text');
blockText.insertAdjacentHTML('afterbegin',
`
<h2>--new method--</h2>
<h1>createElement - <span>сторюється елемент який знаходиться в JS, на сторінці його немає</span></h1>
<h1>add - <span>задопомогою методу можна добавити клас для елемента</span></h1>

<h1>append - <span>робить встаку елемента в кінець блоку</span></h1>
<h1>prepend - <span>робить встаку елемента на початок блоку</span></h1>
<h1>before - <span>робить встаку елемента перед вказаним елементом</span></h1>
<h1>after - <span>робить встаку елемента після вказаного елемента</span></h1> 

<h1>remove() - <span>видаляє повністю елемент з сторінки</span></h1>
<h1>replaceWith() - <span>робить заміну елемента, але елемент котрий заміняється видаляється, а елементт котрий 
                вставляється переміщується на місце елемента котрий заміняється. Першим вказую елемент котрий заміняю, 
                другий на котрий заміняю</span></h1>

<h2>--old method--</h2>
<h1>appendChild() - <span>аналог append(робить встаку елемента в кінець блоку)</span></h1>
<h1>insertBefore(a, b) - <span>робить вставку елемента задопомогою вказаних параметрів, 
                      а - елемент котрий потрібно вставити,
                      b - елемент перед котрим потрібно вставити. Використовується замість: prepend, before, after.
                      </span>
                      </h1> 
<h1>removeChild() - видаляє елемент. Потрібно вказати батька, а потім елемент</h1>
<h1>replaceChild(a, b) - <span>заміна елемента. 
                          а - елемент котрий замінить, 
                          b - елемент на місце котрого встане елемент а.
</span>
</h1>

<h2>--вставка коду або тексту в HTML--</h2>
<h1>innerHTML - <span>це метод задопомогою котрого можна вставити текст, а також HTML-теги. 
                Неможна використовувати для збору даних від користувача, можна ввести скрипт який зруйнує сайт
                </span></h1>
<h1>textContent - <span>метод для вставки тільки тексту. Використовується якщо потрібно від користувача отримати дані.
              </span></h1>

<h1>insertAdjacentHTML( ' a ', ' b ' ) - <span>робить вставку повеноцінного HTML-коду.
                          параметр а - це як хочу вставити:
                              beforebegin - вставка перед елементом;
                              afterbegin - вставка в початок елемета, тобто в сам блок і перед всіма тегами всередині;
                              beforeend - вставка в кінець елемета, тобто в сам блок і після всіх тегів всередині;
                              afterend - вставка після елемента;                        
                          параметр b - це те, що я хочу вставити в розмітку</span></h1>
`);