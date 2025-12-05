import makeTextFileLineIterator from '../../common/js/file.js';

//set global vars
let idsAry = [];
let minRange = 0;
let maxRange = 0;
let answer = 0;
let answer2 = 0;

//Line iteration function
function processLine(line) {
  if (line !== '') {
    // core solution code here
    idsAry = line.split(',');

    idsAry.forEach(id => {
      minRange = parseInt(id.split('-')[0]);
      maxRange = parseInt(id.split('-')[1]);

      while (minRange <= maxRange) {
        // answer 1
        // Processing each ID in the range
        const halfLength = Math.floor(minRange.toString().length / 2);
        const firstHalf = minRange.toString().substring(0, halfLength);
        const secondHalf = minRange.toString().substring(halfLength);

        if (firstHalf === secondHalf) {
          answer += parseInt(minRange);
        }

        // answer 2
        const numStr = minRange.toString();
        let foundPattern = false;

        // Check for repeating patterns of different lengths
        for (let patternLen = 1; patternLen <= Math.floor(numStr.length / 2); patternLen++) {
          if (numStr.length % patternLen === 0) {
            const pattern = numStr.substring(0, patternLen);
            const repeats = numStr.length / patternLen;

            if (pattern.repeat(repeats) === numStr) {
              answer2 += parseInt(minRange);
              foundPattern = true;
              break;
            }
          }
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
  document.getElementById('answer2').innerHTML = answer2;
}

run();
