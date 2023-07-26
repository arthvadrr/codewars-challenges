/*
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]],
["name2", 110, ["B", "A", "A", "A"]],
["name3", 200, ["B", "A", "A", "C"]],
["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
];

The scores for each grade is:

    A: 30 points
    B: 20 points
    C: 10 points
    D: 5 points
    Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
,
["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

return ["name1", "name3"];

*/

// find the item that breaks the rules

const addUpGrades = grades => {
    let result      = 0;
    let isHonorRoll = true;

    const scores = {'A': 30, 'B': 20, 'C': 10, 'D': 5};

    for (let grade of grades) {
        if (grade !== 'A' && grade !== 'B') isHonorRoll = false;
        result += scores[grade] ?? 0;
    }

    if (grades.length >= 5 && isHonorRoll) result += 20;

    return result;
}

const findHack = arr => {
    let result = [];

    for (let transcript of arr) {
        const [name, total, grades] = transcript;
        if (total > 200 || addUpGrades(grades) !== total) result.push(name);
    }

    return result;
}

const array = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
];

console.log(findHack(array));
