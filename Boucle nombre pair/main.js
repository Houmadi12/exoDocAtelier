
let tab = [];

document.write("Nombre pairs de 0 à 20 (Voir console)");
for(let i=0; i<=20; i++){
   if( (i%2) === 0){
    tab.push(i);
   }
}

console.log(tab);