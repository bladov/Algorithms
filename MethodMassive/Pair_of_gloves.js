//https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

const numberOfPairs = (gloves) => {
    let duo = {};
    let result = 0;

    gloves.forEach(glove => duo[glove] ? duo[glove] += 1 : duo[glove] = 1)

    for (let duos in duo) {
        if (duo[duos] == 1) continue
        result += Math.floor(duo[duos]) / 2;
    }

    return result;
}

console.log(7 / 2)