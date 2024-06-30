
let lettre = prompt('Saisie une lettre !').toUpperCase();

if(lettre.length > 1){
   
    alert('Tu n\'as pas saisie une lettre !');

} else {

    if ( lettre >= 'A' && lettre <= 'Z'){

       if(lettre === 'A' || lettre === 'E' || lettre === 'I' || lettre === 'O' || lettre === 'U' || lettre === 'Y'){

        alert ('La lettre saisie est une voyelle');

       } else {

        alert ('La lettre saisie est une consonne');

       }
    } else {

        alert ('Le caractére saisie n\'est pas une lettre');
        
    }

}