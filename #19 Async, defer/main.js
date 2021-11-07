'use strict';

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src){
  const script = document.createElement('script');
  script.src = src;
  script.async = false; //якщо async закоментувати тоді порядку завантаження не буде,  
                        //а спочатку буде йти менший файл за розміром тобто other.js
  document.body.append(script);
}
loadScript('test.js');
loadScript('other.js');