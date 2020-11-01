let aliquotaInss;
let aliquotaIr;

let salarioBruto = 3500.00;

if(salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if(salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if(salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
}

let salariobase = salarioBruto - aliquotaInss;

if(salariobase <= 1903.98) {
    aliquotaIr = 0;
} else if(salariobase <= 2826.65) {
    aliquotaIr = salariobase * 0.075 - 142.80;
} else if(salariobase <= 3751.05) {
    aliquotaIr = salariobase * 0.15 - 354.80;
} else if(salariobase <= 4664.68) {
    aliquotaIr = salariobase * 0.225 - 663.13;
} else {
    aliquotaIr = salariobase * 0.275 - 869.36;
}
console.log("Salário " + (salariobase - aliquotaIr));