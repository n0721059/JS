const prompt = require("prompt-sync")({signit: true});
// Prompt the user for the language
let language = prompt("Enter a language name:");

// Convert the language to lowercase for case-insensitive comparison
language = language.toLowerCase();

// Use a switch statement to log the appropriate message
switch (language) {
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Not in the top 5');
        break;
}
