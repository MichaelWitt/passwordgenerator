// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialSymbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~", "]"];

var numberSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var characters = prompt('How many characters would you like in your password?');

  if (characters < 8 || characters > 128) {
    alert('Password length must be between 8 and 128 characters');
    generatePassword();


  }

  var special = confirm('Click OK if you would like special characters in your password.');
  var numbers = confirm('Click OK if you would like numbers in your password.');
  var lowercase = confirm('Click OK if you would like lowercase characters in your password.');
  var uppercase = confirm('Click OK if you would like uppercase characters in your password.');

  if (!special && !numbers && !lowercase && !uppercase) {
    alert('Please confirm at least one character type.');
    generatePassword();
  }


  var passwordCharacters = [];


  if (special) {
    passwordCharacters = passwordCharacters.concat(specialSymbols)
  };

  if (numbers) {
    passwordCharacters = passwordCharacters.concat(numberSymbols)
  };

  if (lowercase) {
    passwordCharacters = passwordCharacters.concat(lowerSymbols)
  };

  if (uppercase) {
    passwordCharacters = passwordCharacters.concat(upperSymbols)
  };


  var generatedPassword = ""

  for (let i = 0; i < characters; i++) {
    //generate random number between 0 and array length minus 1
    var randomNum = Math.floor(Math.random() * passwordCharacters.length);
    //select it from PasswordCharacters and concat to generatedPassword
    generatedPassword += passwordCharacters[randomNum];


  }
  //remove first four elements of the array and make sure that all arrays are in password. 
  return generatedPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// Questions ?

// I don't yet know how to add "\", "]", and some other characters into array without it closing the array or making the following variables come up with an error. "[", "\", "]"

// I need to figure out how to add inputted character length prompt into the password generator

// Would I .push the if Statements to the password or unnecessary?

// I need to put all of the possible character symbols into the password generator

// I need to figure out how password generator can select the password

// I need a loop that code is in that loops every time user wants to generate a new password

// When do I use functions vs If Statements vs Loops vs Variables?

// For my last homework I was asked to consolidate my project into more folders. Do i just create folders for images/html/etc to do so? One time I had my index.html in a folder and it displayed the ReadMe on the page. 

// What is this bracket do and when is it necessary for things like .toLowerCase()

