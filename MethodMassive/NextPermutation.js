// 31
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such an arrangement is impossible, it must rearrange it to the lowest possible order (i.e., sorted in ascending order).
//
// The replacement must be in place and use only constant extra memory.

var nextPermutation = function(nums) {

    for (let i = nums.length - 1; i > 0; i--) {

        for (let j = i - 1; j > 0; j--) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];

                for ( let n = nums.length - 1; n > 0; n--) {
                    for (let h = n - 1; h > 0; h--) {
                        if (nums[n] < nums[h]) {
                            [nums[n], nums[h]] = [nums[h], nums[n]];
                            return nums;
                        }
                    }
                }

                return nums;
            }
        }

    }

    return nums;
};

console.log(nextPermutation([1,3,2]));