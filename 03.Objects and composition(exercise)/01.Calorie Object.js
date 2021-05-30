function kzl(arr){
    let res = {};

    /*arr.forEach((element, index) => {
        result 
    });*/

    for (let i = 0; i < arr.length; i+=2) {
      res[arr[i]] = Number(arr[i + 1])
        
    }
    return res;
}
console.log(kzl(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));