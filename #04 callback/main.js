'use strict';

function first(){
  // Do something
  setTimeout(function(){
    console.log(1);
  }, 500);
}

function second(){
  console.log(2);
}

first();
second();


function learnJS(lang, callback){
  console.log(`I lern: ${lang}`);
  callback();
}

function done(){
  console.log('finish');
}
learnJS('JavaScript', done);
