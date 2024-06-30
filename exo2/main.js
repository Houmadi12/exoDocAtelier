let age = parseInt(prompt("Saise votre âge !"));

if(age <= 0) {
    alert('Salut ! l\'âge saisie n\'est pas valable !');
}else if(age < 19){
    alert('Salut ! t\'es mineur ! ');
} else if( age >= 19 && age < 40) {
    alert('Salut t\' est majeur ! ');
} else {
    alert('Salut ! vous êtes senior ! ');
}