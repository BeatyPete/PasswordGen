// Assignment code here

//clicking button prompts criteria

var pwordInfo = {
  length: 12,
  lowercase: true,
  uppercase: true,
  numeric: true,
  special: true,
  lengthSelect: function() {
    //select length
    var promptLength = window.prompt("Select a password length between 8 and 128 characters.");
    //rejects invalid answers
    if (promptLength === null || promptLength === "" || isNaN(promptLength) || promptLength < 8 || promptLength >128) {
      window.alert("You must provide a valid number!");
      return pwordInfo.lengthSelect()
    }
    pwordInfo.length = parseInt(promptLength)
    console.log("Password length set to " + promptLength);
    pwordInfo.lowercaseSelect()
  },
  //select lowercase
  lowercaseSelect: function() {
    var promptLowercase = window.prompt("Do you want lowercase letters? Y or N")
    if (promptLowercase === null || promptLowercase === "") {
      window.alert("Y for yes or N for no, you twat.");
      return pwordInfo.lowercaseSelect()
    }
    if (promptLowercase === "y" || promptLowercase === "Y") {
      pwordInfo.lowercase = true
      console.log("lowercase set to " + pwordInfo.lowercase)
      pwordInfo.uppercaseSelect()
    }
    if (promptLowercase === "n" || promptLowercase === "N") {
      pwordInfo.lowercase = false
      console.log("lowercase set to " + pwordInfo.lowercase)
      pwordInfo.uppercaseSelect()
    }
  },
  //select uppercas
  uppercaseSelect: function() {
    var promptUppercase = window.prompt("Do you want uppercase letters? Y or N")
    if (promptUppercase === null || promptUppercase === "") {
      window.alert("Y for yes or N for no, you twat.");
      return pwordInfo.uppercaseSelect()
    }
    if (promptUppercase === "y" || promptUppercase === "Y") {
      pwordInfo.uppercase = true
      console.log("uppercase set to " + pwordInfo.uppercase)
      pwordInfo.numericSelect()
    }
    if (promptUppercase === "n" || promptUppercase === "N") {
      pwordInfo.uppercase = false
      console.log("uppercase set to " + pwordInfo.uppercase)
      pwordInfo.numericSelect()
    }
  },
  //select numbers
  numericSelect: function() {
    var promptNumeric = window.prompt("Do you want numbers? Y or N")
    if (promptNumeric === null || promptNumeric === "") {
      window.alert("Y for yes or N for no, you twat.");
      return pwordInfo.numericSelect()
    }
    if (promptNumeric === "y" || promptNumeric === "Y") {
      pwordInfo.numeric = true
      console.log("Numbers set to " + pwordInfo.numeric)
      pwordInfo.specialSelect()
    }
    if (promptNumeric === "n" || promptNumeric === "N") {
      pwordInfo.numeric = false
      console.log("Numbers set to " + pwordInfo.numeric)
      pwordInfo.specialSelect()
    }
  },
  // select special characters
  specialSelect: function() {
    var promptSpecial = window.prompt("Do you want special characters? Y or N")
    if (promptSpecial === null || promptSpecial === "") {
      window.alert("Y for yes or N for no, you twat.");
      return pwordInfo.specialSelect()
    }
    if (promptSpecial === "y" || promptSpecial === "Y") {
      pwordInfo.special = true
      console.log("Special set to " + pwordInfo.special)
      //break
    }
    if (promptSpecial === "n" || promptSpecial === "N") {
      pwordInfo.special = false
      console.log("Special set to " + pwordInfo.special)
      //break
    }
  },
}

//button press starts criteria select
document.getElementById("generate").onclick = pwordInfo.lengthSelect

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

