
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];






// Assignment Code. This will help in generating a button for the code.
var generateBtn = document.querySelector("#generate");

function generateOptions(){
  //this function will prompt user for password options

  //write prompts for length. This will show up on user's screen asking them about the length.
  var passwordLength = prompt("Your code must be between 8 and 128 Characters long");
  //check IF length is < 8 , which means length is to small
  //check IF length is > 128, which mean length is too large

  //prompt lowercase
  var lowerCase = confirm("do you want lower case?");

  console.log(lowerCase)


  //prompts for uppsercase?
  var upperCase = confirm("do you want upper case?");
  console.log(upperCase)

  //var number =

  //var specialChar = 


//create an obj with the vars
var optionsObj = {
  lower: lowerCase,
  upper: upperCase,
  
}
//This is called object dot notation//
console.log(optionsObj.upper)
//Whatever gets returned gets assigned to the variable
return optionsObj;
  //return "hello";
};



function generatePassword(lowerCase, upperCase){
  console.log('Lowercase', lowerCase);
  if(lowerCase === true) {
    // get a random character from the lowercase array;
    // take the lower array and concat it with a potentialCharacters array
  }
  //this function will help create/generate our password based on the users options
  var options = generateOptions();
//We are console.logging our options here//  
console.log("THIS IS OUR OPTION OBJ")
console.log(options)
console.log(options.lower)
console.log(options.upper)


  //return options;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generat      e button
generateBtn.addEventListener("click", writePassword);
                                                                  


// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// `