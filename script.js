// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pswdCriteria = {

  //Property for length of password
  pswdLength: 0,

  //lowercase letters
  pswdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //uppercase letters
  pswdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //numbers
  pswdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //special characters
  pswdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to handle the operations to generate a new password
function generatePassword() {

  //holds the password to be generated
  var result = "";

  //variables to collect input from user prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  
  passwordLength = 0;
  pswdCriteria.pswdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //checking user enters an integer
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          //call the internal function to show prompts for criteria
          showPrompts();

          
          while (pswdCriteria.pswdLength < passwordLength) {
            //if statement to make sure the user selects at least one of the criteria  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              
              if (lowerCase === true && pswdCriteria.pswdLength < passwordLength) {
                var lc = pswdCriteria.pswdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pswdCriteria.pwdLength++;
              }
                     
              if (specialChar === true && pswdCriteria.pswdLength < passwordLength) {
                var sc = pswdCriteria.pswdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pswdCriteria.pswdLength++;
              }

              if (upperCase === true && pswdCriteria.pswdLength < passwordLength) {
                var uc = pswdCriteria.pswdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pswdCriteria.pswdLength++;
              }

              //if the user selected a number and there is still room, add a number from the array and add it to the result
              if (numbers === true && pswdCriteria.pswdLength < passwordLength) {
                var num = pswdCriteria.pswdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pswdCriteria.pswdLength++;
              }
            }
          }
        }
      }
    }

    //return the generated password back to the calling function
    return result;

    
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}


