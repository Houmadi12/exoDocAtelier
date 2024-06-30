
let tab = [];
let tab1 = [];
let n = parseInt(prompt('Donner la taille du tableau !'));

// Saisie de tableau
for(let i=0; i<n; i++){
    tab[i] = prompt("Saisie une chaine de caractère");
}

//Remplissage du tab2
for(let i=0; i<tab.length; i++){
    tab1[i] = tab[i].length;
}

// Affichage de premier tableau
document.write("Tableau 1 : "+"<br>");
for(let i=0; i<tab.length; i++){
    document.write("tab [ "+(i+1)+"] = "+tab[i]+"<br>");
}

// Affichage de deuxieme tableau
document.write("<br>"+"Tableau 1 : "+"<br>");
for(let i=0; i<tab1.length; i++){
    document.write("tab [ "+(i+1)+"] = "+tab1[i]+"<br>");
}