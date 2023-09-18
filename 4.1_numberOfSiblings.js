const prompt = require("prompt-sync")({signit: true});
let userInput = prompt('How many siblings do you have?');
// let numSiblings = userInput;
let numSiblings = parseInt(userInput);
//2. If you have one sibling, log to the console '1 sibling!' (use loose equality == for now)
if (numSiblings == 1) 
    {
        console.log('1 sibling!');
    }
// 3. Use an else-if block to log 'More than 1 sibling' in case 'numSiblings' is greater than 1
else if (numSiblings > 1) 
    {
        console.log('More than 1 sibling');
    }
// 4. Use an else block to log 'No siblings' (this block will be executed when 'numSiblings' is 0 or any other value)
else 
    {
        console.log('No siblings');
    }

/* 6.   Change == to ===, and test the code again, with the same values of 'numSiblings'.
        Notice what happens when there is exactly 1 sibling! Why is this happening? 
        
        When changing == to === (strict equality), this will no longer compare values only, 
        but rather types and values, since prompt returns a string then 1==='1' will return false.




    7.  convert 'numSibling' to a number, and watch what happens now when you input 1.
        
        converting 'numSibling' to a number using parseInt(userInput), 
        ensures that 'numSiblings' is of type number.
        thus, if we input 1, it will work correctly with ===,
        since both sides of the comparison are of type number.

    8.  Reflect on why we should use the === operator and type conversion in this situation.

        to a avoid an unepected behavior that can occur with loose equality (==)
        which may cause confusion, and difficulty maintainning code. 
        compare values while taking into consideration their data types. 
*/

