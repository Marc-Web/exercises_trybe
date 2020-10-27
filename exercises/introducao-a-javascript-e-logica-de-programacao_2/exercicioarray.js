let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*for (let num = 0; num<numbers.length; num++) {
    console.log(numbers[num]);


let total = 0;
for (let indice = 0; indice < numbers.length; indice++) {
    total += numbers[indice];
} 
console.log(total);*/

function somar () {
    let soma = 0
    for (let indice in numbers) {
        soma += numbers[indice]
    }
} 
console.log (soma);