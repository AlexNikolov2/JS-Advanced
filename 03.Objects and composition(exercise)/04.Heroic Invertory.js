function liteks(arr){
    let result = [];

    for (const hero of arr) {
        let [name, level, itemsString] = hero.split(' / ');
        level = Number(level);
        const items = items
        
        result.push({name,level,items})
    }

    result = JSON.stringify(result);

    console.log(result);
}
liteks(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)