'use strict';

// Funzione per controllare se è palindroma
function isPalindrome(parola) {
  const parolaRovesciata = parola.split("").reverse().join("");
  if (parola === parolaRovesciata) {
    return "è una parola palindroma";
  } else {
    return "non è una parola palindroma";
  }
}

// Chiedi all'utente e mostra risultato
const parolaUtente = prompt("Inserisci una parola:");
console.log(isPalindrome(parolaUtente));