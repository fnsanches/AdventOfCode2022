const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');

const data = input.replace(/\r?\n|\r/g, '|').split('|');

// console.log(data)

function solution1(input) {
    const lines = input;
    let sum = 0;
    let cycle = 0;
    let x = 1;
    
    function progress() {
      cycle++;
      if ([20, 60, 100, 140, 180, 220].includes(cycle))
        sum += x * cycle;
    }

    for (const line of lines) {
      if (line === 'noop')
        progress();
      else {
        progress();
        progress();
        x += +line.split(' ').pop();
      }
    }
    return sum;
  }

  console.log(solution1(data))

  function solution2(input){
    const lines = input;
    let result = '';
    let cycle = 0;
    let x = 1;

    function progress(){
        if (cycle % 40 == 0)
            result += '\n';
        result += Math.abs((cycle % 40) - x) <= 1 ? '#' : '.';
        cycle++;
    }

    for (const line of lines){
        if (line == 'noop')
            progress();
        else {
            progress();
            progress();
            x += +line.split(' ').pop();
        }
    }
    return result;
  }

  console.log(solution2(data))