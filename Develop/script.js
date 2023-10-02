// Assignment Code
var generateBtn = document.querySelector("#generate");

// DO NOT TOUCH ABOVE CODE.. enter your own functions below 


function generatePassword() {

  var upperCase = "ABCDEFGHIJKLMNOP"
  var lowerCase = "abcdefghijklmnop"
  var nums = "1234567890"
  var specialChars = "~`!@$%&*()-+=[]|:;<>?"
  var numOfChars = prompt("How many characters would you like your password to be?")


  if (numOfChars <= 7) {
    alert("Sorry! That is too few characters. Please select 8 or more.")
    numOfChars = prompt("How many characters do you want?")
  }

  if (numOfChars >= 129) {
    alert("Sorry! That is too many characters. Please choose 128 or less.")
    numOfChars = prompt("How many characters do you want?")
  }

  var includeSpecChars = confirm("Would you like to include special characters?")
  var includeNumbers = confirm("Would you like to include numbers?")
  var includeLowercase = confirm("Would you like to include lowercase letters?")
  var includeUppercase = confirm("Would you like uppercase to include letters?")
  var newPass = "";
  var passSource = "";

  if (includeNumbers) {
    passSource = passSource + nums;
  }

  if (includeLowercase) {
    passSource = passSource + lowerCase;
  }

  if (includeUppercase) {
    passSource = passSource + upperCase;
  }

  if (includeSpecChars) {
    passSource = passSource + specialChars;
  }

  for (var i = 0; i < numOfChars; i++) {
    newPass += passSource[Math.floor(Math.random() * passSource.length)]
  }

  console.log(numOfChars);
  console.log(includeNumbers);
  console.log(includeLowercase);
  console.log(includeUppercase);
  return newPass;
}











//return at the end of a function
// 





// if (numOfChars <= 7) {
//   alert = "Sorry! That is too few characters. Please choose 8 or more."

// } else if (numOfChars >= 129) {
//   alert = "Sorry! That is too many characters. Please choose 128 or less."
// }

// function alphaNumericString(length) {
//   var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//   retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//   retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
// charAt ()
// }
// retval would to be declared 
// console.log(alphaNumericString(3))

// if (includeNumbers) {
//   // how to add random numbers here? need to create array of chars?
// } else { null }

// if (includeLowercase) {
//   //how to add lowercase letters to password var?
// } else { null }

// if (includeUppercase) {
//   //how to add uppercase letters to password var?
// } else { null }








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
