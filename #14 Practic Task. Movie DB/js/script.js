/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const moveList = document.querySelector('.promo__interactive-list');

// first task
promo.forEach(item => {
  item.remove();
});

// second task
// const div = document.createElement('div');
// div.classList.add('promo__genre');
// div.textContent = 'Драма';
// genre.replaceWith(div);
genre.textContent = 'Драма';

//three task
bg.style.backgroundImage = 'url("img/bg.jpg")';

//four task
moveList.innerHTML = '';
movieDB.movies.sort();

//five task
movieDB.movies.forEach((film, i) => {
  moveList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
      <div class="delete"></div>
    </li>
  `;
});

