function runningSum(nums) {
    nums = nums.map(item => +item);
    let result = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
}

const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf8');

const nums = fileContent.toString().split(' ');

const output = runningSum(nums);

fs.writeFileSync('output.txt', output.join(' '));
//output.join(' ')



