import makeTextFileLineIterator from '../../common/js/file.js';
import { splitString } from '../../common/js/file.js';

//set global vars
let idsAry = [];
let minRange = 0;
let maxRange = 0;
let answer = 0;

//Line iteration function
function processLine(line) {
  if (line !== '') {
    // core solution code here
    idsAry = splitString(line, ',');

    idsAry.forEach(id => {
      minRange = parseInt(id.split('-')[0]);
      maxRange = parseInt(id.split('-')[1]);

      while (minRange <= maxRange) {
        // Processing each ID in the range
        const halfLength = Math.floor(minRange.toString().length / 2);
        const firstHalf = minRange.toString().substring(0, halfLength);
        const secondHalf = minRange.toString().substring(halfLength);

        if (firstHalf === secondHalf) {
          answer += parseInt(minRange);
        }
        minRange++;
      }
    });
  } else {
    console.log('Empty line skipped');
  }
}

// Process the file and iterate on each line
async function run() {
  for await (const line of makeTextFileLineIterator('input.txt')) {
    processLine(line);
  }

  // Enter the answers
  document.getElementById('answer1').innerHTML = answer;
}

run();
