const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${number1} multiply by ${number2}?`;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
const scoreEl = document.getElementById("score");
scoreEl.innerText = `score: ${score}`;

const correctAnswer = number1 * number2;

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  if (userAnswer === correctAnswer) {
    score++;
    updatelocalStorage();
  } else {
    score--;
    updatelocalStorage();
  }
});

function updatelocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
