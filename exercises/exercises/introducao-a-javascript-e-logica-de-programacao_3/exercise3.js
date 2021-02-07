let n = 5;
let linha;
let coluna;
let simbolo = "*";
let linhaInicial = "";
let posicao = n;

for(linha = 0; linha < n; linha += 1) {
    for(coluna = 0; coluna <= n;coluna += 1) {
        if(coluna < posicao) {
            linhaInicial + "";
        } else {
            linhaInicial = linhaInicial + simbolo;
        }
    }
    console.log(linhaInicial);
    linhaInicial = "";
    posicao -= 1;
}