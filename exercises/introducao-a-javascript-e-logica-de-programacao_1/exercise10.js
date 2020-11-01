let custoDoProduto = 200;
let precoDeVenda = 260;

if(custoDoProduto >= 0 && precoDeVenda >= 0) {
    let custoTotal = custoDoProduto * 0.2;
    let lucroTotal = (precoDeVenda - custoTotal);
    console.log(lucroTotal);
} else {
    console.log("Erro, valores negativos não aceitos.");
}