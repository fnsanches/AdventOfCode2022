const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

// const data = input.replace(/\r?\n|\r/g, '|').split('|');
//const arr = data.map((item) => item.split('|'))

// console.log(input);
// console.log(data);
//console.log(arr);

const solution = (input) => {
    let arr = input;
    for (let i = 3; i < arr.length; i++){
        let sub = [...new Set(arr.substring(i - 3, i + 1))];
        // console.log(sub)
        if (sub.length == 4)
            return i + 1;
    }
    return 0;
}

console.log(solution(input))

const solution2 = (input) => {
    let arr = input;
    for (let i = 13; i < arr.length; i++){
        let sub = [...new Set(arr.substring(i - 13, i + 1))];
        // console.log(sub)
        if (sub.length == 14)
            return i + 1;
    }
    return 0;
}

console.log(solution2(input))