// Assignment code here

var genPword = function() {
  let values = "";
  let password = "";

  //add selected criteria to password values
  if (pwordInfo.lowercase === true) {
    let lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
    values = values + lowercaseValues
  }
  if (pwordInfo.uppercase === true) {
    let uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    values = values + uppercaseValues
  }
  if (pwordInfo.numeric === true) {
    let numericValues = "1234567890";
    values = values + numericValues
  }
  if (pwordInfo.special === true) {
    let specialValues = "!@#$%^&*()_";
    values = values + specialValues
  }

  //random number generator for selecting characters
  for(var i = 0; i <= (pwordInfo.length) - 1; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  };
  pwordInfo.password = password
  console.log("password is " + password);
  writePassword();
}

var pwordInfo = {
  password: null,
  length: null,
  lowercase: null,
  uppercase: null,
  numeric: null,
  special: null,
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
      window.alert("Y for yes or N for no, you twat.1");
      return pwordInfo.lowercaseSelect()
    }
    else if (promptLowercase === "y" || promptLowercase === "Y") {
      pwordInfo.lowercase = true
      console.log("lowercase set to " + pwordInfo.lowercase)
      pwordInfo.uppercaseSelect()
    }
     else if (promptLowercase === "n" || promptLowercase === "N") {
      pwordInfo.lowercase = false
      console.log("lowercase set to " + pwordInfo.lowercase)
      pwordInfo.uppercaseSelect()
    }
    else {
      window.alert("Y for yes or N for no, you twat.2");
      return pwordInfo.lowercaseSelect()
    }
  },
  //select uppercas
  uppercaseSelect: function() {
    var promptUppercase = window.prompt("Do you want uppercase letters? Y or N")
    if (promptUppercase === null || promptUppercase === "") {
      window.alert("Y for yes or N for no, you twat.3");
      return pwordInfo.uppercaseSelect()
    }
    else if (promptUppercase === "y" || promptUppercase === "Y") {
      pwordInfo.uppercase = true
      console.log("uppercase set to " + pwordInfo.uppercase)
      pwordInfo.numericSelect()
    }
    else if (promptUppercase === "n" || promptUppercase === "N") {
      pwordInfo.uppercase = false
      console.log("uppercase set to " + pwordInfo.uppercase)
      pwordInfo.numericSelect()
    }
    else {
      window.alert("Y for yes or N for no, you twat.4");
      return pwordInfo.uppercaseSelect()
    }
  },
  //select numbers
  numericSelect: function() {
    var promptNumeric = window.prompt("Do you want numbers? Y or N")
    if (promptNumeric === null || promptNumeric === "") {
      window.alert("Y for yes or N for no, you twat.5");
      return pwordInfo.numericSelect()
    }
    else if (promptNumeric === "y" || promptNumeric === "Y") {
      pwordInfo.numeric = true
      console.log("Numbers set to " + pwordInfo.numeric)
      pwordInfo.specialSelect()
    }
    else if (promptNumeric === "n" || promptNumeric === "N") {
      pwordInfo.numeric = false
      console.log("Numbers set to " + pwordInfo.numeric)
      pwordInfo.specialSelect()
    }
    else {
      window.alert("Y for yes or N for no, you twat.6");
      return pwordInfo.numericSelect()
    }
  },
  // select special characters
  specialSelect: function() {
    var promptSpecial = window.prompt("Do you want special characters? Y or N")
    if (promptSpecial === null || promptSpecial === "") {
      window.alert("Y for yes or N for no, you twat.7");
      return pwordInfo.specialSelect()
    }
    else if (promptSpecial === "y" || promptSpecial === "Y") {
      pwordInfo.special = true
      console.log("Special set to " + pwordInfo.special);
      genPword()
    }
    else if (promptSpecial === "n" || promptSpecial === "N") {
      pwordInfo.special = false
      console.log("Special set to " + pwordInfo.special);
      genPword()
    }
    else {
      window.alert("Y for yes or N for no, you twat.8");
      return pwordInfo.specialSelect()
    }
  }
}

pwordInfo.lengthSelect();
// broken button press starts criteria select
//document.getElementById("generate").onclick = pwordInfo.lengthSelect

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pwordInfo.password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

