function seseka(arr){
    const object = {};

    for(let string of arr){
        let set = string.split(' <-> ');
        let population = Number(set[1]);
        let townName = set[0];

        if(object[townName] == undefined){
            object[townName] = population
        }
        else{
            object[townName] += population
        }
    }
    for (const key in object) {
        console.log(`${key} : ${object[key]}`);
    }
}
seseka(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',]
)