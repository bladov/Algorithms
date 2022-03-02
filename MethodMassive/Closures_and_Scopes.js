//https://www.codewars.com/kata/closures-and-scopes

function createFunctions(n) {
    let callbacks = [];

    for (let i=0; i<n; i++) {
        callbacks.push(function() {
            return i;
        });
    }

    return callbacks;
}

let callback = createFunctions(3);

console.log(callback[2]());

//function createFunctions(n) {
//   var callbacks = [];
//
//   for (let i=0; i<n; i++) {
//     callbacks.push(function() {
//       return i;
//     });
//   }
//
//   return callbacks;
// }