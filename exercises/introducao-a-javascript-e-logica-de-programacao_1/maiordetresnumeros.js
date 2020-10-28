let num1 = 7
let num2 = 10
let num3 = 19

function max(num1, num2, num3) {

    if(num1 > num2 || num1 > num3)
        console.log(num1);
    
    if(num2 > num1 || num2 > num3)
        console.log(num2);
    
    else console.log(num3);
}        
