const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8')

const data = input.replace(/\r?\n|\r/g, '|').split('|')
//const arr = data.map((item) => item.split('|'))

//console.log(data)
//console.log(arr)

const strategyGuide = (input) => {
    let arr = input
    let score = 0
    for (let i = 0; i < arr.length; i++){
        let newArr = arr[i].replace("X", "A").replace("Y", "B").replace("Z", "C").split(" ")
        if (newArr[0] == newArr[1]) score += 3;
        if (newArr[1] == "A") score += 1;
        if (newArr[1] == "B") score += 2;
        if (newArr[1] == "C") score += 3;
        if (newArr[0] == "C" && newArr[1] == "A") score += 6;
        if (newArr[0] == "B" && newArr[1] == "C") score += 6;
        if (newArr[0] == "A" && newArr[1] == "B") score += 6;
    }
    return score;
}

console.log(strategyGuide(data))

const strategyGuide2 = (input) => {
    let arr = input
    let score = 0
    for (let i = 0; i < arr.length; i++){
        let newArr = arr[i].split(" ")
        if (newArr[1] == 'X'){
            score += 0;
            if (newArr[0] == 'A') score += 3;
            if (newArr[0] == 'B') score += 1;
            if (newArr[0] == 'C') score += 2;
        }
        if (newArr[1] == 'Y'){
            score += 3;
            if (newArr[0] == 'A') score += 1;
            if (newArr[0] == 'B') score += 2;
            if (newArr[0] == 'C') score += 3;
        }
        if (newArr[1] == 'Z'){
            score += 6;
            if (newArr[0] == 'A') score += 2;
            if (newArr[0] == 'B') score += 3;
            if (newArr[0] == 'C') score += 1;
        }
    }
    return score;
}

console.log(strategyGuide2(data))