
let n = parseInt(prompt("Saisie la taille du tableau"));
let tab = [];
let tabImpair = [];


// Remplissage du tableau
for(let i=0; i<n; i++){
    tab[i]=parseInt(prompt("Donner la valeur [ "+i+" ] du tableau"))

    if( (tab[i]%2) !== 0){
        tabImpair.push(tab[i]);
    }
}

console.log(tabImpair);