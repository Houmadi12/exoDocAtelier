
let n = parseInt(prompt("Donner la taille des tableau"));

let tab1 = [n];
let tab2 = [n];
let somTab = [] ;

// Remplissage des deux tableau
function remplieTab(tab_a, tab_b){
    for(i=0; i<n; i++){
        tab_a[i] = parseInt(prompt("Saisie la valeur "+(i+1)+" du tableau 1"));
        tab_b[i] = parseInt(prompt("Saisie la valeur "+(i+1)+" du tableau 2"));
    }
}

remplieTab(tab1,tab2)


// Addition de chaque élément du tableau et remplissage de 3eme tableau
function sommeTab(tabl1,tabl2){
    for(let i=0; i<tabl1.length; i++){
        somTab.push(tabl1[i]+tabl2[i]);
    }
    
    return somTab;
}

somTab = sommeTab(tab1,tab2);

// Affichage des tableau
// --> Tableau 1
document.write("Tableau 1 "+"<br>")
for(i=0; i<tab1.length; i++){
    document.write("Tab1["+i+"] = "+tab1[i]+"<br>")
}

//--> Tableau 2
document.write("<br>"+"Tableau 2"+"<br>")
for(i=0; i<tab2.length; i++){
    document.write("Tab2["+i+"] = "+tab2[i]+"<br>")
}

// --> Tableau somme
document.write("<br>"+"La somme de deux tableaux"+"<br>");
for(let i=0; i<somTab.length; i++){
   document.write("somTab["+i+"] = "+somTab[i]+"<br>")
}
console.log(somTab.length);