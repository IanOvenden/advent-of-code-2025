import makeTextFileLineIterator from '../../common/js/file.js';

//set global vars
let totalJoltageOutput = 0;

//Line iteration function
function processLine(line) {
  if (line !== '') {
    let joltage = '';
    // core solution code here
    let highestBattery = 0;
    for (let i = 0; i < line.length - 1; i++) {
      // -1 line.length to prevent highest battery being at end of line
      const battery = line[i];
      // process digit
      if (battery > highestBattery) {
        highestBattery = battery;
      }
    }

    const splitIndex = line.indexOf(highestBattery);
    const firstPart = line.substring(0, splitIndex);
    const secondPart = line.substring(splitIndex + 1);

    let secondHighest = 0;
    for (let i = 0; i < secondPart.length; i++) {
      const battery = secondPart[i];
      if (battery > secondHighest) {
        secondHighest = battery;
      }
    }

    joltage = highestBattery + secondHighest;
    totalJoltageOutput += parseInt(joltage);
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
  document.getElementById('answer1').innerHTML = totalJoltageOutput;
}

run();
