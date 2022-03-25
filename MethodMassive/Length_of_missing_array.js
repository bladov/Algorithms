//https://www.codewars.com/kata/length-of-missing-array

const getLengthOfMissingArray = (arrayOfArrays) => {
    if (!arrayOfArrays)  return 0
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if(arrayOfArrays[i] == null || !arrayOfArrays) return 0
    }

    // let result = arrayOfArrays.map(item => item.length).sort((a, b) => a - b);
    //
    // for (let i = 0; i < result.length; i++){
    //     if (!result[i]) return 0;
    //     if (result[i] + 1 != result[i + 1]) return result[i] + 1;
    // }
    //
    // return 0;
}

console.log(getLengthOfMissingArray(null))



