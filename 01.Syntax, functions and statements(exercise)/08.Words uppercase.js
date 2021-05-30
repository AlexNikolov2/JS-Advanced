function solve(input) {
    let separators = [', ', ' ', '\\+', '-', ':', '\\.' , '\\?',
                      '\\*', '\\', '/', '!', '@', '#', '$', '%',
                      '\\^', '&', '\\(', '\\)', '=', '\\|', '`', 
                      '~', ';', '\'', '"', '[', ']', '{', '}']
    let finalArr = [];
    input.split(new RegExp(separators.join('|'), 'g'))
        .forEach((txt) => {
            if (txt === '') return;
            finalArr.push(txt.toUpperCase());
        });
    console.log(finalArr.join(', '));
}
solve('hello, how r u')