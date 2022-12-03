const fs = require('fs');

var input = fs.readFileSync('input.txt','utf8')

const data = input.replace(/\r?\n|\r/g, '|').split('|')
//const arr = data.map((item) => item.split('|'))

//console.log(data)
//console.log(arr)

const sumPrio = (data) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = lowercase.toUpperCase();
    const PRIO = '_' + lowercase + uppercase;

    let sum = data.map(line => [line.slice(0, line.length / 2), line.slice(line.length / 2)])
      .map(([leftCompartment, rightCompartment]) => [...leftCompartment].find(itemInLeft => rightCompartment.includes(itemInLeft)))  
      .map(item => PRIO.indexOf(item))
      .reduce((a,b) => a + b, 0)
    return sum
}

const sumPrio2 = (data) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = lowercase.toUpperCase();
    const PRIO = '_' + lowercase + uppercase;
    const length = 3;

    let sum = data
        .reduce((acc, element, index) => {
            if (index % length === 0) acc.push([]);
            acc[acc.length - 1].push(element);
            return acc;
        }, [])
        .map(elfs => [...elfs[0]].find(maybeToken => elfs.every(elf => elf.includes(maybeToken))))
        .map(item => PRIO.indexOf(item))
        .reduce((a,b) => a + b, 0);
    return sum;
}

console.log(sumPrio(data));
console.log(sumPrio2(data));