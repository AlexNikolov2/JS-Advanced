function solve(a){
    a = String(a);

    let res = true;
    let sum = 0;
 
    let firstDigit = a[0];
    for (let i = 0; i < a.length; i++) {
        sum += +a[i];
 
        if (a[i] !== firstDigit) {
            res = false;
        }
    }
 
    console.log(res);
    console.log(sum);
}