let nbr1 = parseInt(prompt("Saisie le premier nombre !"));
let nbr2 = parseInt(prompt("Saise le deuxieme nombre !"));

if(nbr1 < nbr2){
    alert("Le premier nombre est plus petit !");
}else if(nbr1 > nbr2){
    alert("Le premier nombre est plus grand !");
} else {
    alert("Le premier nombre est égal au deuxième nombre");
}