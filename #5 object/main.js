'use strict';

//const obj = new Object(); -> bad practice

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function(){
    console.log('Test');
  }
};
options.makeTest();

const{border, bg} = options.colors; // -> приклад деструктуризації
console.log(border);

//console.log(Object.keys(options).length);//-> good practice loop over array

//console.log(options['colors']['border']);

//console.log(options.name);

//delete options.name;  // -> delete object property
//console.log(options);

/* --> bad practice loop over array
let counter = 0;
for(let key in options){ //-> the loop (for in) is suitable for the object
  if(typeof(options[key]) === 'object'){
    for(let i in options[key]){
    console.log(`property ${i} has values ${options[key][i]}`);
    counter++;
    }
  }else{
    console.log(`property ${key} has values ${options[key]}`);
    counter++;
  }
}
console.log(counter)
*/









