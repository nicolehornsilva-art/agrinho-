/* =========================================
   AGRO FORTE - FUTURO SUSTENTÁVEL
   JAVASCRIPT COMPLETO PARA CODEPEN
========================================= */

/* =========================================
   MENSAGEM DE BOAS-VINDAS
========================================= */

window.onload = () => {
  showNotification(
    "🌱 Bem-vindo ao Agro Forte - Futuro Sustentável!"
  );

  updateClock();
  setInterval(updateClock, 1000);
};

/* =========================================
   RELÓGIO DIGITAL
========================================= */

function updateClock() {
  const clock = document.getElementById("clock");

  if (clock) {
    const now = new Date();

    clock.innerHTML =
      "🕒 " +
      now.toLocaleTimeString("pt-BR");
  }
}

/* =========================================
   SISTEMA DE NOTIFICAÇÃO
========================================= */

function showNotification(message) {

  const notification =
    document.createElement("div");

  notification.innerText = message;

  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.background =
    "linear-gradient(to right,#2e7d32,#43a047)";
  notification.style.color = "white";
  notification.style.padding = "15px 25px";
  notification.style.borderRadius = "15px";
  notification.style.boxShadow =
    "0 8px 20px rgba(0,0,0,0.2)";
  notification.style.zIndex = "9999";
  notification.style.fontWeight = "bold";
  notification.style.animation =
    "fadeIn 0.5s ease";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
}

/* =========================================
   QUIZ SUSTENTÁVEL
========================================= */

const quizQuestions = [

  {
    question:
      "🌾 Qual tecnologia ajuda a monitorar plantações?",
    options: [
      "🚁 Drones",
      "📺 TV antiga",
      "🎮 Fliperama",
      "📻 Rádio"
    ],
    answer: 0
  },

  {
    question:
      "💧 O que ajuda a economizar água no campo?",
    options: [
      "🚿 Mangueira aberta",
      "🌧️ Irrigação inteligente",
      "🧊 Gelo",
      "🚗 Lava-rápido"
    ],
    answer: 1
  },

  {
    question:
      "☀️ Qual energia é sustentável?",
    options: [
      "🛢️ Petróleo",
      "🔥 Carvão",
      "☀️ Energia Solar",
      "💨 Fumaça"
    ],
    answer: 2
  },

  {
    question:
      "♻️ O que significa reciclar?",
    options: [
      "🌳 Plantar árvores",
      "🗑️ Jogar lixo na rua",
      "♻️ Reutilizar materiais",
      "🔥 Queimar plástico"
    ],
    answer: 2
  }

];

let currentQuestion = 0;
let quizScore = 0;

/* =========================================
   MOSTRAR QUESTÕES
========================================= */

function loadQuestion() {

  const questionEl =
    document.getElementById("question");

  const optionsEl =
    document.getElementById("options");

  const scoreEl =
    document.getElementById("quizScore");

  if (!questionEl || !optionsEl) return;

  const q = quizQuestions[currentQuestion];

  questionEl.innerHTML = q.question;

  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.classList.add("option");

    button.innerHTML = option;

    button.onclick = () =>
      checkAnswer(index);

    optionsEl.appendChild(button);
  });

  if (scoreEl) {
    scoreEl.innerHTML =
      "🏆 Pontos: " + quizScore;
  }
}

/* =========================================
   VERIFICAR RESPOSTA
========================================= */

function checkAnswer(selected) {

  const correct =
    quizQuestions[currentQuestion].answer;

  if (selected === correct) {

    quizScore += 10;

    showNotification(
      "✅ Resposta correta!"
    );

  } else {

    showNotification(
      "❌ Resposta incorreta!"
    );
  }

  currentQuestion++;

  if (
    currentQuestion <
    quizQuestions.length
  ) {

    setTimeout(() => {
      loadQuestion();
    }, 1000);

  } else {

    showFinalResult();
  }
}

/* =========================================
   RESULTADO FINAL
========================================= */

function showFinalResult() {

  const quizContainer =
    document.getElementById("quizContainer");

  if (quizContainer) {

    quizContainer.innerHTML = `
      <h2>🎉 Quiz Finalizado!</h2>

      <p style="font-size:1.5rem;margin-top:20px;">
        Você fez
        <strong>${quizScore} pontos</strong>
      </p>

      <button onclick="restartQuiz()">
        🔄 Jogar Novamente
      </button>
    `;
  }
}

/* =========================================
   REINICIAR QUIZ
========================================= */

function restartQuiz() {

  currentQuestion = 0;
  quizScore = 0;

  location.reload();
}

/* =========================================
   JOGO DA RECICLAGEM
========================================= */

let recyclePoints = 0;

