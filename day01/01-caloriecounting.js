const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8')

const data = input.replace(/\r?\n|\r/g, '|').split('||')
const arr = data.map((item) => item.split('|'))

// Part 01 of Day01 Advent of Code - Top 1 most calories
const maxValue = (arr) => {
    let maxValue = 0;
    let maxValueIdx = 0;
    for (let i = 0; i < arr.length; i++){
        let curValue = arr[i].reduce((pV,cV) => parseInt(pV) + parseInt(cV), 0);
        if (maxValue < curValue){
            maxValue = curValue;
            maxValueIdx = i + 1;
        }
    }
    return maxValue;
}
console.log(maxValue(arr));

// Part 02 of Day01 Advent of Code - Top 3 most calories
const maxValuePart2 = (arr, nb) => {
    let maxValue = new Array(nb).fill(0);
    let maxValueIdx = new Array(nb).fill(0);
    for (let i = 0; i < arr.length; i++){
        let curValue = arr[i].reduce((pV,cV) => parseInt(pV) + parseInt(cV), 0);
        for (let j = 0; j < maxValue.length; j++){
            if (maxValue[j] < curValue){
                maxValue[j] = curValue;
                maxValueIdx[j] = j;
                continue;
            }
        }
    }
    return maxValue;
}
console.log(maxValuePart2(arr, 3));