//https://www.codewars.com/kata/52f3bb2095d6bfeac2002196/train/javascript

//    act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef', true]);
//     act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg', false]);


const validWord = (dictionary, word) => {
    let i = 0
    // let bankWords = 0;
    let result = '';

    if (!dictionary.length) return false

    while (i < dictionary.length) {
        if (word.includes(dictionary[i])) {
            result += dictionary[i];
            if (result.length > word.length) return false
        }
        // bankWords += dictionary[i].length
        // if (bankWords > word.length)
        i++
    }

    if (result.length < word.length) return false
    return true
}


console.log(validWord( ['code','wars'], 'code'))