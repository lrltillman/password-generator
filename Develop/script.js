// Assignment Code
var generateBtn = document.querySelector("#generate");

// DO NOT TOUCH ABOVE CODE.. enter your own functions below 


function generatePassword() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var nums = "1234567890"
  var specialChars = "~!@$%&*)-+=:;<?"
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
