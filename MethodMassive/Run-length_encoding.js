// https://www.codewars.com/kata/run-length-encoding

const runLengthEncoding = (str) => {
    let arr = str.split('');
    let result = [];
    let check = 1;

    for (let i = 0; i < arr.length; i++) {
       if(arr[i] == arr[i + 1]) {
           check++
           continue
       } else {
           result.push([check, arr[i]]);
           check = 1;
       }
    }

    return result;
}

console.log(runLengthEncoding(""))

// result = [[1, 'a']]
//var runLengthEncoding = function(str){
//   return [] // << fix this
// }

//runLengthEncoding("aaajjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]