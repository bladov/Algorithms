
// b количество банкнот достоинством в один миллион рублей   milBanc    b = 10       oneRub   c = 700.000
// c количество монет в один рубль                           priceKvas  i = 350.000 monneySpend d = 200.000
// i цена одной бутылки напитка Квас-Класс
// d и количество монет в торговом автомате до покупок Аркадия.
function IntVending(b, c, i, d) {
    let bottleKvas = 0;
    let moneyRub = c % i;
    let milBanc = b;
    let oneRub = c;
    let priceKvas = i;
    let monneySpend = d;

    while (true) {
        if (oneRub < priceKvas && (milBanc == 0 || 1000000 < priceKvas)) break;

        if ( moneyRub > 0) {
            bottleKvas = Math.floor(c / i);
            oneRub = c % i;
            monneySpend += oneRub - bottleKvas * priceKvas;
        } else if (moneyRub == 0 && oneRub != 0) {
            bottleKvas = oneRub / priceKvas;
            monneySpend += oneRub;
            oneRub = 0;
        } else if (oneRub < priceKvas ) {

            if (1000000 / priceKvas < 0) {
                break;
            } else if (1000000 / priceKvas == 0) {
                b -= 1;
                bottleKvas += 1;
            } else if (1000000 % priceKvas <= monneySpend ){
                bottleKvas += Math.floor(1000000 / priceKvas);
                monneySpend -= priceKvas * Math.floor(1000000 / priceKvas);
                oneRub += priceKvas * Math.floor(1000000 / priceKvas);
            }

        }
    }

    return bottleKvas;
}

console.log(IntVending(10, 700000, 350000, 200000));





















//const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin
// });
//
// let lines = [];
// rl.on('line', (line) => {
//     lines.push(line);
// }).on('close', () => {
//     const [jewels, stones] = lines
//     let result = 0;
//     for (let i = 0; i < stones.length; i++) {
//         if (jewels.includes(stones.charAt(i))) {
//             ++result;
//         }
//     }
//     process.stdout.write(result.toString());
// });