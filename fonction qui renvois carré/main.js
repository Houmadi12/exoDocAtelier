
let tab = [];
let tabCarré = [];
let n = parseInt(prompt("Saisie la taille du tableau :"));

// Remplissage de premiére tableau
for(let i=0; i<n; i++){
    tab[i] = parseInt(prompt("Saisie la valeur "+(i+1)+" eme de tableau"))
}

// Remplissage de deuxieme tableau 2
for(let j=0; j<tab.length; j++){
    tabCarré[j] = tab[j]*tab[j];
}


// Affichage des tableaux
document.write("Premier tableau"+"<br>");
for(let i=0; i<tab.length; i++){
    document.write("Tab [ "+i+" ] = "+tab[i]+" <br>");
}

document.write("<br><br>"+"Dexieme tableau"+"<br>");
for(let i=0; i<tabCarré.length; i++){
    document.write("Tab [ "+i+" ] = "+tabCarré[i]+" <br>");
}


