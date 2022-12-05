const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

const data = input.replace(/\r?\n|\r/g, '|').split('|');
//const arr = data.map((item) => item.split('|'))

//console.log(data);
//console.log(arr);

const movesInputs = data.splice(10);
//console.log(moves);

const stacksInput = data.splice(0, 9);
//console.log(stacksInput);

const nbOfStacks = stacksInput[stacksInput.length - 1].split('').filter((v) => v !== ' ').length;
//console.log(nbOfStacks);

const createStacks = (input) => {
    const stacks = Array.from(Array(nbOfStacks), () => new Array)
    for (let i = input.length - 2; i >= 0; i--){
        for (let j = 1; j < input[i].length; j += 4){
            if (input[i][j] !== ' '){
                //console.log((j - 1)/4)
                let stackNb = (j - 1) / 4;
                //console.log(input[i][j])
                let elem = input[i][j];
                stacks[stackNb].unshift(elem)
            }
        }
    }
    return stacks;
}
//console.log(createStacks(stacksInput));

const sanitizeMovesInput = (input) => {
    let arr = []
    for (let i = 0; i < input.length; i++){
        let splitString = input[i].split(' ');
        arr.push([parseInt(splitString[1]), parseInt(splitString[3]), parseInt(splitString[5])])
    }
    return arr;
}
//console.log(sanitizeMovesInput(moves))

const solution = (stacksInput, movesInputs) => {
    let stacks = createStacks(stacksInput);
    //console.log(stacks)
    const moves = sanitizeMovesInput(movesInputs);
    //console.log(moves)
    for (let i = 0; i < moves.length; i++){
        for (let j = moves[i][0]; j > 0; j--){
            //console.log(j)
            let stackFrom = moves[i][1] - 1
            //console.log(stackFrom)
            let stackTo = moves[i][2] - 1
            //console.log(stackTo)
            //console.log(stacks[stackFrom])
            let movingCont = stacks[stackFrom].shift()
            //console.log(movingCont)
            //console.log(i, stacks[stackFrom])
            //console.log(i, stacks[stackTo])
            stacks[stackTo].unshift(movingCont);
        }
    }
    let solution = ''
    for (let x = 0; x < stacks.length; x++){
        solution += stacks[x][0];
    }
    return solution;
}

console.log(solution(stacksInput, movesInputs));

const solution2 = (stacksInput, movesInputs) => {
    let stacks = createStacks(stacksInput);
    const moves = sanitizeMovesInput(movesInputs);
    for (let i = 0; i < moves.length; i++){
        let stackFrom = moves[i][1] - 1
        let stackTo = moves[i][2] - 1
        let nbOfContMoved = moves[i][0];
        let movingCont = stacks[stackFrom].splice(0, nbOfContMoved);
        //console.log(movingCont)
        for (let j = movingCont.length - 1; j >= 0; j--){
            stacks[stackTo].unshift(movingCont[j]);
        }
    }
    let solution = ''
    for (let x = 0; x < stacks.length; x++){
        solution += stacks[x][0];
    }
    return solution;
}

console.log(solution2(stacksInput, movesInputs));