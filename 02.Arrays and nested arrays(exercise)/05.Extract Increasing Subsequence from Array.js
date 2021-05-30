function kzl(arr){
    let newArr = [];
    newArr.push(arr[0])
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let nextElement = arr[i + 1]
        
        if(nextElement > element){
            newArr.push(nextElement)
        }
    }

    return newArr

}
kzl([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )