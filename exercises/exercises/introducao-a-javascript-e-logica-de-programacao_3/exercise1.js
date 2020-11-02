let n = 5;
let linha;
let simbolo ="*";
let linhaInicial = "";

for(linha = 0; linha < n; linha += 1) {
    linhaInicial = linhaInicial + simbolo;
}
for(linha = 0; linha < n; linha += 1) {
    console.log(linhaInicial);
}