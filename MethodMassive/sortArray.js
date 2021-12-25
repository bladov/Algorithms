function sortArray(arr) {

    let bank = {};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 != 0) {
            bank[i] = arr[i];
        }
    }

    let sortedArray = Object.values(bank).sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 != 0) {
            arr[i] = sortedArray[sortedArray.length - 1];

            sortedArray.pop();
        }
    }

    return arr;
}

console.log(sortArray([2,4,3,7,77,5,1,1,6]));


