let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(let indice = 0; indice < numeros.length; indice += 1) {
    if(numeros[indice] > maiorNumero) {
        maiorNumero = numeros[indice];
    } 
}
console.log(maiorNumero);