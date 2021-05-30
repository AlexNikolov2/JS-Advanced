function solve(arr, n){
    let newArr = [];

    for (let index = 0; index < arr.length; index+=n) {
       let element = arr[index];

        newArr.push(element)
    }

    return newArr;
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))