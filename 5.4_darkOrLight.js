
const prompt = require("prompt-sync")({signit: true});
// Prompt the user for a color and store it in a variable
let color = prompt("Enter a color:");

// Convert the color to lowercase for case-insensitive comparison
color = color.toLowerCase();

// Create a function to determine the type of color
function getColorType(color) {
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            return "light color";
        case 'blue':
        case 'purple':
        case 'brown':
            return "dark color";
        default:
            return "Unknown color";
    }
}

// Call the function and log the result
let colorType = getColorType(color);
console.log(colorType);