function recycleItem(correct) {

  const score =
    document.getElementById("recycleScore");

  if (correct) {

    recyclePoints += 5;

    showNotification(
      "♻️ Excelente! Item reciclável."
    );

  } else {

    recyclePoints -= 3;

    showNotification(
      "⚠️ Esse item não vai na reciclagem!"
    );
  }

  if (score) {

    score.innerHTML =
      "🌱 Pontos de Sustentabilidade: " +
      recyclePoints;
  }
}

/* =========================================
   MENSAGENS SUSTENTÁVEIS
========================================= */

const ecoMessages = [

  "🌎 Cuidar da natureza é cuidar do futuro.",

  "🚜 O agro sustentável protege o planeta.",

  "💧 Economizar água salva vidas.",

  "🌱 Plantar árvores melhora o clima.",

  "☀️ Energia limpa transforma o mundo.",

  "♻️ Reciclar reduz a poluição.",

  "🐝 Preservar os animais mantém o equilíbrio ambiental.",

  "🌿 Tecnologia e natureza podem crescer juntas."

];

/* =========================================
   GERAR MENSAGEM
========================================= */

function generateEcoMessage() {

  const random =
    ecoMessages[
      Math.floor(
        Math.random() *
        ecoMessages.length
      )
    ];

  const messageBox =
    document.getElementById("ecoMessage");

  if (messageBox) {

    messageBox.innerHTML = random;
  }
}

/* =========================================
   JOGO DE CLIQUE RÁPIDO
========================================= */

let clickScore = 0;

function addPoint() {

  clickScore++;

  const score =
    document.getElementById("clickScore");

  if (score) {

    score.innerHTML =
      "⚡ Energia Verde: " +
      clickScore;
  }

  if (clickScore >= 20) {

    showNotification(
      "🏆 Você gerou energia sustentável!"
    );
  }
}

/* =========================================
   FATOS SOBRE SUSTENTABILIDADE
========================================= */

const facts = [

  "🌳 Uma árvore pode absorver até 150 kg de CO₂ por ano.",

  "💧 A irrigação inteligente economiza milhares de litros de água.",

  "☀️ A energia solar é uma das fontes mais limpas do planeta.",

  "🚁 Drones ajudam produtores a reduzir desperdícios agrícolas.",

  "♻️ Reciclar papel salva milhões de árvores."

];

function showFact() {

  const fact =
    facts[
      Math.floor(
        Math.random() *
        facts.length
      )
    ];

  const factBox =
    document.getElementById("factBox");

  if (factBox) {

    factBox.innerHTML = fact;
  }
}

/* =========================================
   CONTADOR DE ÁRVORES
========================================= */

let trees = 0;

function plantTree() {

  trees++;

  const treeCounter =
    document.getElementById("treeCounter");

  if (treeCounter) {

    treeCounter.innerHTML =
      "🌳 Árvores Plantadas: " + trees;
  }

  if (trees === 10) {

    showNotification(
      "🎉 Você ajudou a reflorestar a natureza!"
    );
  }
}

/* =========================================
   SOMENTE EFEITO VISUAL
========================================= */

document.addEventListener(
  "mousemove",
  (e) => {

    const leaf =
      document.createElement("div");

    leaf.innerHTML = "🍃";

    leaf.style.position = "fixed";
    leaf.style.left = e.clientX + "px";
    leaf.style.top = e.clientY + "px";
    leaf.style.pointerEvents = "none";
    leaf.style.fontSize = "18px";
    leaf.style.opacity = "0.8";
    leaf.style.zIndex = "999";

    document.body.appendChild(leaf);

    setTimeout(() => {
      leaf.remove();
    }, 1000);
  }
);

/* =========================================
   BARRA DE PROGRESSO
========================================= */

function updateProgress(percent) {

  const progress =
    document.getElementById("progress");

  if (progress) {

    progress.style.width =
      percent + "%";
  }
}

/* =========================================
   ANIMAÇÃO DE CONTAGEM
========================================= */

function animateCounter(id, target) {

  let count = 0;

  const element =
    document.getElementById(id);

  const interval =
    setInterval(() => {

      count++;

      if (element) {

        element.innerHTML = count;
      }

      if (count >= target) {

        clearInterval(interval);
      }

    }, 30);
}

/* =========================================
   INICIAR CONTADORES
========================================= */

animateCounter("farmCounter", 150);
animateCounter("treeSaved", 500);
animateCounter("waterSaved", 1000);

/* =========================================
   SCROLL SUAVE
========================================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener(
    "click",
    function(e) {

      e.preventDefault();

      document.querySelector(
        this.getAttribute("href")
      ).scrollIntoView({

        behavior: "smooth"
      });
    }
  );
});

/* =========================================
   CARREGAR QUIZ AUTOMATICAMENTE
========================================= */

setTimeout(() => {

  loadQuestion();

}, 500);