let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let indice = 0; indice < numeros.length; indice += 1) {
    soma += numeros [indice];
}

let media = soma / numeros.length;
console.log(media);
