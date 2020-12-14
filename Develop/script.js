//This is for teh specialcharacters
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
// Puts all the possible characters for the password into the array
var allCharacters = [];




// Assignment Code. This will help in generating a password button and linking that password button with the HTML doc.
var generateBtn = document.querySelector("#generate");

  //this function begins here, and we are defining a function here, and it will prompt the user for password options 
function generateOptions(){


  //write prompts for length. This will show up on user's screen asking them about how long they want their password to be.
  var passwordLength = parseInt(prompt("How many characters would you like for your password?"));


  //check IF length is < 8 , which means length is to small
  //check IF length is > 128, which mean length is too large
  //NaN: means not a number. ParsInt-Converts strings into a number.
  if (parseInt(passwordLength)===NaN) {
    alert("You must have an entered number value ")
    //If the password is less than 8 or it is less than 128 alert.....
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert(" please choose number between 8 and 128 Characters!")
  }


  //prompt lowercase. This confirm is a Boolean.
  var lowerCase = confirm("Do you want a lower case letter in your password?");

  console.log(lowerCase);


  //prompts for uppsercase?
  var upperCase = confirm("Do you want a upper case letter your password?");
  console.log(upperCase);

  //Prompts for numbers? T

  var numbers = confirm("Do you want numbers in your password?");
  console.log(numbers);

  //Prompts for special characters?

  var specialCharacters = confirm("Would you like special characters in your password?");
  console.log(specialCharacters);

  //This if statement allows us to tell the user to select a password criteria if they fail to choose any given options
  if (!lowerCase && !upperCase && !specialCharacters && !numbers) {
        alert("You must pick at least one of the criteria!!");
        //The purpose of return is to show the final answer, terminate the fuction and not execute any more code. 
        //Normally return comes at the end of a function
        return;

  }

  //create an obj with the vars. These are known as key values pairs. The key is how you access it and the value is what you get back after you access it.
  //The arrays are grouped together into this logical construct or a bucket.
  var optionsObj = {
    lower: lowerCase,
    upper: upperCase,
    numbers: numbers,
    specialCharacters: specialCharacters,
    passwordLength: passwordLength,
  
  }


  //This is called object dot notation//
  console.log(optionsObj.upper)
//Whatever gets returned gets assigned to the variable
  return optionsObj;
//the function is a long one and ends here
};

function generatePassword(){


  //Get all the options that we have available to create the password. We are taking from 146 and putting it into 166.
var options = generateOptions();
 //We are console.logging our options here//  
  console.log("THIS IS OUR OPTION OBJ")
  console.log(options)
  console.log(options.lower)
  console.log(options.upper)
  
  //This is for building up our password
  var password = "" 
  
  //We have to build an array of all possible 
//Comine optins.lowercase, options.uppercase, options.numbers, and options.specialcharacters into a single array
  var optionsOjb = ("lowerCase" + "upperCase" + "numbers" + "special Characters")
  //This will run the code that is put into
  for (i = 0; i<options.passwordLength; i++){
   //Select a random element from options object(the result from line 197), concatanate it with password, and then 
    password = password + "a"
  if (options.lowerCase)
  }
  
  return password
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