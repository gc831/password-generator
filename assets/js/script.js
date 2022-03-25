// Assignment code here
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let specialChar = ["!","@","#","$","%","^","&","*","(",")"];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword() {
  var password = [];
  
  var numOfChar = parseInt(prompt("How many characters would you like in your password? Choose between 8 -128"))
    if (isNaN(numOfChar) || numOfChar > 128 || numOfChar < 8) {
        
    window.alert("Ooops! Something went wrong. Please provide a number between 8 and 128");
    numOfChar();
    }
  
  var withSpecialChar = confirm("Would you like special characters in your password?");
  var withNumbers = confirm("Would you like numbers in your password?");
  var withUpperCase = confirm("Would you like upper case in your password?");
  var withLowerCase = confirm("Would you like lower case in your password?");

    if (withNumbers) {
      password = password.concat(numbers);
    }
    
    if (withSpecialChar) {
      password = password.concat(specialChar);
    }

    if (withUpperCase) {
      password = password.concat(upperCase);
    }

    if (withLowerCase) {
      password = password.concat(lowerCase);
    }

    console.log(password);
    var finalPassword = "";
   
    // in the (), just tells us how many times we are doing this. In this case, the length of the numOfChar 
    for (var i = 0; i < numOfChar; i++) {
      var randomCharacter = password[Math.floor(Math.random() * password.length)];
      finalPassword = finalPassword + randomCharacter;
    }
    console.log(finalPassword);
   return finalPassword;
  }

// Write password to the #password input
function writePassword() {
  var passwordArray = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordArray;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);