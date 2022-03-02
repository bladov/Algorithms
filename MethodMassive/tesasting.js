const absentVowel = string =>
    [...'aeiou'].findIndex(letter => !string.includes(letter))

console.log(absentVowel('yuyutyur aert o'));