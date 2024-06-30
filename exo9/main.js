let nbr = parseInt(prompt("Saisie un nombre :"));
let fact = 1;

for (let i=1; i<=nbr; i++){
    fact *= i; 
}

alert("La factoriel de "+nbr+" est : "+fact);