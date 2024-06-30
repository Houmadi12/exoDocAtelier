

let nbr = parseInt(prompt("Saisie un nombre :"));
let test = 0;
let tab = [];

function nbrPremier(nombre){
    if (nombre < 2) {
        alert("Le nombre ne doit pas être inférieur à 2")
    } else {
        let i;
        let j;
        for ( j = 1; j < nombre; j++) {
            for ( i = 1; i <= j; i++) {
                if (j % i === 0) {
                    test++;
                }
            }
        
            if(test === 2){
                tab.push(j);
            }
            test = 0;
        }
    }

    return tab;
}

nbrPremier(nbr);

// Affiche du tableau
document.write("Tableau des nombre premier inférieur à "+nbr+"<br><br>")
for(let i=0; i<tab.length; i++){
    document.write("tab ["+i+"] = "+tab[i]+"<br>");
}