// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
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
    // update the dom for the head
    let img = document.createElement('img');
    img.src = `./assets/${id}-head.png`;
    img.classList = 'imgsize';

    headEl.append(img);
    // update the stats to show the new count
    chatchphrasesEl.textContent = topChange;
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown

    // increment the middle change count state
    
    // update the dom for the middle

    // update the stats to show the new count
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown

    // increment the bottom change count state
    
    // update the dom for the bottom

    // update the stats to show the new count
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
