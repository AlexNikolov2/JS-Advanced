function solve(arr) {
    let result = arr.map((line) => {(line.split(' | '))})
    .reduce((storage, cars) =>{
        let [brand, model, quantity] = cars;
        if(!storage[brand]){
            storage[brand] ={};
        }
        if(storage[brand][model]){
            storage[brand][model] = 0
        }
        storage[brand][model] += Number(quanntity);
        return storage
    },{})

    return result
}