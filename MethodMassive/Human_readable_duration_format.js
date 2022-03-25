//https://www.codewars.com/kata/human-readable-duration-format

// 'n year, n day, n hour, n minute, n seconds'
// 1 year = 31536000 (сек)
// 1 day  = 86400 (сек)
// 1 hour = 3600 (сек)
// 1 minute = 60 (сек)

const convertSeconds = (seconds) => {
    let result = [[], [], [], [], []];
    let year = 31536000;
    let day  = 86400;
    let hour = 3600;
    let minute = 60;
    let resultStr = [];

    if (seconds > year) {
        result[0].push(Math.trunc(seconds / year))
        seconds = seconds - result[0] * 31536000;
    }

    if (seconds > day) {
        result[1].push(Math.trunc(seconds / day))
        seconds = seconds - result[1] * 86400;
    }

    if (seconds > hour) {
        result[2].push(Math.trunc(seconds / hour))
        seconds = seconds - result[2] * 3600;
    }

    if (seconds > minute) {
        result[3].push(Math.trunc(seconds / minute))
        seconds = seconds - result[3] * 60;
    }

    result[4].push(seconds);

    // если длина массива больше 1 последний элемент -1 пуш and

    if (result[0] == 1) {
        resultStr.push('1 year');
    } else if (result[0] > 1) {
        resultStr.push(`${result[0]} years`);
    }

    if (result[1] == 1) {
        resultStr.push('1 day');
    } else if (result[1] > 1) {
        resultStr.push(`${result[1]} days`);
    }

    if (result[2] == 1) {
        resultStr.push('1 hour');
    } else if (result[2] > 1) {
        resultStr.push(`${result[2]} hours`);
    }

    if (result[3] == 1) {
        resultStr.push('1 minute');
    } else if (result[3] == 60) {
        resultStr.push('1 hour');
    } else if (result[3] > 1) {
        resultStr.push(`${result[3]} minutes`);
    }

    if (result[4] == 1) {
        resultStr.push('1 second');
    } else if (result[4] > 1) {
        resultStr.push(`${result[4]} seconds`);
    }

    if (resultStr.length > 1) {
        resultStr.push(resultStr[resultStr.length - 1]);
        resultStr[resultStr.length - 2] = 'and';
    }

    if  (resultStr.length >= 3) {
        for (let i = 0; i < resultStr.length - 3; i++){
            resultStr[i] += ','
        }
    }

    return resultStr.join(' ')
}

console.log(convertSeconds(3600))