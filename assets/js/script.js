// Assignment code here
let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let characterLengthPrompt = parseInt(window.prompt(`How many characters would you like your password to be?`));
  console.log(characterLengthPrompt);
  if (!characterLengthPrompt || typeof characterLengthPrompt === `string`) {
    window.alert(`Please enter a number.`);
    return generatePassword();
  };
  if (characterLengthPrompt < 8) {
    window.alert(`password must be at least 8 characters!`);
    return generatePassword();
  };
  let characterTypesConfirm = window.confirm(`Please choose what character types you'd like to include.`);
  if (!characterTypesConfirm) {
    window.alert(`You must choose at least one character type to include.`)
    return generatePassword();
  } 
  let numberPrompt = window.confirm(`Would you like your password to include numbers?`);
  let lowerCaseConfirm = window.confirm(`Would you like to include lower case letters?`);
  let upperCaseConfirm = window.confirm(`Would you like to include upper case letters?`);
  let specialCharacterConfirm = window.confirm(`Would you like to include special characters?`);
  if (!numberPrompt && !lowerCaseConfirm && !upperCaseConfirm && !specialCharacterConfirm) {
    window.alert(`You must choose at least one character type!`);
    return generatePassword();
  };
  

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
