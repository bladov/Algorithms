//https://www.codewars.com/kata/multiples-of-3-or-5
//10  3 5 6 9


const solution = (number) => {
    let chek = 1;
    let multiplesArray = [];

    while (chek < number) {
        if ((chek % 3) && (chek % 5)) {
            chek++;
            continue;
        }
        multiplesArray.push(chek)
        chek++;
    }

    return multiplesArray.reduce((prev, number) => prev + number, 0);
}

console.log(solution(15))
