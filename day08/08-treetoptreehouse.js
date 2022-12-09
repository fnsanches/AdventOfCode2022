const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

const data = input.replace(/\r?\n|\r/g, '|').split('|');
//const arr = data.map((item) => item.split(' '))
const exampleData = [
'30373',
'25512',
'65332',
'33549',
'35390',
]
//console.log(input);
//console.log(data);
//console.log(arr);

const solution1 = (input) => {
    let arr = input;
    let visibleTrees = [];
    //Check for each row from the left
    for (let row = 0; row < arr.length; row++){
        let maxTreeHeightInRow = -1
        for (let col = 0; col < arr[row].length; col++){
            let currTreeHeight = arr[row].charAt(col)
            let coord = `${row},${col}`
                       
            if (currTreeHeight > maxTreeHeightInRow){
                maxTreeHeightInRow = currTreeHeight;
                visibleTrees.push(coord);
            }
        }
    }
    // console.log(visibleTrees)
    //Check for each row from the right
    // visibleTrees = []
    for (let row = 0; row < arr.length; row++){
        let maxTreeHeightInRow = -1
        for (let col = arr[row].length - 1; col >= 0; col--){
            let currTreeHeight = arr[row].charAt(col)
            let coord = `${row},${col}`
                       
            if (currTreeHeight > maxTreeHeightInRow){
                maxTreeHeightInRow = currTreeHeight;
                visibleTrees.push(coord);
            }
        }
    }
    // console.log(visibleTrees)
    // Check tree from the top of the grid
    // visibleTrees = []
    for (let col = 0; col < arr[0].length; col++){
        let maxTreeHeightInCol = -1
        for (let row = 0; row < arr.length; row++){
            let currTreeHeight = arr[row].charAt(col)
            let coord = `${row},${col}`
                       
            if (currTreeHeight > maxTreeHeightInCol){
                maxTreeHeightInCol = currTreeHeight;
                visibleTrees.push(coord);
            }
        }
    }
    // console.log(visibleTrees)
    // Check tree from the bottom of the grid
    // visibleTrees = []
    for (let col = 0; col < arr[0].length; col++){
        let maxTreeHeightInCol = -1
        for (let row = arr.length - 1; row >= 0; row--){
            let currTreeHeight = arr[row].charAt(col)
            let coord = `${row},${col}`
                       
            if (currTreeHeight > maxTreeHeightInCol){
                maxTreeHeightInCol = currTreeHeight;
                visibleTrees.push(coord);
            }
        }
    }
    console.log(visibleTrees)
    const nbVisibleTrees = [...new Set(visibleTrees)].length
    return nbVisibleTrees
}

console.log(solution1(data));
// console.log(solution1(exampleData));

const checkViewingDistance = (x,y) => {
    let currTree = parseInt(data[y][x])
    let distance = 0
    let currViewingDistance = 0

    for(let i = 1; i <= y; i++){//up
        currViewingDistance++
        if(currTree - parseInt(data[y-i][x]) <=0){
            break
        }
    }
    
    distance=currViewingDistance
    currViewingDistance = 0

    for(let i = 1; i < data.length-y; i++){//down
        currViewingDistance++
        if(currTree - parseInt(data[y+i][x]) <=0){
            break
        }   
    }

    distance*=currViewingDistance
    currViewingDistance = 0

    for(let i = 1; i <= x; i++){//left
        currViewingDistance++
        if(currTree - parseInt(data[y][x-i]) <=0){
            break
        }
    }

    distance*=currViewingDistance
    currViewingDistance = 0

    for(let i = 1; i < data[y].length-x; i++){//right
        currViewingDistance++
        if(currTree - parseInt(data[y][x+i]) <=0){
            break
        }
    }

    distance*=currViewingDistance

    return distance
}

const solution2 = (input) => {
    let maxViewingDistance = 0
    let currentDistance = 0

    for(let y = 0; y < input.length; y++){
        for(let x = 0; x < input[y].length; x++){
            currentDistance = checkViewingDistance(x,y)
            if(currentDistance > maxViewingDistance){
                maxViewingDistance = currentDistance
            }
        }
    }

    return maxViewingDistance
}

console.log(solution2(data))