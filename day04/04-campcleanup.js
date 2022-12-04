const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

//const data = input.replace(/\r?\n|\r/g, '|').split('|')
//const arr = data.map((item) => item.split('|'))

//console.log(data)
//console.log(arr)

const part01 = (input) => {
    let arr = input.split("\n").map(line => line.split(/\D/).map(Number));
    let filteredArr = arr.filter(([start1, end1, start2, end2]) => 
        (start2 >= start1 && end2 <= end1) ||
        (start2 <= start1 && end2 >= end1));    
    return filteredArr.length;
}

const part02 = (input) => {
    let arr = input.split("\n").map(line => line.split(/\D/).map(Number));
    let filteredArr = arr.filter(([start1, end1, start2, end2]) => 
        (end1 >= start2 && start1 <= end2));
    return  filteredArr.length;
}

console.log(part01(input));
console.log(part02(input));