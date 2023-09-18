// 1. if/else statment

function passwordValidation1(password) {
    if (password.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}


//2. Using a ternary conditional expression:

function passwordValidation2(password) {
    return password.length > 7 ? "Strong" : "Weak";
}



//3. Using the && logical operator:
function passwordValidation3(password) {
    return password.length > 7 && "Strong" || "Weak";
}



// advanced validation:
function advancedPasswordValidation(password) {
    return password.length > 7 && /[A-Z]/.test(password) ? "Very Strong" :
           password.length === 7 ? "Strong" :
           "Weak";
}
