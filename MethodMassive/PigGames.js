
// не решено.
function stopAt (m, n) {

    min = m - m + 1;
    max = m;
    let cache = 0;
    result = 0;

    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);

    while (result < n) {
      result += rand;
      if (rand == min) result = 0;
      cache += 1;
    }

    return cache;
}

// 2 <= м <= 12;  m-гранный кубик
// 1 <= n <= 100; кол-во очков за 1 раунд с использованием m-гранный кубика

console.log(stopAt(2, 1));