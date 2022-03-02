//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    let validStr = 'qQeEuUiIoOaA';
    let result = str.split('');
    let answer = [];

    result.forEach((words, pos) => {
        if (!validStr.includes(words)) {
            answer.push(words);
        }
    });

    return answer.join('');
}

console.log(disemvowel("kQoybIqK"))

// "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".