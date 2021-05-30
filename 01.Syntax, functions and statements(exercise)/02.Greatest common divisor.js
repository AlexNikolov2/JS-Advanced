function solve(a,b){
    a = Math.abs(a);
    b = Math.abs(b);
    let t;
    while(b) {
      t = b;
      b = a % b;
      a = t;
    }
    console.log(t);
}
solve(2154, 458)