function solve(a,b, operator){
    //The string may be one of the following: '+', '-', '*', '/', '%', '**'.  
    let result;
    switch(operator){
        case '+' : result = a + b;
        break
        case '-' : result = a - b;
        break
        case '/' : result = a / b;
        break
        case '*' : result = a * b;
        break
        case '%' : result = a % b;
        break
        case '**' : result = a ** b;
        break
    }
    console.log(result);
}