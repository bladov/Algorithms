//https://www.codewars.com/kata/sorting-by-bits

const sortByBit = (arr) => {
    // конверт целого в 32 битовое и вычесление кол-ва битов
    const convertNumberTo32 = (num) => {
        let number = 0;
             (num >>> 0)
            .toString(2)
            .split('')
            .forEach(item => {
                if (item == '1') {
                    number++
                }
            })

        return number
    }

    return arr.sort((a, b) => {
        if (convertNumberTo32(a) === convertNumberTo32(b)) {
            return a - b
        } else {
            return (convertNumberTo32(a) >>> 0).toString(2) - (convertNumberTo32(b) >>> 0).toString(2)
        }
    })
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))