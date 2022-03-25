//https://www.codewars.com/kata/n-th-fibonacci


// 0 1 1 2 3 5 8 13 21

const nthFibo = (n) => {
    let fiboArr = [0, 1];

    while (fiboArr.length <= n) {
        fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2])
    }

    return fiboArr[n - 1]
}

console.log(nthFibo(4))