//https://www.codewars.com/kata/the-coupon-code
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    const months = {
        'December' : '01',
        'January' : '02',
        'February' : '03',
        'March' : '04',
        'April' : '05',
        'May' : '06',
        'June' : '07',
        'July' : '08',
        'August' : '09',
        'September' : '10',
        'October' : '11',
        'November' : '12',
    }
    let convertCurrentDate = currentDate.split(' ');
    let validResult = `${convertCurrentDate[2]}-${months[convertCurrentDate[0]]}-${convertCurrentDate[1].slice(0,1)}`
    let validResultDate = new Date(validResult);

    let convertExpirationDate = expirationDate.split(' ');
    let currentResult = `${convertExpirationDate[2]}-${months[convertExpirationDate[0]]}-${convertExpirationDate[1].slice(0,1)}`
    let currentResultDate = new Date(currentResult);

    if (enteredCode === correctCode && validResultDate - currentResultDate <= 0) {
        return true
    } else {
        return false
    }
}


// let date  = new Date("2017-02-26");
// let date2 = new Date("2017-02-26");
// console.log(date - date2)

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));