//https://www.codewars.com/kata/unlucky-days

const unluckyDays = (year) => {
    let unluckyFridays = 0;

    for (let i = 0; i < 12; i++) {
        let selectDate = new Date(year, i, 13);
        if (selectDate.getDay() == 5) unluckyFridays++
    }
    return unluckyFridays
}

console.log(unluckyDays(2010))

