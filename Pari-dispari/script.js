'use strict';

function numeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}


function somma(num1, num2) {
  // ritorna la somma
  return num1 + num2
}


function isPari(totale) {
  // ritorna "pari" o "dispari"
  if (totale % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}


function vincitoreTurno(sceltaUtente, somma) {
  const risultato = isPari(somma);  // Richiama isPari
  
  if (sceltaUtente === risultato) {
    return "Hai vinto!";
  } else {
    return "Hai perso!";
  }
}


const scelta = prompt("Scegli 'pari' o 'dispari':");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
const numeroPC = numeroRandom();
const totale = somma(numeroUtente, numeroPC);

console.log("Tu hai scelto:", scelta);
console.log("Il tuo numero:", numeroUtente);
console.log("Numero PC:", numeroPC);
console.log("Somma:", totale);
console.log("Risultato:", isPari(totale));
console.log(vincitoreTurno(scelta, totale));