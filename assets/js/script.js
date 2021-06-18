// Assignment code here
let pwcharacters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=`;
let lowerLetters = "";
let upperLetters = ``
let numbers = "";
let specialCharacters = "";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let characterLengthPrompt = parseInt(window.prompt(`How many characters would you like your password to be (min: 8 max: 128)?`));
  if (!characterLengthPrompt || typeof characterLengthPrompt === `string`) {
    window.alert(`Please enter a number.`);
    return generatePassword();
  };
  if (characterLengthPrompt < 8 || characterLengthPrompt > 128) {
    window.alert(`password must be between 8 and 128 characters!`);
    return generatePassword();
  };
  
  let characterTypesConfirm = window.confirm.toString(`Please choose what character types you'd like to include.`);
  if (!characterTypesConfirm) {
    window.alert(`You must choose at least one character type to include.`)
    return generatePassword();
  } 
  let numberPrompt = window.confirm(`Would you like your password to include numbers?`);
  if (!numberPrompt) {
    pwcharacters = pwcharacters.split(`9`).pop();
  }
  let lowerCaseConfirm = window.confirm(`Would you like to include lower case letters?`);
  if (!lowerCaseConfirm) {
    pwcharacters = pwcharacters.split(lowerLetters);
  }
  let upperCaseConfirm = window.confirm(`Would you like to include upper case letters?`);
  if (!upperCaseConfirm) {
    pwcharacters = pwcharacters.split(upperLetters);
  }
  let specialCharacterConfirm = window.confirm(`Would you like to include special characters?`);
  if (!specialCharacterConfirm) {
    // pwcharacters = pwcharacters.split(specialCharacters);

    console.log(typeof pwcharacters);
  }
  if (!numberPrompt && !lowerCaseConfirm && !upperCaseConfirm && !specialCharacterConfirm) {
    window.alert(`You must choose at least one character type!`);
    return generatePassword();
  };
  
  // password length needs to equal the characterLengthPrompt
  for (let len = 0; len < characterLengthPrompt; len++) {
    pw = Math.floor(Math.random() * 10);
    password = pwcharacters[pw];
    // console.log(specialCharacterConfirm);
    // console.log(pwcharacters);

  }
}
noNum = console.log(pwcharacters.split(numbers));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
