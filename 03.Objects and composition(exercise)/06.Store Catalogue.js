function solve(input) {
    let dict = {};

    for (const line of input) {
        let[name,price] = line.split(' : ');
        const firstletter = name[0];
        if(!dict[firstletter]){
            dict[firstletter] = [];
        }


        dict[firstletter].push({name,price: Number(price)});

        dict[firstletter].sort((a,b) => (a.name).localeCompare(b.name));
    
    }

    let result = [];
    /*for (const letter in dict) {
        let values = dict[letter].map(entry => `  ${entry.name}: ${entry.price}`)
        let string = `${letter}\n${values.join('\n')}`
        result.push(string)
    }
    return result.join('\n')*/

    Object.entries(dict).sort((a,b) => a[0].localeCompare(b[0])).forEach(entry=>{
        let values = entry[1].sort((a,b) => (a.name).localeCompare(b.name)).map(product =>`  ${product.name}: ${product.price}`).join('\n')
        let string = `${entry[0]}\n ${values}`
        result.push(string)
    })

    return result.join('\n')
}