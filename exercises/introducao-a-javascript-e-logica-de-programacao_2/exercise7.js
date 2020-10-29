let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 100;

for(let indice = 0; indice < numeros.length; indice += 1) {
    if(numeros[indice] < menorNumero) {
        menorNumero = numeros[indice];
    }
}
console.log(menorNumero);