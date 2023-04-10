// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var choiceArr = [];
var specialCharArr =['!','@','#','%','^','&','*','(',')','_','-','=','+','?','/','|'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  //password based on prompt
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex]
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Character length has to be a number, 8-128 digits.");
    return false;
  }

if(confirm("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
}

if(confirm("Would you like uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
}

if(confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr);
}

if(confirm("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharArr);
}

return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
