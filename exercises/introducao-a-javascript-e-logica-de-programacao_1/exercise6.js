let pecaDeXadrez = "Bispo";

    switch (pecaDeXadrez.toLowerCase()) {
        case "Rei":
            console.log("Rei - uma casa para qualquer direção.");
            break;
        case "Bispo":
            console.log("Bispo - diagonal.");
            break;
        case "Rainha" :
            console.log("Rainha - diagonal e horizontal.");
            break;
        case "Cavalo" :
            console.log("Cavalo - L, pode pular sobre as peças.");
            break;
        case "Peão" :
            console.log("Peão - apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
            break;
        case "Torre" :
            console.log("Torre - horizontal.");
            break;
        default:
            console.log("Erro, peça inválida.");
            break;
    }
