function solution(arr, target) {

    for (let i = 0; i < arr.length; i ++) {

        for ( let j = i + 1; j <= arr.length ; j++) {
            if( arr[i] + arr[j] === target) {
                return ([ i, j]);
            }
        }

    }

}

console.log(solution([3, 2, 3], 6));
console.log(solution([3, 3], 6));
console.log(solution([3, 2, 6, 3], 9));
console.log(solution([1, 4, 2, 3], 6));

