function solve(arr){
    let newArr = [];

    for (let index = 0; index < arr.length; index+=2) {
            newArr.push(arr[index]);    
    }

    console.log(newArr.join(' '));
}
solve(['20', '30', '40', '50', '60'])