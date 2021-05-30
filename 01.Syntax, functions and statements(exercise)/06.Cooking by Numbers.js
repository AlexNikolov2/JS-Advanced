function solve(...input){
    let num = input.shift();
    for (const command of input) {
        switch (command) {
            case 'chop':num/=2;break;
            case 'dice':num=Math.sqrt(num);break;
            case 'spice':num++;break;
            case 'bake':num*=3;break;
            case 'fillet':num*=0.8;break;
       }
       console.log(num);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')