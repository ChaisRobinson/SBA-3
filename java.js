//--------------------javascript for random image generator------------------------//
const imageForm = document.getElementById("imageForm");
const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const generateBtn = document.getElementById("generateBtn");
const imageContainer = document.getElementById("imageContainer");

imageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);

  if (isNaN(width) || isNaN(height) || width < 100 || width > 800 || height < 100 || height > 600) {
    showError("Width and height must be numeric values between 100 and 800 (width) and 100 and 600 (height).");
    return;
  }

  imageContainer.innerHTML = "";

  const image = document.createElement("img");
  image.src = `https://picsum.photos/${width}/${height}`;
  image.alt = `Random Image ${width}x${height}`;

  imageContainer.appendChild(image);
});

widthInput.addEventListener("input", validateInput);
heightInput.addEventListener("input", validateInput);

function validateInput() {
  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);

  if (isNaN(width) || isNaN(height) || width < 100 || width > 800 || height < 100 || height > 600) {
    generateBtn.disabled = true;
    showError("Width and height must be numeric values between 100 and 800 (width) and 100 and 600 (height).");
  } else {
    generateBtn.disabled = false;
    clearErrors();
  }
}

function showError(message) {
  clearErrors();
  const errorElement = document.createElement("p");
  errorElement.textContent = message;
  errorElement.classList.add("error");
  imageContainer.appendChild(errorElement);
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(element => element.remove());
}

console.log("User agent:", navigator.userAgent);
console.log("Screen width:", screen.width);

//------------------javascript for random image generator end --------------------//


//------------------javascript for guesss the anime characrer  --------------------//
let randomNum = Math.floor(Math.random() * 6) + 1;

const animeContainer1 = document.getElementById("anime1");
const animeContainer2 = document.getElementById("anime2");
const animeContainer3 = document.getElementById("anime3");
const animeContainer4 = document.getElementById("anime4");
const animeContainer5 = document.getElementById("anime5");

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

const userPrompt = () => {
  let userInput = prompt("Guess the anime character?");
  console.log(userInput);
  if (anime1.style.display !== "none") {
    if (userInput === "Goku" || userInput === "goku") {
      let myImage = document.querySelector("#goku"); // Selecting the image element
      let animeName = document.querySelector("#gok");
      toggleFilter(myImage, animeName);
    } else {
      alert("Guess Again");
    }
  } else if (anime2.style.display != "none") {
    if (userInput === "Luffy" || userInput === "luffy") {
      let myImage = document.querySelector("#luffy"); // Selecting the image element
      let animeName = document.querySelector("#luf");
      toggleFilter(myImage, animeName);
    } else {
      alert("Guess Again");
    }
  } else if (anime3.style.display != "none") {
    if (userInput === "Ash" || userInput === "ash") {
      let myImage = document.querySelector("#ash"); // Selecting the image element
      let pokeName = document.querySelector("#a");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  } else if (anime4.style.display != "none") {
    if (userInput === "Naruto" || userInput === "naruto") {
      let myImage = document.querySelector("#naruto"); // Selecting the image element
      let animeName = document.querySelector("#nar");
      toggleFilter(myImage, animeName);
    } else {
      alert("Guess Again");
    }
  } else if (anime5.style.display != "none") {
    if (userInput === "Usagi" || userInput === "usagi") {
      let myImage = document.querySelector("#usagi"); // Selecting the image element
      let pokeName = document.querySelector("#usa");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  }
};

// Function to toggle the black filter
function toggleFilter(myImage, pokeName) {
  myImage.classList.add("filtered"); // Removing the 'color-change' class
  pokeName.classList.add("opacity");
}

const alertMessage = () => {
  alert("Yay");
};

const refreshPage = () => location.reload();

//------------------javascript for guesss the anime characrer end --------------------//
