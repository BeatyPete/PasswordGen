// Assignment code here

//clicking button prompts criteria

var pwordInfo = {
  length: 12,
  lowercase: true,
  uppercase: true,
  numeric: true,
  special: true,
  criteriaSelect: function() {
    //select length
    var promptLength = window.prompt("Select a password length between 8 and 128 characters.");
    //rejects invalid answers
    if (promptLength === null || promptLength === "" || isNaN(promptLength) || promptLength < 8 || promptLength >128) {
      window.alert("You must provide a valid number!");
      return pwordInfo.criteriaSelect();
    }
    pwordInfo.length = parseInt(promptLength)
    console.log("Password length set to " + promptLength);
    //select lowercase
    var promptLowercase = window.prompt("Do you want lowercase letters?")
  },
}

//button press starts criteria select
document.getElementById("generate").onclick = pwordInfo.criteriaSelect

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

