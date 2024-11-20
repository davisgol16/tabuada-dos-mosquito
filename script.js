const questions = [
    {
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital de Minas Gerais?",
      options: ["Belo Horizonte", "Manaus", "Fortaleza", "Recife"],
      answer: "Belo Horizonte",
    },
    {
      question: "Qual é a capital do Paraná?",
      options: ["Curitiba", "Florianópolis", "Porto Alegre", "Campo Grande"],
      answer: "Curitiba",
    },
    {
      question: "Qual é a capital do Ceará?",
      options: ["Fortaleza", "Natal", "João Pessoa", "Aracaju"],
      answer: "Fortaleza",
    },
    {
      question: "Qual é a capital do Amazonas?",
      options: ["Manaus", "Boa Vista", "Belém", "Porto Velho"],
      answer: "Manaus",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    resetOptions();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
      optionsContainer.appendChild(button);
    });
  }
  
  function resetOptions() {
    optionsContainer.innerHTML = "";
    nextButton.classList.add("hidden");
  }
  
  function selectAnswer(selectedButton, correctAnswer) {
    const isCorrect = selectedButton.textContent === correctAnswer;
    selectedButton.classList.add(isCorrect ? "correct" : "wrong");
  
    Array.from(optionsContainer.children).forEach((button) => {
      button.disabled = true;
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
  
    if (isCorrect) score++;
    nextButton.classList.remove("hidden");
  }
  
  function showScore() {
    questionElement.textContent = "Fim do quiz!";
    optionsContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    scoreElement.textContent = `Pontuação final: ${score} de ${questions.length}`;
    scoreElement.classList.remove("hidden");
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  loadQuestion();
  