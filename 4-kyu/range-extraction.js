/*
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

const solution = list => {
    const arr = [];

    for (let i = 0; i < list.length; i++) {
        let rangeArr = [list[i]];
        let rangeIndex = i + 1;
        let rangeLength = 1;

        while (list[i] + rangeLength === list[rangeIndex]) {
            rangeArr.push(list[rangeIndex]);
            rangeLength++;
            rangeIndex++;
        }


        //reset range-check and increment i to the end of the range
        rangeLength = 1;
        rangeIndex = i + 1;
        i = i + rangeArr.length - 1;

        if (rangeArr.length > 2) {
            arr.push(`${rangeArr[0]}-${rangeArr[rangeArr.length - 1]}`);
        } else {
            rangeArr.forEach(item => arr.push(item.toString()));
        }
    }

    return arr.join(',');
}