//https://www.codewars.com/kata/duplicate-encoder

const duplicateEncode = (word) => {
    let arr = word.toLowerCase().split('');
    let obj = {};
    let result = [];

    arr.forEach(item => obj[item] ? obj[item] += 1 : obj[item] = 1 );
    arr.forEach(item => {
        if (obj[item] > 1) {
            result.push(')')
        } else {
            result.push('(')
        }
    })

    return result.join('');
}

console.log(duplicateEncode("(( @" ))