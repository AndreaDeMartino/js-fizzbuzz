// Descrizione
// Scrivi un programma che stampi i numeri da 1 a 100, ma:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz.
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Hint: ricordate l’esistenza dell’operatore modulo: % :wink:
// Nome repo per consegnare l’esercizio: js-fizzbuzz


for (var i = 1; i <= 100; i++) {
  if ( ((i % 3) == false) && ((i % 5) == false) ) {
    console.log('FizzBuzz');
  }

  else if ((i % 5) == false) {
    console.log('Buzz');
  }

  else if ((i % 3) == false) {
    console.log('Fizz');
  }

  else{
    console.log(i);
  }
}
