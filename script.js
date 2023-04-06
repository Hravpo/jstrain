'use strict';


var leftBorderWidth = 1; //var говорит о том, что сейчас будет переменная
let second = 2; // перемнная "let" создается только тогда, когда до нее доходит код(используют для ускорения кода )
const pi = 3.14;

let persone = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(persone.name)
console.log(persone['name'])

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr['1']);

/* alert ("Awesome balls"); */

/* let answer = confirm("Are your age is 18?")

console.log(answer); */

let answer = +prompt("Are your age is 18?", "Да");

console.log(typeof(answer));

console.log("arr" + " - object");
console.log(4 + +" - object");

/* let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--); */

console.log("2" == 2);
let value = 10;

let isChecked = false,
    isClosed = false;

console.log(isChecked || !isClosed);