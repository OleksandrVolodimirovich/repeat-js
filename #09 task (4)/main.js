/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

/*
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilm: function(){
    for(let i = 0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
      
      if(a != null && b != null && a != '' && b != '' && a.length < 50){ //алгебра логіки
        personalMovieDB.movies[a] = b;
        console.log('done!');
      }else{
        console.log('error');
        i--;  //повертає до запитання поки натискається відміна(null)
      }
    }
  },
  detectPersonLevel: function(){
    if(personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10){
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB:function(hidden){
    if(!hidden){
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    }else{
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function(){
    for (let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  }
};
*/
/*
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/
//варіант - 1. 3 завдання
/*
const personalMovieDB = {
  count: 0, //ф-ція стала методом обєкта змінна(numberOfFilms) мені вже не пртрібна, а отже 0
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    //змінну numberOfFilms всюди замінив на властивість обєта personalMovieDB.count
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilm: function(){ //ф-цію зробив методом обєта
    for(let i = 0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
      
      if(a != null && b != null && a != '' && b != '' && a.length < 50){ //алгебра логіки
        personalMovieDB.movies[a] = b;
        console.log('done!');
      }else{
        console.log('error');
        i--;  //повертає до запитання поки натискається відміна(null)
      }
    }
  },
  detectPersonLevel: function(){ //ф-цію зробив методом обєта
    if(personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10){
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB:function(hidden){ //ф-цію зробив методом обєта
    if(!hidden){
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function(){ //ф-ція переключення privat
    if(personalMovieDB.privat){ //якщо privat втановлено
      personalMovieDB.privat = false;  //тоді виключити
    }else{  //або інше
      personalMovieDB.privat = true; //включити
    }
  },
  writeYourGenres: function(){
    for (let i = 1; i <= 3; i++){
      let genre = prompt('Ваш любимый жанр под номером ${i}'); 
      
      if(genre === '' || genre === null){ // якщо натиснули ок або відмінна
        console.log('enter your data'); //тоді виводиться повідомлення
        i--; // і пробимо відкат на одне повторення назад для повторення питання
      }else{
        personalMovieDB.genres[i - 1] = genre; //якщо все добре тоді вносимо дані в масив жанрів
      }      
    } 
    // беру обєкт personalMovieDB звертаюся до масиву жанрів .genres і запускаємо метод .forEach а всередині потрібно
    // запустити callback ф-цію
    personalMovieDB.genres.forEach((item, i) => { //аргумент item - кожен елемент масиву, і - номер по порядку
      console.log(`Любимый жанр ${i + 1} - это ${item}`); //для виводу використовую інтерполяцію
    });
  }
};
*/
//варіант - 2. 3 завдання
const personalMovieDB = {
  count: 0, //ф-ція стала методом обєкта змінна(numberOfFilms) мені вже не пртрібна, а отже 0
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    //змінну numberOfFilms всюди замінив на властивість обєта personalMovieDB.count
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilm: function(){ //ф-цію зробив методом обєта
    for(let i = 0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
      
      if(a != null && b != null && a != '' && b != '' && a.length < 50){ //алгебра логіки
        personalMovieDB.movies[a] = b;
        console.log('done!');
      }else{
        console.log('error');
        i--;  //повертає до запитання поки натискається відміна(null)
      }
    }
  },
  detectPersonLevel: function(){ //ф-цію зробив методом обєта
    if(personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10){
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB:function(hidden){ //ф-цію зробив методом обєта
    if(!hidden){
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function(){ //ф-цію зробив методом обєта
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    }else{
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function(){
    //так,як дані вводяться через кому мені потрібно зробити так, щоб цикл виконувався один раз але якщо користувач не
    //введе дані потрібно зробити відкат на одну ітерацію назад, а для цього задам умову
    //відлік починаю з одиниці, а тому к-сть запусків роблю менше 2(для того щоб можна було зробити відкат на один крок 
    //назад). Тобто виконнання циклу один раз
    for (let i = 1; i < 2; i++){
      let genres = prompt(`Ваш любимый жанр через кому`); //питання як задається користувачу
      
      if(genres === '' || genres === null){ //провірка на натискання ОК||NO без даних
        console.log('некоректні дані');
        i--;
      }else{
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }  
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};


