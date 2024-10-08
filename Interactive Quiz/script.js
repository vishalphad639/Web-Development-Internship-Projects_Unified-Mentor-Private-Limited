const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome", "Lisbon"],
    correct: 2,
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
      "Ernest Hemingway",
    ],
    correct: 2,
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Earth", "Mars", "Mercury", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Osmium", "Oxygen", "Gold", "Silver", "Iron"],
    correct: 1,
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      "Elephant",
      "Blue Whale",
      "Giraffe",
      "Great White Shark",
      "Hippopotamus",
    ],
    correct: 1,
  },
];

function loadQuiz() {
  const questionsDiv = document.getElementById("questions");
  quizQuestions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
          <h3>${index + 1}. ${q.question}</h3>
          ${q.answers
            .map(
              (answer, i) => `
              <label>
                  <input type="radio" name="question${index}" value="${i}">
                  ${answer}
              </label>
          `
            )
            .join("")}
      `;
    questionsDiv.appendChild(questionElement);
  });
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  quizQuestions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
      score++;
    }
  });
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You scored ${score} out of ${quizQuestions.length} questions correctly.`;
  resultDiv.style.display = "block"; // Show result
});

// Reset button functionality
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("quizForm").reset(); // Reset the quiz form
  document.getElementById("result").style.display = "none"; // Hide the result
});

loadQuiz();
