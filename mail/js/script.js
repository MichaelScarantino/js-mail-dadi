// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Create Array
const mailGroup = [ 'paolo@libero.it', 'maria@libero.it', 'filippo@libero.it', 'francesco@libero.it', 'anna@gmail.com', 'nicola@gmail.com', 'susanna@gmail.com', 'silvia@outlook.com', 'dario@outlook.com', 'luana@outlook.com', 'sara@outlook.com', 'alessandro@outlook.com', 'giovanni@outlook.com' ];

// Ask for the email
let userMail = prompt('Benvenuto, digita la tua mail per verificare la possibilità di accesso all\' area riservata.');

let mailFound = false;
// Scroll through the Array 
for( i = 0; i < mailGroup.length; i++ ) {
    const thisMail = mailGroup[i];
    // compare if it's in the Array
    if( userMail === thisMail ) {
        mailFound = true;
    }
}

// Printe the message
if (mailFound) {
    alert( 'La sua mail è abilitata ad accedere all\' area riservata.' );
} else {
    alert('Spiacente, la sua mail non risulta presente nell\' archivio e dunque non abilitata all\' accesso.');
}