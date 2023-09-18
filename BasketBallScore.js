// John's and Mike's team scores
let johnTeamScores = [89, 120, 103];
let mikeTeamScores = [116, 94, 123];

// Calculate the average score for each team
function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

let johnAverage = calculateAverage(johnTeamScores);
let mikeAverage = calculateAverage(mikeTeamScores);

// Determine the winner
if (johnAverage > mikeAverage) {
    console.log("John's team wins with an average score of " + johnAverage);
} else if (mikeAverage > johnAverage) {
    console.log("Mike's team wins with an average score of " + mikeAverage);
} else {
    console.log("It's a draw with an average score of " + johnAverage);
}

// Mary's team scores
let maryTeamScores = [97, 134, 105];
let maryAverage = calculateAverage(maryTeamScores);

// Determine the winner with Mary included
if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log("John's team wins with an average score of " + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log("Mike's team wins with an average score of " + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log("Mary's team wins with an average score of " + maryAverage);
} else {
    console.log("It's a draw with an average score of " + johnAverage);
}
