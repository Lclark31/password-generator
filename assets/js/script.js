// Assignment code here
var chars = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-+=`

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  console.log(password.length);
}

function generatePassword() {
  var chosenSet = ``;
  var pw = ``

  let characterLengthPrompt = parseInt(window.prompt(`How many characters would you like your password to be (min: 8 max: 128)?`));
  if (!characterLengthPrompt || typeof characterLengthPrompt === `string`) {
    window.alert(`Please enter a number.`);
    return generatePassword();
  }
  if (characterLengthPrompt < 8 || characterLengthPrompt > 128) {
    window.alert(`password must be between 8 and 128 characters!`);
    return generatePassword();
  }
  
  let characterTypesConfirm = window.confirm(`Please choose what character types you'd like to include.`);
  if (!characterTypesConfirm) {
    window.alert(`You must choose at least one character type to include.`)
    return generatePassword();
  } 
  let numberPrompt = window.confirm(`Would you like your password to include numbers?`);
  if (numberPrompt) {
    chosenSet += chars.slice(0, 10);
  }
  let lowerCaseConfirm = window.confirm(`Would you like to include lower case letters?`);
  if (lowerCaseConfirm) {
    chosenSet += chars.slice(36, 62);
  }
  let upperCaseConfirm = window.confirm(`Would you like to include upper case letters?`);
  if (upperCaseConfirm) {
    chosenSet += chars.slice(10, 36);
  }
  let specialCharacterConfirm = window.confirm(`Would you like to include special characters?`);
  if (specialCharacterConfirm) {
    chosenSet += chars.slice(62, 74);
  }
  if (!numberPrompt && !lowerCaseConfirm && !upperCaseConfirm && !specialCharacterConfirm) {
    window.alert(`You must choose at least one character type!`);
    return generatePassword();
  }
  for (var i=0; i < characterLengthPrompt; i++) {
    var randomNum = Math.floor(Math.random() * chosenSet.length);
    pw += chosenSet.substring(randomNum, randomNum+1);
  }
  return pw;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);