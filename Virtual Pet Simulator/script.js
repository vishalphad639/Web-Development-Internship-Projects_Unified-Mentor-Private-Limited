let hunger = 100;
let happiness = 100;
let energy = 100;
let petImg = document.getElementById("pet");
const hungerProgress = document.getElementById("hunger");
const happinessProgress = document.getElementById("happiness");
const energyProgress = document.getElementById("energy");

function updatePetImage() {
  if (hunger < 30) {
    petImg.src = "hungry pet.avif"; // Image when hungry
  } else if (happiness < 30) {
    petImg.src = "sad pet.jpg"; // Image when sad
  } else if (energy < 30) {
    petImg.src = "tired pet.jpeg"; // Image when tired
  } else {
    petImg.src = "happy pet.avif"; // Image when happy
  }
}

function feedPet() {
  if (hunger < 100) {
    hunger += 20;
    happiness += 5;
  }
  updateAttributes();
}

function playWithPet() {
  if (energy > 0) {
    happiness += 10;
    energy -= 10;
  }
  updateAttributes();
}

function sleepPet() {
  energy = 100;
  hunger -= 10;
  happiness -= 5;
  updateAttributes();
}

function updateAttributes() {
  hungerProgress.value = hunger;
  happinessProgress.value = happiness;
  energyProgress.value = energy;
  updatePetImage();
}

document.getElementById("feedBtn").addEventListener("click", feedPet);
document.getElementById("playBtn").addEventListener("click", playWithPet);
document.getElementById("sleepBtn").addEventListener("click", sleepPet);

// Simulate gradual decrease in attributes over time
setInterval(() => {
  hunger -= 1;
  happiness -= 0.5;
  energy -= 0.5;
  updateAttributes();
}, 10000); // Update every 10 seconds

updatePetImage();
