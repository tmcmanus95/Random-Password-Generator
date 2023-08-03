min = "";
max = "";

// Defines the four arrays used in this exercise (numbers, special characters, lowercase letters, and capital letters)
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharactersArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "<",
  ">",
  ".",
  ",",
  "/",
  "?",
];
const capitalLettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseLettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Defines the random integer function used to select a random index in the remaining random____ functions.
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Selects a random index from the numbersArray using the randomInteger function.
function randomNumber() {
  var randomIndex = randomInteger(0, numbersArray.length - 1);
  return numbersArray[randomIndex];
}

//Selects a random index from the specialCharactersArray using the randomInteger function.
function randomSpecialCharacter() {
  var randomIndex = randomInteger(0, specialCharactersArray.length - 1);
  return specialCharactersArray[randomIndex];
}

//Selects a random index from the capitalLettersArray using the randomInteger function.
function randomCapitalLetter() {
  var randomIndex = randomInteger(0, capitalLettersArray.length - 1);
  return capitalLettersArray[randomIndex];
}

//Selects a random index from the lowercaseLettersArray using the randomInteger function.
function randomLowercaseLetter() {
  var randomIndex = randomInteger(0, lowercaseLettersArray.length - 1);
  return lowercaseLettersArray[randomIndex];
}

function generatePassword() {
  const passwordLengthInput = document.getElementById("passwordlength");
  const passwordLength = parseInt(passwordLengthInput.value);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 280) {
    alert("Please enter a valid password length between 8 and 280 characters.");
    return; // Exit the function if the password length is invalid
  }

  let password = ""; //initializes an empty string to be added to depending on the users preferences.

  const includeNumbers = document.getElementById("includeNumbers").checked; //checks to see if the user wants to have numbers in their password.
  const includeLowercaseLetters = document.getElementById(
    "includeLowercaseLetters"
  ).checked; //checks to see if the user wants to have lowerase letters in their password.
  const includeCapitalLetters = document.getElementById(
    "includeCapitalLetters"
  ).checked; //Checks to see if the user wants capital letters in their password.
  const includeSpecialCharacters = document.getElementById(
    "includeSpecialCharacters"
  ).checked; //Checks to see if the user wants special characters in their password.

  const selectedFunctions = []; //Sets an empty array for functions

  if (includeNumbers) {
    selectedFunctions.push(randomNumber); //Adds the randomNumber function to the selected functions array.
  }

  if (includeLowercaseLetters) {
    selectedFunctions.push(randomLowercaseLetter); //adds the randomLowercaseLetter function to the selected functions array
  }

  if (includeCapitalLetters) {
    selectedFunctions.push(randomCapitalLetter); // adds the randomCapitalLetter function to the selected functions array.
  }

  if (includeSpecialCharacters) {
    selectedFunctions.push(randomSpecialCharacter); // adds the randomSpecialCharacters function to the selected functions array.
  }

  if (selectedFunctions.length === 0) {
    alert(
      "Please select at least one type of character to use for your password."
    );
  } //checks to see that at least one checkbox has been selected.

  for (let i = 0; i < passwordLength; i++) {
    const randomFunctionIndex = randomInteger(0, selectedFunctions.length - 1);
    const randomFunction = selectedFunctions[randomFunctionIndex];
    const randomValue = randomFunction();
    password += randomValue;
  } //Iterates by choosing a random function from the selected fuctions array (again via the randomInteger function) until the index has reached whatever value the user inputted in the passwordlength input field.

  document.getElementById("generatedPassword").textContent = password; //sets the <p> tag to the result.
}
document
  .getElementById("generateButton")
  .addEventListener("click", generatePassword); //event listener that triggers the above code.
