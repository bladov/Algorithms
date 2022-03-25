//https://www.codewars.com/kata/javascript-mathematician

const calculate = (...args1) => {
    return (...args2) => {
        let splitArr = args1.concat(args2);
        return splitArr.reduce((prev, number) => prev +number , 0)
    }
}

console.log(multiply(3))