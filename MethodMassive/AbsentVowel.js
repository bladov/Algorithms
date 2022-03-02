//https://www.codewars.com/kata/absent-vowel
//
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Y has an index of 5.



function absentVowel(x){

    let alphavit = {
        "a": 0,
        "e": 0,
        "i": 0,
        "o": 0,
        "u": 0,
        "y": 0
    }

    const alphavitResult = {
        "a": 0,
        "e": 1,
        "i": 2,
        "o": 3,
        "u": 4,
        "y": 5
    }

    x.toLowerCase().split('').forEach(item => {
       for (let word in alphavit) {
           if (item == word) {
               alphavit[word] += 1;
           }
       }
    });

    for (let word in alphavit) {
        if (alphavit[word] == 0) {
            return alphavitResult[word];
        }
    }
}

console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));