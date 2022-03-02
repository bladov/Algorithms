// https://www.codewars.com/kata/weird-string-case
function toWeirdCase(string){
    let arr = string.split(' ');
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) result += ' ';

        for (let j = 0; j < arr[i].length; j++) {
            if(j % 2 !== 0) {
                result += arr[i][j];
                continue;
            }

            result += arr[i][j].toUpperCase();
        }
    }

    return result;
}

console.log(toWeirdCase("Weird string case"));

// ['Weird', 'string', 'case']

//toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
//
// console.log(0 % 2) // 0
// console.log(2 % 2) // 0
// console.log(4 % 2) // 0
// console.log(3 % 2) // 1