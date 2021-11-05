'use strict';

document.addEventListener('DOMContentLoaded', () => { //код запуститься після того коли DOM-стуктура буде завантажена
  
  const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        moveList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        chekbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    const favorite = chekbox.checked;

    movieDB.movies.push(newFilm);
    // movieDB.movies.sort();
    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, moveList);

    event.target.reset();
  });

  const deleteAdv = (arr) =>{
    arr.forEach(item => {
      item.remove();
    });
  };
  
  const makeChanges = () => {
    genre.textContent = 'Драма';
    
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  
  // moveList.innerHTML = '';
  // movieDB.movies.sort();

  // movieDB.movies.forEach((film, i) => {
  //   moveList.innerHTML += `
  //     <li class="promo__interactive-item">${i+1} ${film}
  //       <div class="delete"></div>
  //     </li>
  //   `;
  // });

  const sortArr = (arr) => {
    arr.sort();
  };
  

  function createMovieList(films, parent){
    parent.innerHTML = '';

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
          <div class="delete"></div>
        </li>
      `;
    });
  }

  deleteAdv(adv);
  makeChanges();
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, moveList);

});


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */














