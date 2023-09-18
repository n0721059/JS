const prompt = require("prompt-sync")({signit: true});
let gradeInput = prompt('Please enter your grade (in the form of a letter):');
let capitalizedGrade = gradeInput.toUpperCase();
let score;
switch (capitalizedGrade) {
  case 'A':
    score = 'score of 90-100';
    break;
  case 'B':
    score = 'score of 80-89';
    break;
  case 'C':
    score = 'score of 70-79';
    break;
  case 'D':
    score = 'score of 65-69';
    break;
  case 'F':
    score = 'score of 0-64';
    break;
  default:
    score = 'invalid grade letter';
    break;
}

if (score === 'invalid grade letter')
    {
        console.log("not a letter or a letter not a-f")
    }
else 
    {

        console.log(`Your grade of '${capitalizedGrade}' corresponds to a ${score}.`);
    }





    /*==================================SECTION B =====================================*/


// numerical score

let scoreInput = prompt('Please enter your numerical score:');

// Convert the input to a number
let numericalScore = parseFloat(scoreInput);

// Check if the input is invalid
if (isNaN(numericalScore) || numericalScore < 0 || numericalScore > 100) 
    {
        alert('Invalid input. Please enter a valid numerical score between 0 and 100.');
        exit()
    } 
    else 
    {
        //  variable to store the letter grade
        let letterGrade;

        // determine the letter grade
        switch (numericalScore) {
        case numericalScore >= 90:
            letterGrade = 'A';
            break;
        case numericalScore >= 80:
            letterGrade = 'B';
            break;
        case numericalScore >= 70:
            letterGrade = 'C';
            break;
        case numericalScore >= 65:
            letterGrade = 'D';
            break;
        default:
            letterGrade = 'F';
            break;
        }

        // Display the corresponding letter grade
        console.log(`Your score of ${numericalScore} corresponds to a grade of '${letterGrade}'.`);
    }
