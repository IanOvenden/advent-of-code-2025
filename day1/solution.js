import makeTextFileLineIterator from '../../common/js/file.js';

//global vars
let sequences = new Array();
let rotation = '';
let modifier = '';
let currentRotation = 50; // dial starts at 50
let zeroCount = 0;

function processLine(line) {
  if (line !== '') {
    modifier = line[0];
    rotation = line.slice(1);
    if (modifier === 'R') {
      currentRotation = currentRotation + parseInt(rotation);
    } else if (modifier === 'L') {
      currentRotation = currentRotation - parseInt(rotation);
    }

    // Handle rollover: values above 99 wrap back to 0
    // More efficient alternative using modulo
    currentRotation = ((currentRotation % 100) + 100) % 100;

    if (currentRotation === 0) {
      console.log('Zero found!');
      zeroCount += 1;
    }
  }
}

function compareNumbers(a, b) {
  return a - b;
}

async function run() {
  for await (const line of makeTextFileLineIterator('input.txt')) {
    processLine(line);
  }

  document.getElementById('answer1').innerHTML = zeroCount;
}

run();
