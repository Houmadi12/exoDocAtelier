
let jrsVie = 0;        //Les nombres des jours de vie
let anneeNaiss = 0;    // L'année de naissance
let anneeVie = 0;      //Les nombres d'anné qu'il souhaite vivre
let anneeFinJrs = 0;   //Année où il atteindra cet age
let moisFinJts = 0;    //mois où il atteindra cet age
let jrsFinJrs = 0;     // jours où il atteindra l'age


let age = parseInt(prompt("Saisie ton age :"));

if(age<1) {
    alert('L\'âge saisie n\'est pas raisonnable !');
}else {
      
    let jrsVie = parseInt(prompt("Saisie les jours que tu souhaites vivre :"));

    anneeNaiss = 2024 - age;

    anneeVie = parseInt(jrsVie / 365);

    moisFinJts = parseInt((jrsVie % 365) / 30);

    jrsFinJrs = (jrsVie % 365) % 30;

    anneeFinJrs = anneeNaiss + anneeVie;

    alert('L\'anné dont l\'âge sera atteint est : '+anneeFinJrs+" ans "+moisFinJts+" mois "+jrsFinJrs+" jours");
}

