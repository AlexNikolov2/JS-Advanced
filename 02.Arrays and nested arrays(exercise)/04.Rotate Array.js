function kzl(arr,num){

    for(let i=0; i< num; i++){
        let element = arr.pop()
        arr.unshift(element)
    }
    return arr.join(' ')
}