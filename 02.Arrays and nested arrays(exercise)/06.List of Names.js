function kzl(arr){

    let sorted = arr.sort((a,b) => a.localeCompare(b));

    for (const index in sorted) {
        console.log(`${Number(index) + 1}.${sorted[index]}`);
            
        }
    }
kzl(["John", "Bob", "Christina", "Ema"])