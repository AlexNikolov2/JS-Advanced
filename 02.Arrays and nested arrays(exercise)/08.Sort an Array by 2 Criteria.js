function kzl(arr){
    let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\n'));
}
kzl(['test', 
'Deny', 
'omen', 
'Default']
)