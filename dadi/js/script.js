// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// introduction
alert('Benvenuto al gioco dei dadi, sei pronto a sfidare la sorte?');

// Create one number for User and one for the Computer
// Math.floor((Math.random() * 10) + 1);
const userNumber = Math.floor((Math.random() * 6) + 1);
const computerNumber = Math.floor((Math.random() * 6) + 1);

// Variable for print
let messageNumber = `Il tuo punteggio è : ${userNumber}  Il mio punteggio è : ${computerNumber} `;

// Compare the two numbers, Print who won
if( userNumber > computerNumber ) {
    alert( `    ${messageNumber}
    Congratulazioni! Hai vinto.` );

} else if( userNumber === computerNumber ) {
    alert( `    ${messageNumber}
    Pareggio.. La sorte non ha voluto vincitori nè vinti.` );
    
} else {
    alert( `    ${messageNumber} 
    Mi dispiace! Sta volta ho vinto io.` );
    
}


