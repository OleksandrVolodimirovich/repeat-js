const btn = document.querySelector('button'),
overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//   alert('click');
// };

// btn.onclick = function(){
//   alert('second click');
// };


//! подія клік
// btn.addEventListener('click', () =>{ 
//   alert('cluck');
// });
// btn.addEventListener('click', () =>{
//   alert('second click');
// });

//! подія наведення стрілки мишки
/*
btn.addEventListener('mouseenter', (event) => {
  //console.log(event.target);
  event.target.remove(); //видаляє елемент при наведенні
  //console.log('cluck');
});
*/
/*
btn.addEventListener('click', (event) => {
  event.target.remove();//видаляє елемент при кліку
});
*/

let i = 0;//лічильник

const deletElem = (e) => {
  console.log(e.target);
  console.log(e.type);
  // i++;
  // if(i == 1){
  //   btn.removeEventListener('click', deletElem);//видаляє функцію по кліку
  // }
};
//btn.addEventListener('click', deletElem); //запускає функцію по кліку
//overlay.addEventListener('click', deletElem);

const link = document.querySelector('a');

link.addEventListener('click', function(event){
  event.preventDefault();
  console.log(event.target);
});


//назначаю обробник подій на кожну кнопку
const btnAll = document.querySelectorAll('button');

const btns = (e) => {
  console.log(e.target);
  console.log(e.type);
};

btnAll.forEach(btnAll => {
  btnAll.addEventListener('click', btns, {once: true});
});

//синтаксис обробника подій і його аргументи
//target.addEventListener(type(тип події н-д:клік), listener(обробник події н-д:function(event) ), options(необовязково Н-д: once))

btnAll.forEach(btnAll => {
  btnAll.addEventListener('click', btns, {once: true});
});
