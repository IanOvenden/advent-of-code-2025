import makeTextFileLineIterator from '../../common/js/file.js';

//set global vars

//Line iteration function
function processLine(line) {
  if (line !== '') {
    // core solution code here
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
  document.getElementById('answer1').innerHTML = [];
}

run();
