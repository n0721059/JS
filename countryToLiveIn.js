// Prompt the user for input
const prompt = require("prompt-sync")({signit: true});
let language = prompt("What language do you speak?");
let isIsland = prompt("Is the country an island? (true/false)");
let population = prompt("What is the population of the country?");
let country = prompt("Enter the name of the country:");

// Convert population to a number
population = parseInt(population);

// Check if Sarah can live in the country
if (language === "English" && !isIsland && population < 50000000) {
    console.log("You should live in " + country + ".");
} else {
    console.log(country + " does not meet your criteria.");

    // Temporary changes to make the condition true
    if (isIsland === "true") {
        console.log("However, if " + country + " is not an island, it could be a suitable option.");
    }
    if (population >= 50000000) {
        console.log("However, if " + country + " has a population less than 50 million, it could be a suitable option.");
    }
    if (language !== "English") {
        console.log("However, if English is spoken in " + country + ", it could be a suitable option.");
    }
}
