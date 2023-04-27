// calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// variabili globali
let messaggio;

// richiesta numero chilometri da percorrere
let kmPercorrere = prompt ("Quanti chilometri vuole percorrere?");
console.log("km da percorrere = ", kmPercorrere);

// richiesta età passeggero
let eta = prompt ("Quanti anni hai?");
console.log("età = ", eta);

// calcolo prezzo biglietto (prezzoBase) (0.21€ prezzo X1 Km)
let prezzoBase = kmPercorrere * 0.21;
console.log(prezzoBase);

// sconto del 20% per i minorenni
let prezzoMinorenni = prezzoBase - (prezzoBase * 20 / 100);
console.log("Prezzo minorenni = ", prezzoMinorenni);

// del 40% per gli over 65
let prezzoOver65 = prezzoBase - (prezzoBase * 40 / 100);
console.log("Prezzo over65 = ", prezzoOver65)


if (eta < 18){ // se è minorenne
    messaggio = prezzoMinorenni;
} else if (eta >= 65) { // se è over 65
    messaggio = prezzoOver65;
} else { // ALTRIMENTI
    messaggio = prezzoBase;
}

//output
document.getElementById("mio-id").innerHTML = "Il prezzo del tuo biglietto è " + messaggio.toFixed(2) + "€";