// 1 4 5 1 4 8 8
// O(n2)
// function finfSoloNumber(nums){
//
//     let result = {};
//
//     nums.forEach(item => result[item] = result[item] + 1 || 1);
//
//     for ( let num in result) {
//         if (result[num] == 1) {
//             return num;
//         }
//     }
// }

// O(n)
function finfSoloNumber(nums){

    let result = new Set();

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (!result.has(n)) {
            result.add(n)
        } else {
            result.delete(n)
        }

    }

    // return [...result][0];
    return Array.from(result)[0]
}


console.log(finfSoloNumber([1, 4, 5, 1, 4, 8, 8]));