//https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

let nicknameGenerator = (name) => {
    const vowel = 'qeyuioa';

    if (name.length < 4) return "Error: Name too short";
    return (vowel.includes(name[2])) ? name.slice(0, 4) : name.slice(0, 3);
}

console.log(nicknameGenerator("Kayne"));