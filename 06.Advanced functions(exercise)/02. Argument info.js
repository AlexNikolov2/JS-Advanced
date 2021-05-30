function solve(arguments) {
    let result=[];
    for (let i = 0; i <arguments.length; i++) {
        let argument = arguments[i];
        let type = typeof argument;
        console.log(type + ": " + argument);
 
        if (!result[type]) {
            result[type] = 1
        }
        else {
            result[type]++;
        }
    }
    let sortedResult=[];
     for(let current in result){
     sortedResult.push([current,result[current]
    }
    sortedResult.sort(function(a, b) {
        return b[1] - a[1]
        });
 
    for(let current of sortedResult){
        console.log(current[0] + " = " + current[1]);
    }
}