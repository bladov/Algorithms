// https://leetcode.com/problems/merge-intervals/

function mergeIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1 ; i++) {

        if ((intervals[i][1]) >= (intervals[i + 1][0])) {

            intervals.splice(i, 2, [intervals[i][0], Math.max((intervals[i][1]), (intervals[i + 1][1]))]);

            i--;
        }

    }

    return intervals;
}

console.log(mergeIntervals([[2,4],[1,2],[5,7],[8,10],[9,15]]));

