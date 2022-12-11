const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

const data = input.replace(/\r?\n|\r/g, '|').split('|');

// console.log(data)

const solution1 = (input) => {
    let arr = input;
    
    let pathTail = ["0,0"]
    let pathHead = ["0,0"]
    let headX = 0
    let headY = 0

    for (let i = 0; i < arr.length; i++){
        let mov = arr[i].split(' ')
        if (mov[0] == 'D'){
            for (let j = mov[1]; j > 0; j--){
                let prev = `${headX},${headY}`;
                pathHead.push(prev);
                headX++;
                let [tailX, tailY] = pathTail[pathTail.length - 1].split(',');
                if (Math.abs(tailX - headX) > 1 || Math.abs(tailY - headY) > 1 ){
                    pathTail.push(prev);
                }
            }
        }
        if (mov[0] == 'U'){
            for (let j = mov[1]; j > 0; j--){
                let prev = `${headX},${headY}`;
                pathHead.push(prev);
                headX--;
                let [tailX, tailY] = pathTail[pathTail.length - 1].split(',');
                if (Math.abs(tailX - headX) > 1 || Math.abs(tailY - headY) > 1 ){
                    pathTail.push(prev);
                }
            }
        }
        if (mov[0] == 'R'){
            for (let j = mov[1]; j > 0; j--){
                let prev = `${headX},${headY}`;
                pathHead.push(prev);
                headY++;
                let [tailX, tailY] = pathTail[pathTail.length - 1].split(',');
                if (Math.abs(tailX - headX) > 1 || Math.abs(tailY - headY) > 1 ){
                    pathTail.push(prev);
                }
            }
        }
        if (mov[0] == 'L'){
            for (let j = mov[1]; j > 0; j--){
                let prev = `${headX},${headY}`;
                pathHead.push(prev);
                headY--;
                let [tailX, tailY] = pathTail[pathTail.length - 1].split(',');
                if (Math.abs(tailX - headX) > 1 || Math.abs(tailY - headY) > 1 ){
                    pathTail.push(prev);
                }
            }
        }      
    }
    // console.log(pathTail)
    return [...new Set(pathTail)].length
}

console.log(solution1(data))

const solution2 = (input, len) => {
    const steps = input.map(line => line.split(" "))
    const knots = new Array(len).fill().map(() => ({ x: 0, y: 0}));
    const visited = new Set([`0,0`]);

    for (const [dir, count] of steps){
        for (let i = 0; i < +count; i++){
            if (dir == 'R')
                knots[0].x++;
            if (dir == 'L')
                knots[0].x--;
            if (dir == 'D')
                knots[0].y++;
            if (dir == 'U')
                knots[0].y--;
            for (let j = 1; j < knots.length; j++){
                const [H, T] = [knots[j - 1], knots[j]];
                if (Math.abs(H.x - T.x) > 1 || Math.abs(H.y - T.y) > 1){
                    T.x = H.x === T.x ? T.x : H.x > T.x ? T.x + 1 : T.x - 1;
                    T.y = H.y === T.y ? T.y : H.y > T.y ? T.y + 1 : T.y - 1;
                }
            }
            visited.add(`${knots[len - 1].x},${knots[len - 1].y}`);
        }
    }
    return visited.size;
}

console.log(solution2(data, 10))