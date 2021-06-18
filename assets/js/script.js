// Assignment code here
var chars = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-+=`
var chosenSet = ``

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log(chosenSet)
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
    chosenSet += chars.slice(0, 9);
    console.log(chosenSet);
  }
  let lowerCaseConfirm = window.confirm(`Would you like to include lower case letters?`);
  if (lowerCaseConfirm) {
    chosenSet += chars.slice(36, 61);
  }
  let upperCaseConfirm = window.confirm(`Would you like to include upper case letters?`);
  if (upperCaseConfirm) {
    chosenSet += chars.slice(10, 35);
  }
  let specialCharacterConfirm = window.confirm(`Would you like to include special characters?`);
  if (specialCharacterConfirm) {
    chosenSet += chars.slice(62, 73);
  }
  if (!numberPrompt && !lowerCaseConfirm && !upperCaseConfirm && !specialCharacterConfirm) {
    window.alert(`You must choose at least one character type!`);
    return generatePassword();
  }
  for (let i=0; i < characterLengthPrompt; i++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    console.log(randomNum);
  }

};

// Add event listener to generate button
// for (let len = 0; len < characterLengthPrompt; len++) {
// pw = Math.floor(Math.random() * pwcharacters.length);
// password += pwcharacters.substring(pw,pw+1);
//     console.log(password); }
    
generateBtn.addEventListener("click", writePassword);