//https://www.codewars.com/kata/digits-explosion

const explode = (s) => {
    let result = [];

    s.split('').forEach(number => {
        let chek = 0;
        while (chek < number) {
            result.push(number);
            chek++;
        }
    })

    return result.join('');
}

console.log(explode('104'));