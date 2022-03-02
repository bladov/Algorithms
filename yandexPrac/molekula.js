function findLatestWeight(weights) {
    weights.sort((a,b) => b - a);

    for ( let i = 0; i < weights.length; i++) {
        if (weights.length == 1) return weights[0];
        // weights.splice(i, 2, (weights[i] - weights[i + 1]))
        for ( let j = i + 2; j < weights.length; j++) { // j = 3
            if ((weights[i] - weights[i + 1]) >= weights[j]) {
                let antiMolekula = weights[i] - weights[i + 1];
                if (antiMolekula == 0) {
                    weights.splice(i, 3);
                    i--;
                    j--;
                    continue;
                }
                weights.splice(i, 2, antiMolekula);
                i--;
                j--;
            }
        }
    }
    return weights;
}
// module.exports = findLatestWeight;
// [2,7,4,1,8,1]
//  [10,7,4,2,1,1]  j = 3  [4,3,2,1,1]
// [100,50,40,2,1,1]  [2,1,1]  [1,1,1]
// [40,2,1,1,50]
console.log(findLatestWeight([10,7,4,2,1,1]))