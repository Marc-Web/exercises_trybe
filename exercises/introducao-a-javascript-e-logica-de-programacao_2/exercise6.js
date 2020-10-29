let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(let indice = 0; indice < numeros.length; indice += 1) {
    if(numeros[indice] % 2 !== 0) {
        resultado += 1;
    }
}
if(resultado === 0) {
    console.log("Nenhum valor ímpar encontrado.")
} else {
    console.log(resultado);
}