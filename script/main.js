// Descrizione
// Scrivi un programma che stampi i numeri da 1 a 100, ma:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Hint: ricordate l’esistenza dell’operatore modulo: % :wink:
// Nome repo per consegnare l’esercizio: js-fizzbuzz


var listHtml = document.getElementById('number-list');
var lastElement = listHtml.innerHTML;

for (var i = 1; i <= 100; i++) {
  if ( ((i % 3) == false) && ((i % 5) == false) ) {
    console.log('FizzBuzz');
    listHtml.innerHTML = lastElement + ('<li class="condition">FizzBuzz</li>');
    lastElement = listHtml.innerHTML;
  }

  else if ((i % 5) == false) {
    console.log('Buzz');
    listHtml.innerHTML = lastElement + ('<li class="condition">Buzz</li>');
    lastElement = listHtml.innerHTML;
  }

  else if ((i % 3) == false) {
    console.log('Fizz');
    listHtml.innerHTML = lastElement + ('<li class="condition">Fizz</li>');
    lastElement = listHtml.innerHTML;
  }

  else{
    console.log(i);
    listHtml.innerHTML = lastElement + ('<li class="number">' + i + '</li>');
    lastElement = listHtml.innerHTML;
  }
}
