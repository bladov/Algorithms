//https://www.codewars.com/kata/reverse-or-rotate

//revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"

const revrot = (str, sz) => {
    let sliceArr = [];
    let initialArr = str.split('');
    let result = [];

    while (sz <= initialArr.length){
        sliceArr.push(initialArr.slice(0, sz));
        initialArr.splice(0, sz);
    }


    sliceArr.forEach(fragment => {
        if (fragment.reduce((prev, number) => {
            return prev + Math.pow(number, 3);
        }, 0) % 2) {
            result.push(fragment.slice(1), fragment.slice(0, 1))
        } else {
            result.push(fragment.reverse())
        }
    })

    return result.flat().join('');
}
console.time('first');
revrot("664438769", 8);
console.timeEnd('first');
