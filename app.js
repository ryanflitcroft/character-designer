// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let topChange = 0;
let midChange = 0;
let btmChange = 0;

// set state for all of the character's catchphrases
const phraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let id = headDropdown.value;
    // increment the head change count state
    topChange++;
    headEl.textContent = '';
    reportEl.textContent = '';

    // update the dom for the head
    let img = document.createElement('img');
    img.src = `./assets/${id}-head.png`;
    img.classList = 'imgsize';

    headEl.append(img);
    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    let id = middleDropdown.value;

    midChange++;
    middleEl.textContent = '';
    reportEl.textContent = '';

    let img = document.createElement('img');
    img.src = `./assets/${id}-middle.png`;
    img.classList = 'imgsize';

    middleEl.append(img);

    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    let id = bottomDropdown.value;

    btmChange++;
    bottomEl.textContent = '';
    reportEl.textContent = '';

    let img = document.createElement('img');
    img.src = `./assets/${id}-pants.png`;
    img.classList = 'imgsize';

    bottomEl.append(img);

    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    let phrase = catchphraseInput.value;
    phraseArray.push(phrase);
    catchphraseInput.value = '';
    console.log(phraseArray);
    displayCatchphrases();
});

function displayStats() {
    let span = document.createElement('span');
    reportEl.append(span);
    const statsString = makeStatsString(topChange, midChange, btmChange); // call this function with the correct arguments
    span.textContent = statsString;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';
    for (let i in phraseArray) {
        let p = document.createElement('p');
        p.classList = ('catchphrase');
        p.textContent = phraseArray[i];
        catchphrasesEl.append(p);
    }
}
