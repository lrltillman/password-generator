// Assignment Code
var generateBtn = document.querySelector("#generate");

// DO NOT TOUCH ABOVE CODE.. enter your own functions below 


function generatePassword() {
  var numberOfCharacters = prompt("How many characters?")
  var includeNumbers = confirm("Do you want numbers?")
  var includeLowercase = confirm("Do you want lowercase letters?")
  var includeUppercase = confirm("Do you want uppercase letters?")

  if (includeNumbers) {
    // how to add random numbers here? need to create array of chars?
  } else { null }

  if (includeLowercase) {
    //how to display lowercase letters?
  } else { null }
}
/* var myNewPassword = //all logic done under function
return myNewPassword 
*/















// DO NOT TOUCH 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //need to create a function called generatePassword, inside has return password, create a variable for the logic

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
