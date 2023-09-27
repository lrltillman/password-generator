// Assignment Code
var generateBtn = document.querySelector("#generate");

// DO NOT TOUCH ABOVE CODE.. enter your own functions below 


function generatePassword() {
  var numberOfCharacters = prompt("How many characters?")
  var includeNumbers = confirm("Do you want numbers?")



}













// DO NOT TOUCH 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
