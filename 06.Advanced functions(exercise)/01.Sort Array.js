function gay(arr, type){
    const map = {
        'asc': (a,b) => a - b,
        'desc': (a,b) => b - a
    }

    return arr.sort(map[type])
}
console.log(gay([14, 7, 17, 6, 8], 'asc'));