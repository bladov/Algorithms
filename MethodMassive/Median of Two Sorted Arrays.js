var findMedianSortedArrays = function(nums1, nums2) {

    let joinArr = nums1.concat(nums2).sort((a, b) => a - b);

    if (joinArr.length == 1) {
       return joinArr[0].toFixed(5);
    } else if (joinArr.length % 2 == 0) {   // для чётного массива 1 2 3 4
        return (((joinArr[(joinArr.length / 2) - 1]) + (joinArr[joinArr.length / 2])) / 2).toFixed(5)
    } else {                                 // для нечетного массива
        return joinArr[Math.floor(joinArr.length / 2)].toFixed(5);
    }

};

console.log(findMedianSortedArrays([1, 1], [1, 2]))
