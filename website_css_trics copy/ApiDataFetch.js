let QuestionsAnswered = 0;
let correct;

class DataFetch {
  constructor(api) {
    this.api = api;
    this.data;
    this.fetch();
  }

  async fetch() {
    const response = await fetch(this.api);
    this.data = await response.json();
    this.displayQuestions();
  }

  displayQuestions() {
    let questionDiv = document.getElementById("question");
    questionDiv.innerText = this.data.results[QuestionsAnswered].question;

    // Create a copy of the incorrect answers array
    let answers = [...this.data.results[QuestionsAnswered].incorrect_answers];
    correct = this.data.results[QuestionsAnswered].correct_answer;
    answers.push(correct); // Add the correct answer to the answers array
    console.log(answers);
    console.log(correct);

    for (let i = 0; i < 4; i++) {
      let option = document.getElementById(`${i + 1}`);
      let num = Math.floor(random(0, answers.length));
      option.innerText = answers[num];
      answers.splice(num, 1); // Remove the selected answer from the array
    }
  }

  checkAnswers() {
    for (let i = 0; i < 4; i++) {
      let answerOption = document.getElementById(`${i + 1}`);
      answerOption.onclick = () => {
        if (answerOption.innerHTML == correct) {
          answerOption.style.backgroundColor = "green";
          QuestionsAnswered++;
          setTimeout(() => {
            if (QuestionsAnswered < this.data.results.length) {
              answerOption.style.backgroundColor = "";
              this.displayQuestions();
            } else {
              console.log("You did it!");
            }
          }, 500);
          this.displayQuestions();
        } else {
          answerOption.style.backgroundColor = "red";
          setTimeout(() => {
            answerOption.style.backgroundColor = "";
          }, 1000);
        }
      };
    }
  }
}
