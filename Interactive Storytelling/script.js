const storyData = {
  start: {
    title: "The Enchanted Forest",
    text: "You find yourself standing at the edge of an enchanted forest. Do you dare to enter?",
    choices: [
      { text: "Yes, I will enter!", next: "enterForest" },
      { text: "No, I will stay back.", next: "stayBack" },
    ],
  },
  enterForest: {
    title: "Inside the Forest",
    text: "You step into the forest and feel a magical presence around you. Suddenly, you see a glowing path and a dark path.",
    choices: [
      { text: "Take the glowing path.", next: "glowingPath" },
      { text: "Take the dark path.", next: "darkPath" },
    ],
  },
  stayBack: {
    title: "Stay Back",
    text: "You decide to stay back. The forest remains a mystery. The end.",
    choices: [],
  },
  glowingPath: {
    title: "The Glowing Path",
    text: "You follow the glowing path and discover a beautiful fairy. She grants you a wish.",
    choices: [
      { text: "Wish for treasure.", next: "treasure" },
      { text: "Wish to return home.", next: "home" },
    ],
  },
  darkPath: {
    title: "The Dark Path",
    text: "You take the dark path and find a sleeping dragon. You quietly tiptoe away.",
    choices: [
      { text: "Return to the forest entrance.", next: "start" },
      { text: "Try to pet the dragon.", next: "dragon" },
    ],
  },
  treasure: {
    title: "Treasure",
    text: "You are granted treasure beyond your wildest dreams! The end.",
    choices: [],
  },
  home: {
    title: "Home",
    text: "You return home, safe and sound. The end.",
    choices: [],
  },
  dragon: {
    title: "Dragon",
    text: "The dragon wakes up and sees you! You quickly run back to the entrance.",
    choices: [{ text: "Start over.", next: "start" }],
  },
};

function loadStory(part) {
  const story = storyData[part];
  document.getElementById("story-title").textContent = story.title;
  document.getElementById("story-text").textContent = story.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = ""; // Clear previous choices

  story.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => loadStory(choice.next);
    choicesDiv.appendChild(button);
  });

  document.getElementById("restartBtn").style.display =
    part === "start" ? "none" : "block"; // Show restart button only at the start
}

// Restart the story
document.getElementById("restartBtn").onclick = () => loadStory("start");

// Load the initial story part
loadStory("start");
