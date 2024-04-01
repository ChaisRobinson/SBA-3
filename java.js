//------------------javascript for guesss the anime characrer  --------------------//
// Randomized pick for character
let randomNum = Math.floor(Math.random() * 6) + 1;
// Cache DOM elements
const animeContainer1 = document.getElementById("anime1");
const animeContainer2 = document.getElementById("anime2");
const animeContainer3 = document.getElementById("anime3");
const animeContainer4 = document.getElementById("anime4");
const animeContainer5 = document.getElementById("anime5");
// If statement to show the container corresponding to the random number
if (randomNum === 1) {
  animeContainer1.style.display = "block";
} else if (randomNum === 2) {
  animeContainer2.style.display = "block";
} else if (randomNum === 3) {
  animeContainer3.style.display = "block";
} else if (randomNum === 4) {
  animeContainer4.style.display = "block";
} else {
  animeContainer5.style.display = "block";
}

// Main function for the user to guess the anime character
const userPrompt = () => {
  let userInput = prompt("Guess the anime character?");
  console.log(userInput);
  if (anime1.style.display !== "none") {
    if (userInput === "Goku" || userInput === "goku") {
      //Check is user input matches character name
      let myImage = document.querySelector("#goku"); // Selecting the image element
      let animeName = document.querySelector("#gok"); //Selecting the image name
      toggleFilter(myImage, animeName); //Filters through anime charcters to get the correct one
    } else {
      alert("Guess Again"); // Alert user to guess again
    }
  } else if (anime2.style.display != "none") {
    if (userInput === "Luffy" || userInput === "luffy") {
      //Check is user input matches character name
      let myImage = document.querySelector("#luffy"); // Selecting the image element
      let animeName = document.querySelector("#luf"); //Selecting the image name
      toggleFilter(myImage, animeName); //Filters through anime charcters to get the correct one
    } else {
      alert("Guess Again"); // Alert user to guess again
    }
  } else if (anime3.style.display != "none") {
    if (userInput === "Ash" || userInput === "ash") {
      //Check is user input matches character name
      let myImage = document.querySelector("#ash"); // Selecting the image element
      let animeName = document.querySelector("#a"); //Selecting the image name
      toggleFilter(myImage, animeName); //Filters through anime charcters to get the correct one
    } else {
      alert("Guess Again"); // Alert user to guess again
    }
  } else if (anime4.style.display != "none") {
    if (userInput === "Naruto" || userInput === "naruto") {
      //Check is user input matches character name
      let myImage = document.querySelector("#naruto"); // Selecting the image element
      let animeName = document.querySelector("#nar"); //Selecting the image name
      toggleFilter(myImage, animeName); //Filters through anime charcters to get the correct one
    } else {
      alert("Guess Again"); // Alert user to guess again
    }
  } else if (anime5.style.display != "none") {
    if (userInput === "Usagi" || userInput === "usagi") {
      //Check is user input matches character name
      let myImage = document.querySelector("#usagi"); // Selecting the image element
      let animeName = document.querySelector("#usa"); //Selecting the image name
      toggleFilter(myImage, animeName); //Filters through anime charcters to get the correct one
    } else {
      alert("Guess Again"); // Alert user to guess again
    }
  }
};

// Function to toggle the black filter
function toggleFilter(myImage, pokeName) {
  myImage.classList.add("filtered"); // Adding the 'filtered' class to the image element
  pokeName.classList.add("opacity"); // Adding the 'opacity' class to the image name element
}
// Alert message if the guess is correct
const alertMessage = () => {
  alert("Yay");
};
// Function to refresh the page
const refreshPage = () => location.reload();

//------------------javascript for guesss the anime characrer end --------------------//

//--------------------javascript for random image generator------------------------//
// Cache DOM elements
const pictureForm = document.getElementById("imageForm");
const widthValue = document.querySelector("#width");
const heightValue = document.querySelector("#height");
const createBtn = document.getElementById("createBtn");
const imageContainer = document.getElementById("imageContainer");

// Event listener for form submission
pictureForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Parse width and height input values to integers
  const width = parseInt(widthValue.value);
  const height = parseInt(heightValue.value);

  // If statement to verify width and height input values
  if (
    isNaN(width) ||
    isNaN(height) ||
    width < 100 ||
    width > 700 ||
    height < 100 ||
    height > 600
  ) {
    // Show error message if input values are invalid
    showError(
      "Width and height must be numeric values between 100 and 700 (width) and 100 and 600 (height)."
    );
    return;
  }

  // Clear previous image from image container
  imageContainer.innerHTML = "";

  // Create an image element
  const image = document.createElement("img");
  
  // Set image source to a random Lorem Ipsum image based on width and height
  image.src = `https://picsum.photos/${width}/${height}`;
  
  // Set alt attribute for accessibility
  image.alt = `Random Image ${width}x${height}`;

  // Append the image to the image container
  imageContainer.appendChild(image);
});

// Event listeners for input validation
widthValue.addEventListener("input", validateInput);
heightValue.addEventListener("input", validateInput);

// Function to validate width and height input values
function validateInput() {
  const width = parseInt(widthValue.value);
  const height = parseInt(heightValue.value);

  // Disable generate button and show error message if input values are invalid
  if (
    isNaN(width) ||
    isNaN(height) ||
    width < 100 ||
    width > 700 ||
    height < 100 ||
    height > 600
  ) {
    createBtn.disabled = true;
    showError(
      "Width and height must be numeric values between 100 and 700 (width) and 100 and 600 (height)."
    );
  } else {
    // Enable generate button and clear previous error messages
    createBtn.disabled = false;
    clearErrors();
  }
}

// Function to show error message
function showError(message) {
  // Clear previous error messages
  clearErrors();
  // Create a new paragraph element for the error message
  const errorElement = document.createElement("p");
  // Set the text content of the error element
  errorElement.textContent = message;
  // Add a CSS class to style the error message
  errorElement.classList.add("error");
  // Append the error message to the image container
  imageContainer.appendChild(errorElement);
}

// Function to clear error messages
function clearErrors() {
  // Select all elements with the "error" class
  const errorElements = document.querySelectorAll(".error");
  // Remove each error element from the DOM
  errorElements.forEach((element) => element.remove());
}

// Log browser properties
console.log("User agent:", navigator.userAgent);
console.log("Screen width:", screen.width);



//--------------------javascript for random image generator end-----------------------//
