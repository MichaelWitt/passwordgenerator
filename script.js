// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = prompt('How many characters would you like in your password?');
var specialCharacters = confirm('Click OK if you would like special characters in your password.');
var numbers = confirm('Click OK if you would like numbers in your password.');
var lowerCase = confirm('Click OK if you would like lowercase characters in your password.');
var upperCase = confirm('Click OK if you would like uppercase characters in your password.');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// if (characters === true) {


// }

// " !"#$ %& '()*+,-./:;<=>?@[\]^_`{|}~"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
