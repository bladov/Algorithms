//https://www.codewars.com/kata/mylanguages
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    let arr = Object.entries(results);
    let result = [];
    let answer = [];

    arr.sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] >= 60) {
            result =  arr.slice(i);
            break;
        }
    }

    result.forEach(item => answer.push(item[0]));

    return answer.reverse();
}

console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71} ));