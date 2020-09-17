// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = prompt('How many characters would you like in your password?');
var special = confirm('Click OK if you would like special characters in your password.');
var numbers = confirm('Click OK if you would like numbers in your password.');
var lowercase = confirm('Click OK if you would like lowercase characters in your password.');
var upperCase = confirm('Click OK if you would like uppercase characters in your password.');

// var specialSymbols = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "']", "^", "_", "`", "{ ", "|", "}", "~"];

var numberSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];






// if (special === true) {
//  password.push(specialSymbols)
// };

// if (numbers === true) {
//   password.push(numberSymbols)
// };

// if (lowercase === true) {
//   password.push(lowerSymbols)
// };

// if (uppercase === true) {
//   password.push(upperSymbols)
// };


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Questions ?

// I don't yet know how to add "\", "]", and some other characters into array without it closing the array or making the following variables come up with an error.

// var specialSymbols = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "']", "^", "_", "`", "{ ", "|", "}", "~"];

// Would I .push the if Statements to the password or unnecessary?

// I need to put all of the possible character symbols into the password generator

// I need to figure out how password generator can select the password

// I need a loop that code is in that loops every time user wants to generate a new password

