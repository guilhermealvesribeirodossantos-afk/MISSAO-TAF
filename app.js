
const APP_CONFIG = {
  referenceWorkDate: new Date("2026-09-11T12:00:00"),
  workStart: "08:00",
  workEnd: "20:00",
  leaveHome: "07:45"
};

const WORKOUTS = {
  trabalho: {
    title: "SESSÃO CURTA DE PREPARAÇÃO PMMG",
    duration: "35 min",
    dayLabel: "DIA DE TRABALHO",
    dayTime: "08:00 – 20:00",
    dayNote: "Saída de casa 07:45",
    exercises: [
      {
        icon: "🏃",
        name: "Corrida leve",
        purpose: "Construir base aeróbica sem esgotar as pernas.",
        prescription: "20 minutos",
        rest: "—",
        timerSeconds: 1200,
        resultType: "distance",
        resultLabel: "Distância realizada (km)",
        resultPlaceholder: "Ex.: 3.2",
        instructions: [
          "Comece em ritmo confortável.",
          "Mantenha a respiração controlada.",
          "Não transforme esta sessão em teste máximo.",
          "Se precisar caminhar, retome a corrida quando recuperar o fôlego."
        ],
        objective: "Terminar sentindo que ainda conseguiria continuar por alguns minutos."
      },
      {
        icon: "💪",
        name: "Progressão de barra",
        purpose: "Construir força específica até conquistar a primeira barra.",
        prescription: "3 séries",
        rest: "60–90 s",
        restSeconds: 75,
        resultType: "number",
        resultLabel: "Melhor tempo controlado na progressão (segundos)",
        resultPlaceholder: "Ex.: 8",
        instructions: [
          "Comece com retrações escapulares controladas.",
          "Faça isometria se conseguir chegar ao topo com apoio seguro.",
          "Use negativas lentas somente com uma forma segura de começar na posição alta.",
          "Pare antes de perder totalmente o controle."
        ],
        objective: "Fortalecer costas, bíceps, pegada e controle escapular para sair de 0 para a primeira barra."
      },
      {
        icon: "🔥",
        name: "Core / remador",
        purpose: "Aprender o padrão do abdominal remador e fortalecer o tronco.",
        prescription: "3 séries técnicas",
        rest: "45–60 s",
        restSeconds: 50,
        resultType: "number",
        resultLabel: "Melhor série com técnica (repetições)",
        resultPlaceholder: "Ex.: 10",
        instructions: [
          "Priorize aprender o movimento sem velocidade.",
          "Mantenha o movimento controlado.",
          "Não puxe o pescoço.",
          "Pare a série quando a técnica começar a quebrar."
        ],
        objective: "Construir técnica antes de iniciar testes cronometrados."
      },
      {
        icon: "🧘",
        name: "Mobilidade",
        purpose: "Reduzir rigidez e preparar o corpo para o próximo treino.",
        prescription: "5 minutos",
        rest: "—",
        timerSeconds: 300,
        resultType: "none",
        instructions: [
          "Mobilize tornozelos e panturrilhas.",
          "Faça mobilidade de quadril.",
          "Alongue posteriores de forma leve.",
          "Não force posições dolorosas."
        ],
        objective: "Melhorar recuperação e manter consistência."
      }
    ]
  },

  folgaUtil: {
    title: "TREINO PRINCIPAL DE PREPARAÇÃO PMMG",
    duration: "60–75 min",
    dayLabel: "DIA DE FOLGA",
    dayTime: "TREINO PRINCIPAL",
    dayNote: "Buscar filha: sair 15:40 • creche 16:00",
    exercises: [
      {
        icon: "🏃",
        name: "Corrida de base",
        purpose: "Construir resistência contínua para os 2.400 m.",
        prescription: "25–35 minutos",
        rest: "—",
        timerSeconds: 1800,
        resultType: "distance",
        resultLabel: "Distância realizada (km)",
        resultPlaceholder: "Ex.: 5.0",
        instructions: [
          "Comece em ritmo confortável.",
          "Tente reduzir as pausas ao longo das semanas.",
          "Não faça sprint nesta sessão.",
          "Registre a distância ao terminar."
        ],
        objective: "Aumentar a capacidade de correr continuamente antes de acelerar."
      },
      {
        icon: "💪",
        name: "Progressão para primeira barra",
        purpose: "Dar prioridade máxima à evolução na barra fixa.",
        prescription: "4 blocos",
        rest: "60–90 s",
        restSeconds: 75,
        resultType: "number",
        resultLabel: "Melhor tempo controlado na progressão (segundos)",
        resultPlaceholder: "Ex.: 10",
        instructions: [
          "Faça retrações escapulares.",
          "Use isometrias seguras.",
          "Faça negativas apenas com apoio seguro.",
          "Priorize controle em vez de quantidade."
        ],
        objective: "Acumular força específica sem depender de academia."
      },
      {
        icon: "🔥",
        name: "Abdominal remador",
        purpose: "Aprender o exercício antes de perseguir velocidade.",
        prescription: "4 séries técnicas",
        rest: "45–60 s",
        restSeconds: 50,
        resultType: "number",
        resultLabel: "Melhor série técnica (repetições)",
        resultPlaceholder: "Ex.: 12",
        instructions: [
          "Faça repetições controladas.",
          "Coordene tronco e pernas.",
          "Evite embalo excessivo.",
          "Pare quando a execução perder qualidade."
        ],
        objective: "Criar uma execução repetível para futuramente medir desempenho."
      },
      {
        icon: "🤸",
        name: "Flexões",
        purpose: "Manter resistência de membros superiores.",
        prescription: "4 séries submáximas",
        rest: "60 s",
        restSeconds: 60,
        resultType: "number",
        resultLabel: "Melhor série (repetições)",
        resultPlaceholder: "Ex.: 15",
        instructions: [
          "Mantenha o corpo alinhado.",
          "Desça de forma controlada.",
          "Pare antes de perder a técnica.",
          "Não é necessário atingir a falha em todas as séries."
        ],
        objective: "Manter a base de força e resistência."
      },
      {
        icon: "🪢",
        name: "Corda complementar",
        purpose: "Trabalhar condicionamento e coordenação.",
        prescription: "1.000–2.000 pulos",
        rest: "30–60 s",
        restSeconds: 45,
        resultType: "number",
        resultLabel: "Total de pulos",
        resultPlaceholder: "Ex.: 1600",
        instructions: [
          "Divida em blocos de 200 pulos.",
          "Use saltos baixos e econômicos.",
          "Reduza o volume se a panturrilha estiver muito cansada.",
          "A corda complementa a corrida; não substitui a corrida."
        ],
        objective: "Usar sua experiência com corda sem prejudicar a recuperação."
      },
      {
        icon: "🧘",
        name: "Mobilidade e recuperação",
        purpose: "Encerrar o treino reduzindo tensão.",
        prescription: "8–10 minutos",
        rest: "—",
        timerSeconds: 480,
        resultType: "none",
        instructions: [
          "Panturrilhas e tornozelos.",
          "Posteriores de coxa.",
          "Quadril.",
          "Ombros e dorsais."
        ],
        objective: "Melhorar recuperação para manter consistência."
      }
    ]
  },

  folgaFimDeSemana: {
    title: "SESSÃO OBJETIVA DE PREPARAÇÃO PMMG",
    duration: "35–50 min",
    dayLabel: "FOLGA + FILHA",
    dayTime: "TREINO OBJETIVO",
    dayNote: "Rotina com sua filha aproximadamente 08:30 – 19:00",
    exercises: [
      {
        icon: "🏃",
        name: "Corrida curta controlada",
        purpose: "Manter frequência de corrida com uma sessão objetiva.",
        prescription: "20–25 minutos",
        rest: "—",
        timerSeconds: 1200,
        resultType: "distance",
        resultLabel: "Distância realizada (km)",
        resultPlaceholder: "Ex.: 3.5",
        instructions: [
          "Use ritmo confortável.",
          "Evite teste máximo.",
          "Priorize continuidade.",
          "Se o dia estiver apertado, esta é a parte principal."
        ],
        objective: "Manter consistência semanal na corrida."
      },
      {
        icon: "💪",
        name: "Barra — técnica e força",
        purpose: "Manter frequência no trabalho para a primeira barra.",
        prescription: "3 blocos",
        rest: "60–90 s",
        restSeconds: 75,
        resultType: "number",
        resultLabel: "Melhor tempo controlado na progressão (segundos)",
        resultPlaceholder: "Ex.: 8",
        instructions: [
          "Retrações escapulares.",
          "Isometrias seguras.",
          "Negativas com apoio seguro.",
          "Pare antes de perder o controle."
        ],
        objective: "Manter estímulo frequente sem treino longo."
      },
      {
        icon: "🔥",
        name: "Core rápido",
        purpose: "Reforçar tronco e técnica do remador.",
        prescription: "3 séries",
        rest: "45 s",
        restSeconds: 45,
        resultType: "number",
        resultLabel: "Melhor série técnica (repetições)",
        resultPlaceholder: "Ex.: 10",
        instructions: [
          "Execução controlada.",
          "Técnica antes de velocidade.",
          "Não puxe o pescoço.",
          "Pare ao perder coordenação."
        ],
        objective: "Consolidar o movimento do remador."
      },
      {
        icon: "🧘",
        name: "Mobilidade",
        purpose: "Fechar a sessão e facilitar recuperação.",
        prescription: "5 minutos",
        rest: "—",
        timerSeconds: 300,
        resultType: "none",
        instructions: [
          "Panturrilha.",
          "Tornozelo.",
          "Quadril.",
          "Dorsais e ombros."
        ],
        objective: "Chegar melhor ao próximo treino."
      }
    ]
  }
};

const state = {
  workoutKey: "trabalho",
  exerciseIndex: 0,
  completedExercises: new Set(),
  results: {},
  timerId: null,
  timerRemaining: 0,
  timerInitial: 0,
  timerRunning: false,
  timerMode: "exercise",
  timerOnComplete: null,
  coachSeriesCurrent: 1,
  coachSeriesTotal: 1,
  coachSeriesFinished: false,
  coachWaitingRest: false
};

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
}

function getDiffDays(dateA, dateB) {
  return Math.round((normalizeDate(dateA) - normalizeDate(dateB)) / 86400000);
}

function isWorkDay(date) {
  return Math.abs(getDiffDays(date, APP_CONFIG.referenceWorkDate)) % 2 === 0;
}

function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function getWorkoutKeyForDate(date) {
  if (isWorkDay(date)) return "trabalho";
  return isWeekend(date) ? "folgaFimDeSemana" : "folgaUtil";
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date).toUpperCase();
}

function formatShortWeekday(date) {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "short" })
    .format(date).replace(".", "").slice(0, 3).toUpperCase();
}

function formatDayMonth(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit"
  }).format(date);
}

function getStoredHistory() {
  try {
    return JSON.parse(localStorage.getItem("missaoTAF.history")) || [];
  } catch {
    return [];
  }
}

function saveWorkoutHistory(entry) {
  const history = getStoredHistory();
  history.push(entry);
  localStorage.setItem("missaoTAF.history", JSON.stringify(history));
}

function calculateReadiness() {
  const completed = getStoredHistory().length;
  return Math.min(100, 8 + completed * 4);
}

function renderReadiness() {
  const value = calculateReadiness();
  document.getElementById("readinessValue").textContent = `${value}%`;
  document.getElementById("progressPercent").textContent = `${value}%`;

  const ring = document.querySelector(".ring");
  if (ring) {
    const deg = value * 3.6;
    ring.style.background = `conic-gradient(var(--green) 0 ${deg}deg, #202921 ${deg}deg 360deg)`;
  }
}

function renderToday() {
  const today = new Date();
  state.workoutKey = getWorkoutKeyForDate(today);
  const workout = WORKOUTS[state.workoutKey];

  document.getElementById("todayDate").textContent = formatLongDate(today);
  document.getElementById("dayTypeLabel").textContent = workout.dayLabel;
  document.getElementById("dayTypeTime").textContent = workout.dayTime;
  document.getElementById("dayTypeNote").textContent = workout.dayNote;
  document.getElementById("workoutTitle").textContent = workout.title;
  document.getElementById("workoutDuration").textContent = workout.duration;

  const preview = document.getElementById("workoutPreview");
  preview.innerHTML = "";

  workout.exercises.slice(0, 5).forEach((exercise) => {
    const item = document.createElement("div");
    item.className = "workout-item";
    item.innerHTML = `
      <div class="workout-icon">${exercise.icon}</div>
      <div>
        <strong>${exercise.name}</strong>
        <small>${exercise.purpose}</small>
      </div>
      <em>${exercise.prescription}</em>
    `;
    preview.appendChild(item);
  });
}

function renderWeek() {
  const container = document.getElementById("weekStrip");
  container.innerHTML = "";
  const today = normalizeDate(new Date());

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const key = getWorkoutKeyForDate(date);
    const work = key === "trabalho";
    let status = work ? "Trabalho" : "Folga";
    if (key === "folgaFimDeSemana") status = "Folga c/ filha";

    const card = document.createElement("div");
    card.className = `day-card ${work ? "work" : "off"} ${i === 0 ? "today" : ""}`;
    card.innerHTML = `
      <strong>${formatShortWeekday(date)}</strong>
      <span>${formatDayMonth(date)}</span>
      <i></i>
      <span>${status}</span>
    `;
    container.appendChild(card);
  }
}

function formatClock(seconds) {
  const safe = Math.max(0, seconds);
  const min = Math.floor(safe / 60);
  const sec = safe % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function stopTimer(clearCallback = false) {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  state.timerRunning = false;

  if (clearCallback) {
    state.timerOnComplete = null;
  }
}

function setTimer(seconds, mode = "exercise", onComplete = null) {
  stopTimer(true);
  state.timerMode = mode;
  state.timerInitial = seconds;
  state.timerRemaining = seconds;
  state.timerOnComplete = onComplete;
  updateTimerUI();
}

function updateTimerUI() {
  const display = document.getElementById("liveTimerDisplay");
  const startBtn = document.getElementById("timerStartPauseBtn");
  const label = document.getElementById("timerModeLabel");

  if (!display) return;

  display.textContent = formatClock(state.timerRemaining);
  if (label) label.textContent = state.timerMode === "rest" ? "DESCANSO" : "CRONÔMETRO";
  if (startBtn) startBtn.textContent = state.timerRunning ? "PAUSAR" : "INICIAR";
}

function toggleTimer() {
  if (state.timerRemaining <= 0) {
    state.timerRemaining = state.timerInitial;
  }

  if (state.timerRunning) {
    stopTimer();
    updateTimerUI();
    return;
  }

  state.timerRunning = true;
  updateTimerUI();

  state.timerId = setInterval(() => {
    state.timerRemaining -= 1;
    updateTimerUI();

    if (state.timerRemaining <= 0) {
      const callback = state.timerOnComplete;
      stopTimer(true);
      updateTimerUI();

      if (navigator.vibrate) navigator.vibrate([180, 100, 180]);

      if (typeof callback === "function") {
        callback();
      }
    }
  }, 1000);
}

function resetTimer() {
  stopTimer();
  state.timerRemaining = state.timerInitial;
  updateTimerUI();
}

function startRestTimer() {
  const exercise = WORKOUTS[state.workoutKey].exercises[state.exerciseIndex];
  if (!exercise.restSeconds) return;

  setTimer(exercise.restSeconds, "rest");
  toggleTimer();
}

function renderTimer(exercise) {
  const box = document.getElementById("liveTimerBox");
  if (!box) return;

  const seconds = exercise.timerSeconds || exercise.restSeconds || 0;

  if (!seconds) {
    box.classList.add("hidden");
    stopTimer();
    return;
  }

  box.classList.remove("hidden");
  setTimer(seconds, exercise.timerSeconds ? "exercise" : "rest");

  const restBtn = document.getElementById("startRestBtn");
  if (restBtn) {
    restBtn.classList.toggle("hidden", !exercise.restSeconds);
  }
}

function renderResultInput(exercise) {
  const box = document.getElementById("exerciseResultBox");
  const input = document.getElementById("exerciseResultInput");
  const label = document.getElementById("exerciseResultLabel");

  if (!box || !input || !label) return;

  if (exercise.resultType === "none") {
    box.classList.add("hidden");
    return;
  }

  box.classList.remove("hidden");
  label.textContent = exercise.resultLabel;
  input.type = "number";
  input.step = exercise.resultType === "distance" ? "0.01" : "1";
  input.min = "0";
  input.placeholder = exercise.resultPlaceholder || "";
  input.value = state.results[state.exerciseIndex] ?? "";
}

function saveCurrentResult() {
  const input = document.getElementById("exerciseResultInput");
  if (!input || input.closest(".hidden")) return true;

  const value = input.value.trim();

  if (!value) {
    input.focus();
    input.classList.add("input-error");
    return false;
  }

  input.classList.remove("input-error");
  state.results[state.exerciseIndex] = Number(value);
  return true;
}


function getCoachSeriesTotal(exercise) {
  const text = `${exercise.prescription || ""}`.toLowerCase();

  if (exercise.name.toLowerCase().includes("corrida")) return 1;
  if (exercise.name.toLowerCase().includes("mobilidade")) return 1;
  if (exercise.name.toLowerCase().includes("corda")) return 1;

  const match = text.match(/(\d+)\s*(séries|serie|série|series|blocos|bloco)/i);
  if (match) return Math.max(1, Number(match[1]));

  return 1;
}

function resetCoachSeries(exercise) {
  state.coachSeriesCurrent = 1;
  state.coachSeriesTotal = getCoachSeriesTotal(exercise);
  state.coachSeriesFinished = false;
  state.coachWaitingRest = false;
}

function renderCoachSeries(exercise) {
  const box = document.getElementById("coachSeriesBox");
  const title = document.getElementById("coachSeriesTitle");
  const counter = document.getElementById("coachSeriesCounter");
  const instruction = document.getElementById("coachSeriesInstruction");
  const status = document.getElementById("coachSeriesStatus");
  const button = document.getElementById("coachSeriesDoneBtn");

  if (!box || !title || !counter || !instruction || !status || !button) return;

  box.classList.remove("hidden");

  const total = state.coachSeriesTotal;
  const current = Math.min(state.coachSeriesCurrent, total);

  title.textContent = total > 1 ? `SÉRIE ${current}` : "ETAPA ATUAL";
  counter.textContent = `${current}/${total}`;

  if (state.coachWaitingRest) {
    instruction.textContent = "DESCANSE AGORA. O TREINADOR LIBERA A PRÓXIMA SÉRIE QUANDO O TEMPO TERMINAR.";
    status.textContent = "Não inicie a próxima série antes do descanso terminar.";
    button.textContent = "DESCANSANDO...";
    button.disabled = true;
    return;
  }

  if (state.coachSeriesFinished) {
    instruction.textContent = "ETAPA CONCLUÍDA. REGISTRE SEU RESULTADO ABAIXO E DEPOIS TOQUE EM CONCLUIR E AVANÇAR.";
    status.textContent = "Todas as séries desta etapa foram concluídas.";
    button.textContent = "✓ ETAPA CONCLUÍDA";
    button.disabled = true;
    return;
  }

  if (total > 1) {
    const isBarExercise = exercise.name.toLowerCase().includes("barra");

    if (isBarExercise) {
      const barOrders = [
        "Faça retrações escapulares controladas. Pense em baixar os ombros sem dobrar os cotovelos.",
        "Faça uma sustentação assistida ou isometria em posição segura. Segure somente enquanto mantiver controle.",
        "Faça negativas controladas somente se conseguir começar no alto com apoio seguro. Desça devagar.",
        "Repita a melhor progressão que conseguiu executar com técnica, sem tentar compensar no balanço."
      ];

      instruction.textContent = `Série ${current}: ${barOrders[Math.min(current - 1, barOrders.length - 1)]}`;
    } else {
      instruction.textContent = `Faça agora a série ${current} de ${total}, seguindo a execução e a técnica indicadas nesta tela.`;
    }

    status.textContent = current < total
      ? "Ao terminar, confirme a série. O descanso será iniciado automaticamente."
      : "Esta é a última série. Ao terminar, confirme para liberar o registro do resultado.";
    button.textContent = `✓ CONCLUÍ A SÉRIE ${current}`;
  } else {
    instruction.textContent = "Execute agora esta etapa completa seguindo o tempo, volume e orientação indicados.";
    status.textContent = "Quando terminar, confirme a etapa para liberar o avanço.";
    button.textContent = "✓ CONCLUÍ ESTA ETAPA";
  }

  button.disabled = false;
}

function finishCoachRest() {
  state.coachWaitingRest = false;
  state.coachSeriesCurrent += 1;

  const exercise = WORKOUTS[state.workoutKey].exercises[state.exerciseIndex];
  renderCoachSeries(exercise);

  const box = document.getElementById("coachSeriesBox");
  if (box) {
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function completeCoachSeries() {
  if (state.coachSeriesFinished || state.coachWaitingRest) return;

  const exercise = WORKOUTS[state.workoutKey].exercises[state.exerciseIndex];

  if (state.coachSeriesCurrent >= state.coachSeriesTotal) {
    state.coachSeriesFinished = true;
    renderCoachSeries(exercise);
    return;
  }

  const restSeconds = exercise.restSeconds || 45;
  state.coachWaitingRest = true;
  renderCoachSeries(exercise);

  const timerBox = document.getElementById("liveTimerBox");
  if (timerBox) timerBox.classList.remove("hidden");

  setTimer(restSeconds, "rest", finishCoachRest);
  toggleTimer();

  const timerBoxAfter = document.getElementById("liveTimerBox");
  if (timerBoxAfter) {
    timerBoxAfter.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function openTrainingScreen() {
  const workout = WORKOUTS[state.workoutKey];

  state.exerciseIndex = 0;
  state.completedExercises = new Set();
  state.results = {};
  state.coachSeriesCurrent = 1;
  state.coachSeriesTotal = 1;
  state.coachSeriesFinished = false;
  state.coachWaitingRest = false;

  document.getElementById("trainingSessionTitle").textContent = workout.title;
  document.getElementById("trainingSessionDuration").textContent = workout.duration;
  document.getElementById("trainingDayType").textContent = workout.dayLabel;

  const screen = document.getElementById("trainingScreen");
  screen.classList.remove("hidden");
  screen.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  renderExercise();
}

function closeTrainingScreen() {
  stopTimer();
  document.getElementById("trainingScreen").classList.add("hidden");
  document.getElementById("trainingScreen").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderExercise() {
  const workout = WORKOUTS[state.workoutKey];
  const exercise = workout.exercises[state.exerciseIndex];
  const total = workout.exercises.length;

  resetCoachSeries(exercise);

  document.getElementById("trainingStepCounter").textContent = `${state.exerciseIndex + 1}/${total}`;
  document.getElementById("exerciseStepLabel").textContent = `EXERCÍCIO ${state.exerciseIndex + 1} DE ${total}`;
  document.getElementById("exerciseIcon").textContent = exercise.icon;
  document.getElementById("exerciseName").textContent = exercise.name;
  document.getElementById("exercisePurpose").textContent = exercise.purpose;
  document.getElementById("exercisePrescription").textContent = exercise.prescription;
  document.getElementById("exerciseRest").textContent = exercise.rest;
  document.getElementById("exerciseObjective").textContent = exercise.objective;

  renderAdaptiveGuidance(exercise);

  const list = document.getElementById("exerciseInstructions");
  list.innerHTML = "";
  exercise.instructions.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    list.appendChild(li);
  });

  document.getElementById("trainingProgressFill").style.width =
    `${((state.exerciseIndex + 1) / total) * 100}%`;

  const previousBtn = document.getElementById("previousExerciseBtn");
  previousBtn.disabled = state.exerciseIndex === 0;
  previousBtn.style.opacity = state.exerciseIndex === 0 ? ".45" : "1";

  document.getElementById("completeExerciseBtn").textContent =
    state.exerciseIndex === total - 1 ? "FINALIZAR TREINO" : "CONCLUIR E AVANÇAR";

  renderCoachSeries(exercise);
  renderTimer(exercise);
  renderResultInput(exercise);

  document.querySelector(".training-screen").scrollTo({ top: 0, behavior: "smooth" });
}

function completeCurrentExercise() {
  const exercise = WORKOUTS[state.workoutKey].exercises[state.exerciseIndex];

  if (!state.coachSeriesFinished) {
    const box = document.getElementById("coachSeriesBox");
    if (box) {
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const status = document.getElementById("coachSeriesStatus");
    if (status) {
      status.textContent = state.coachWaitingRest
        ? "Aguarde o descanso terminar antes de continuar."
        : "Conclua a etapa orientada pelo treinador antes de avançar.";
    }
    return;
  }

  if (!saveCurrentResult()) return;

  const workout = WORKOUTS[state.workoutKey];
  state.completedExercises.add(state.exerciseIndex);

  if (state.exerciseIndex < workout.exercises.length - 1) {
    state.exerciseIndex += 1;
    renderExercise();
  } else {
    finishWorkout();
  }
}

function previousExercise() {
  if (state.exerciseIndex <= 0) return;
  stopTimer(true);
  saveCurrentResult();
  state.exerciseIndex -= 1;
  renderExercise();
}

function finishWorkout() {
  stopTimer();
  const workout = WORKOUTS[state.workoutKey];

  const resultDetails = workout.exercises.map((exercise, index) => ({
    exercise: exercise.name,
    result: state.results[index] ?? null,
    resultLabel: exercise.resultLabel || null
  }));

  saveWorkoutHistory({
    date: new Date().toISOString(),
    workoutKey: state.workoutKey,
    title: workout.title,
    completed: workout.exercises.length,
    total: workout.exercises.length,
    results: resultDetails
  });

  closeTrainingScreen();

  document.getElementById("finishExerciseCount").textContent =
    `${workout.exercises.length}/${workout.exercises.length}`;

  document.getElementById("finishModal").classList.remove("hidden");
  renderReadiness();
  renderEvolution();
}

function closeFinishModal() {
  document.getElementById("finishModal").classList.add("hidden");
}


function getAllRecordedResults(history) {
  return history.flatMap(entry => Array.isArray(entry.results) ? entry.results : []);
}

function findBestResult(results, keywords) {
  const matches = results.filter(item => {
    const name = String(item.exercise || "").toLowerCase();
    return keywords.some(keyword => name.includes(keyword));
  });

  const values = matches
    .map(item => Number(item.result))
    .filter(value => Number.isFinite(value) && value >= 0);

  return values.length ? Math.max(...values) : null;
}

function formatHistoryDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "DATA INDISPONÍVEL";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function renderEvolution() {
  const history = getStoredHistory();
  const results = getAllRecordedResults(history);
  const readiness = calculateReadiness();

  const bestRun = findBestResult(results, ["corrida"]);
  const bestBar = findBestResult(results, ["barra"]);
  const bestCore = findBestResult(results, ["remador", "core"]);
  const bestRope = findBestResult(results, ["corda"]);

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  setText("evolutionReadiness", `${readiness}%`);
  setText("evolutionRingValue", `${readiness}%`);
  setText("evolutionWorkoutCount", String(history.length));

  const runText = bestRun === null ? "—" : `${bestRun.toFixed(2)} km`;
  const barText = bestBar === null ? "0 s" : `${Math.round(bestBar)} s`;
  const coreText = bestCore === null ? "—" : `${Math.round(bestCore)} reps`;
  const ropeText = bestRope === null ? "—" : `${Math.round(bestRope)} pulos`;

  setText("evolutionBestRun", runText);
  setText("evolutionBestBar", barText);
  setText("evolutionBestCore", coreText);
  setText("recordRun", runText);
  setText("recordBar", barText);
  setText("recordCore", coreText);
  setText("recordRope", ropeText);

  const ring = document.getElementById("evolutionRing");
  if (ring) {
    const deg = Math.max(0, Math.min(360, readiness * 3.6));
    ring.style.background =
      `conic-gradient(var(--green) 0 ${deg}deg, #1a241c ${deg}deg 360deg)`;
  }

  const historyList = document.getElementById("historyList");
  if (historyList) {
    historyList.innerHTML = "";

    if (!history.length) {
      historyList.innerHTML = `
        <div class="history-empty">
          <strong>NENHUM TREINO REGISTRADO</strong>
          <p>Conclua um treino para começar seu histórico.</p>
        </div>
      `;
    } else {
      [...history].reverse().slice(0, 10).forEach(entry => {
        const item = document.createElement("div");
        item.className = "history-item";

        const recorded = Array.isArray(entry.results)
          ? entry.results.filter(result => result.result !== null && result.result !== undefined)
          : [];

        const resultSummary = recorded.length
          ? recorded.slice(0, 3).map(result => {
              const name = String(result.exercise || "");
              const value = result.result;
              if (name.toLowerCase().includes("corrida")) return `${name}: ${Number(value).toFixed(2)} km`;
              if (name.toLowerCase().includes("barra")) return `${name}: ${Math.round(Number(value))} s`;
              if (name.toLowerCase().includes("corda")) return `${name}: ${Math.round(Number(value))} pulos`;
              return `${name}: ${Math.round(Number(value))} reps`;
            }).join(" • ")
          : "Treino concluído";

        item.innerHTML = `
          <div class="history-item-main">
            <span>✓</span>
            <div>
              <strong>${entry.title || "TREINO MISSÃO TAF"}</strong>
              <small>${formatHistoryDate(entry.date)}</small>
              <p>${resultSummary}</p>
            </div>
          </div>
          <b>${entry.completed || 0}/${entry.total || 0}</b>
        `;

        historyList.appendChild(item);
      });
    }
  }

  const nextGoal = document.getElementById("evolutionNextGoal");
  const nextGoalText = document.getElementById("evolutionNextGoalText");

  if (nextGoal && nextGoalText) {
    if (bestBar === null || bestBar < 5) {
      nextGoal.textContent = "Construir controle para a primeira barra";
      nextGoalText.textContent =
        "Continue com retrações, isometrias e negativas controladas. O foco ainda é criar força e controle.";
    } else if (bestBar < 15) {
      nextGoal.textContent = "Aproximar da primeira barra completa";
      nextGoalText.textContent =
        "Seu tempo controlado está evoluindo. Continue fortalecendo a fase de sustentação e descida antes de aumentar tentativas completas.";
    } else {
      nextGoal.textContent = "Testar a primeira barra com técnica";
      nextGoalText.textContent =
        "Você já acumulou um bom tempo controlado na progressão. Em uma sessão apropriada, o treinador poderá incluir uma tentativa completa segura.";
    }
  }
}

function openEvolutionScreen() {
  renderEvolution();

  const screen = document.getElementById("evolutionScreen");
  if (!screen) return;

  screen.classList.remove("hidden");
  screen.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  screen.scrollTo({ top: 0, behavior: "instant" });
}

function closeEvolutionScreen() {
  const screen = document.getElementById("evolutionScreen");
  if (!screen) return;

  screen.classList.add("hidden");
  screen.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function clearWorkoutHistory() {
  const history = getStoredHistory();
  if (!history.length) return;

  const confirmed = window.confirm(
    "Tem certeza que deseja apagar todo o histórico de treinos deste aparelho?"
  );

  if (!confirmed) return;

  localStorage.removeItem("missaoTAF.history");
  renderReadiness();
  renderEvolution();
}


function getAdaptiveProfile() {
  const history = getStoredHistory();
  const results = getAllRecordedResults(history);

  return {
    workouts: history.length,
    bestRun: findBestResult(results, ["corrida"]),
    bestBar: findBestResult(results, ["barra"]),
    bestCore: findBestResult(results, ["remador", "core"]),
    bestRope: findBestResult(results, ["corda"]),
    bestPush: findBestResult(results, ["flex"])
  };
}

function getAdaptiveRunningPlan(profile) {
  const bestRun = profile.bestRun;

  if (bestRun === null) {
    return {
      title: "META DE HOJE",
      text: "Faça a corrida em ritmo confortável e contínuo. O objetivo é criar uma primeira referência real de distância sem correr no máximo."
    };
  }

  if (bestRun < 3.5) {
    return {
      title: "META ADAPTATIVA",
      text: `Seu melhor registro é ${bestRun.toFixed(2)} km. Hoje tente terminar entre ${bestRun.toFixed(2)} e ${(bestRun + 0.20).toFixed(2)} km, sem sprintar no início.`
    };
  }

  if (bestRun < 4.5) {
    return {
      title: "META ADAPTATIVA",
      text: `Seu melhor registro é ${bestRun.toFixed(2)} km. Hoje mantenha ritmo controlado e tente acrescentar até 200 m ao total somente se terminar com técnica e respiração sob controle.`
    };
  }

  return {
    title: "META ADAPTATIVA",
    text: `Seu melhor registro é ${bestRun.toFixed(2)} km. Hoje o foco é consistência: mantenha um ritmo estável e termine forte, sem transformar todo treino em teste máximo.`
  };
}

function getAdaptiveBarPlan(profile) {
  const bestBar = profile.bestBar;

  if (bestBar === null || bestBar < 5) {
    return {
      title: "NÍVEL 0 — BASE",
      text: "Você ainda está construindo força para a primeira barra. Priorize retrações escapulares, sustentação assistida curta e negativas controladas. Não faça repetições completas forçadas."
    };
  }

  if (bestBar < 10) {
    return {
      title: "NÍVEL 0 — CONTROLE",
      text: `Seu melhor tempo controlado é ${Math.round(bestBar)} s. Hoje tente igualar esse tempo com técnica limpa e, se estiver estável, aumentar apenas 1–2 segundos.`
    };
  }

  if (bestBar < 15) {
    return {
      title: "NÍVEL 0 — FORÇA ESPECÍFICA",
      text: `Seu melhor tempo controlado é ${Math.round(bestBar)} s. Mantenha negativas lentas e isometrias firmes. Ainda não é necessário fazer tentativas repetidas de barra completa.`
    };
  }

  return {
    title: "PRÉ-PRIMEIRA BARRA",
    text: `Seu melhor tempo controlado é ${Math.round(bestBar)} s. Em uma sessão em que estiver descansado, o treinador pode incluir 1 tentativa técnica de barra completa após o aquecimento, sem balanço e sem insistir se falhar.`
  };
}

function getAdaptiveCorePlan(profile) {
  const bestCore = profile.bestCore;

  if (bestCore === null) {
    return {
      title: "REMADOR — APRENDIZADO",
      text: "Como você ainda está criando sua referência no remador, faça repetições lentas e técnicas. Priorize amplitude correta antes da velocidade."
    };
  }

  if (bestCore < 10) {
    return {
      title: "REMADOR — TÉCNICA",
      text: `Sua melhor série registrada é ${Math.round(bestCore)} repetições. Hoje tente repetir esse número com execução limpa antes de buscar aumentar.`
    };
  }

  if (bestCore < 15) {
    return {
      title: "REMADOR — PROGRESSÃO",
      text: `Sua melhor série é ${Math.round(bestCore)} repetições. Se a técnica permanecer boa, tente acrescentar 1 repetição em apenas uma das séries.`
    };
  }

  return {
    title: "REMADOR — CONSOLIDAÇÃO",
    text: `Sua melhor série é ${Math.round(bestCore)} repetições. Agora o foco é repetir esse desempenho com consistência e começar a trabalhar velocidade sem perder a forma.`
  };
}

function getAdaptiveRopePlan(profile) {
  const bestRope = profile.bestRope;

  if (bestRope === null) {
    return {
      title: "CORDA — BASE",
      text: "Faça os blocos sem buscar velocidade máxima. Registre o total ao terminar para o treinador criar sua referência."
    };
  }

  return {
    title: "CORDA — VOLUME CONTROLADO",
    text: `Seu maior volume registrado é ${Math.round(bestRope)} pulos. Hoje mantenha o volume planejado e priorize ritmo contínuo e aterrissagem leve.`
  };
}

function getAdaptivePushPlan(profile) {
  const bestPush = profile.bestPush;

  if (bestPush === null) {
    return {
      title: "FLEXÃO — REFERÊNCIA",
      text: "Faça as séries submáximas e pare antes da falha. Registre sua melhor série para orientar os próximos treinos."
    };
  }

  return {
    title: "FLEXÃO — PROGRESSÃO",
    text: `Sua melhor série registrada é ${Math.round(bestPush)} repetições. Hoje tente manter esse nível em mais séries antes de aumentar o máximo.`
  };
}

function getAdaptiveGuidance(exercise) {
  const profile = getAdaptiveProfile();
  const name = String(exercise.name || "").toLowerCase();

  if (name.includes("corrida")) return getAdaptiveRunningPlan(profile);
  if (name.includes("barra")) return getAdaptiveBarPlan(profile);
  if (name.includes("remador") || name.includes("core")) return getAdaptiveCorePlan(profile);
  if (name.includes("corda")) return getAdaptiveRopePlan(profile);
  if (name.includes("flex")) return getAdaptivePushPlan(profile);

  return {
    title: "ORIENTAÇÃO DO TREINADOR",
    text: `Faça ${exercise.prescription} com controle e respeite a execução indicada.`
  };
}

function renderAdaptiveGuidance(exercise) {
  const guidance = getAdaptiveGuidance(exercise);
  const coachAction = document.getElementById("coachAction");
  const coachDetail = document.getElementById("coachDetail");

  if (coachAction) coachAction.textContent = guidance.title;
  if (coachDetail) coachDetail.textContent = guidance.text;
}


function getRunningTests() {
  try {
    return JSON.parse(localStorage.getItem("missaoTAF.running2400") || "[]");
  } catch (error) {
    return [];
  }
}

function saveRunningTests(tests) {
  localStorage.setItem("missaoTAF.running2400", JSON.stringify(tests));
}

function formatSeconds(totalSeconds) {
  const seconds = Math.max(0, Math.round(Number(totalSeconds) || 0));
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function formatPace(totalSeconds, distanceKm = 2.4) {
  const paceSeconds = totalSeconds / distanceKm;
  const minutes = Math.floor(paceSeconds / 60);
  const seconds = Math.round(paceSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}/km`;
}

function renderRunningScreen() {
  const profile = getAdaptiveProfile();
  const tests = getRunningTests();

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText(
    "runningBestDistance",
    profile.bestRun === null ? "—" : `${profile.bestRun.toFixed(2)} km`
  );

  if (tests.length) {
    const bestTest = tests.reduce((best, current) =>
      current.totalSeconds < best.totalSeconds ? current : best
    );

    setText("runningBest2400", formatSeconds(bestTest.totalSeconds));
    setText("runningPace2400", formatPace(bestTest.totalSeconds));
    setText("runningTestCount", String(tests.length));

    const coachTitle = document.getElementById("runningCoachTitle");
    const coachText = document.getElementById("runningCoachText");

    if (coachTitle && coachText) {
      if (bestTest.totalSeconds > 13 * 60) {
        coachTitle.textContent = "Ganhar ritmo sem perder a base";
        coachText.textContent =
          `Seu melhor 2.400 m está em ${formatSeconds(bestTest.totalSeconds)}. Priorize treinos consistentes e tente reduzir o tempo gradualmente, sem testar máximo em toda sessão.`;
      } else if (bestTest.totalSeconds > 12 * 60 + 30) {
        coachTitle.textContent = "Aproximando da faixa mínima";
        coachText.textContent =
          `Seu melhor 2.400 m está em ${formatSeconds(bestTest.totalSeconds)}. Você está perto da faixa mínima de referência; agora o foco é ganhar alguns segundos com constância e boa distribuição de ritmo.`;
      } else {
        coachTitle.textContent = "Consolidar desempenho";
        coachText.textContent =
          `Seu melhor 2.400 m está em ${formatSeconds(bestTest.totalSeconds)}. Agora o objetivo é repetir esse desempenho com segurança e criar margem, em vez de depender de um único teste bom.`;
      }
    }
  } else {
    setText("runningBest2400", "—");
    setText("runningPace2400", "—");
    setText("runningTestCount", "0");
  }

  const history = document.getElementById("runningTestHistory");
  if (history) {
    history.innerHTML = "";

    if (!tests.length) {
      history.innerHTML = `
        <div class="history-empty">
          <strong>NENHUM TESTE REGISTRADO</strong>
          <p>Seu primeiro teste de 2.400 m aparecerá aqui.</p>
        </div>
      `;
    } else {
      [...tests].reverse().slice(0, 10).forEach(test => {
        const item = document.createElement("div");
        item.className = "history-item";
        item.innerHTML = `
          <div class="history-item-main">
            <span>🏃</span>
            <div>
              <strong>TESTE DE 2.400 M</strong>
              <small>${formatHistoryDate(test.date)}</small>
              <p>Pace médio: ${formatPace(test.totalSeconds)}</p>
            </div>
          </div>
          <b>${formatSeconds(test.totalSeconds)}</b>
        `;
        history.appendChild(item);
      });
    }
  }
}

function openRunningScreen() {
  renderRunningScreen();

  const screen = document.getElementById("runningScreen");
  if (!screen) return;

  screen.classList.remove("hidden");
  screen.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  screen.scrollTo({ top: 0, behavior: "instant" });
}

function closeRunningScreen() {
  const screen = document.getElementById("runningScreen");
  if (!screen) return;

  screen.classList.add("hidden");
  screen.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function save2400Test() {
  const minutesInput = document.getElementById("runningMinutesInput");
  const secondsInput = document.getElementById("runningSecondsInput");
  const status = document.getElementById("runningSaveStatus");

  if (!minutesInput || !secondsInput) return;

  const minutes = Number(minutesInput.value);
  const seconds = Number(secondsInput.value);

  if (
    !Number.isFinite(minutes) ||
    !Number.isFinite(seconds) ||
    minutes < 0 ||
    seconds < 0 ||
    seconds > 59 ||
    (minutes === 0 && seconds === 0)
  ) {
    if (status) status.textContent = "Informe um tempo válido.";
    return;
  }

  const totalSeconds = Math.round(minutes * 60 + seconds);

  const tests = getRunningTests();
  tests.push({
    date: new Date().toISOString(),
    totalSeconds
  });

  saveRunningTests(tests);

  minutesInput.value = "";
  secondsInput.value = "";

  if (status) {
    status.textContent = `Teste salvo: ${formatSeconds(totalSeconds)} — pace ${formatPace(totalSeconds)}.`;
  }

  renderRunningScreen();
}


function getBarRepsHistory() {
  try {
    return JSON.parse(localStorage.getItem("missaoTAF.barReps") || "[]");
  } catch (error) {
    return [];
  }
}

function saveBarRepsHistory(history) {
  localStorage.setItem("missaoTAF.barReps", JSON.stringify(history));
}

function getBarSessions() {
  const history = getStoredHistory();

  return history.filter(entry =>
    Array.isArray(entry.results) &&
    entry.results.some(result =>
      String(result.exercise || "").toLowerCase().includes("barra")
    )
  );
}

function getBestFullBarReps() {
  const history = getBarRepsHistory();
  if (!history.length) return 0;

  return Math.max(
    0,
    ...history.map(item => Number(item.reps) || 0)
  );
}

function getBarProgressPhase(bestTime, fullReps) {
  if (fullReps >= 2) {
    return {
      level: 4,
      phase: "2+ REPS",
      title: "CONSTRUIR CONSISTÊNCIA",
      text: `Sua melhor marca é ${fullReps} barras completas. Agora o objetivo é consolidar repetições limpas e criar margem para o TAF.`,
      coachTitle: "Consolidar as repetições",
      coachText: "Continue treinando força e técnica. Não transforme toda sessão em teste máximo; o objetivo é conseguir repetir boas barras com consistência."
    };
  }

  if (fullReps >= 1) {
    return {
      level: 4,
      phase: "1ª BARRA",
      title: "PRIMEIRA BARRA CONQUISTADA",
      text: "Você já registrou sua primeira barra completa. A missão agora é transformar 1 repetição em 2 ou mais repetições limpas.",
      coachTitle: "Da primeira para a segunda barra",
      coachText: "Mantenha progressões, negativas e trabalho técnico. Faça tentativas completas apenas em sessões apropriadas e descansado."
    };
  }

  if (bestTime >= 15) {
    return {
      level: 3,
      phase: "TENTATIVA",
      title: "PRIMEIRA TENTATIVA",
      text: "Seu controle na progressão já permite começar a incluir uma tentativa técnica em sessões apropriadas.",
      coachTitle: "Liberada 1 tentativa técnica",
      coachText: "Após aquecimento e estando descansado, faça no máximo uma tentativa técnica de barra completa. Sem balanço e sem insistir se falhar."
    };
  }

  if (bestTime >= 10) {
    return {
      level: 2,
      phase: "NEGATIVAS",
      title: "FORÇA ESPECÍFICA",
      text: "Você está na fase de negativas controladas e isometrias mais firmes.",
      coachTitle: "Fortalecer a descida",
      coachText: "Priorize negativas lentas e seguras. Ainda não precisa acumular tentativas completas."
    };
  }

  if (bestTime >= 5) {
    return {
      level: 1,
      phase: "ISOMETRIA",
      title: "GANHAR CONTROLE",
      text: "Sua base está evoluindo. O foco agora é sustentar posições assistidas com postura limpa.",
      coachTitle: "Aumentar o controle",
      coachText: `Seu melhor tempo controlado é ${Math.round(bestTime)} s. Tente igualar essa marca com boa técnica antes de aumentar 1–2 segundos.`
    };
  }

  return {
    level: 0,
    phase: "BASE",
    title: "PRIMEIRA BARRA",
    text: "Seu ponto de partida é 0 barras completas. A missão agora é construir força e controle até liberar a primeira tentativa técnica.",
    coachTitle: "Construir a base",
    coachText: "Priorize retrações escapulares, sustentação assistida curta e negativas somente quando conseguir executá-las com segurança."
  };
}

function renderBarScreen() {
  const profile = getAdaptiveProfile();
  const bestTime = profile.bestBar === null ? 0 : profile.bestBar;
  const fullReps = getBestFullBarReps();
  const sessions = getBarSessions();
  const phase = getBarProgressPhase(bestTime, fullReps);

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  setText("barFullReps", String(fullReps));
  setText("barBestTime", `${Math.round(bestTime)} s`);
  setText("barSessionCount", String(sessions.length));
  setText("barPhase", phase.phase);
  setText("barLevelTitle", phase.title);
  setText("barLevelText", phase.text);
  setText("barLevelNumber", String(phase.level));
  setText("barCoachTitle", phase.coachTitle);
  setText("barCoachText", phase.coachText);

  for (let i = 0; i <= 4; i += 1) {
    const step = document.getElementById(`barStep${i}`);
    if (!step) continue;
    step.classList.toggle("active", i <= phase.level);
    step.classList.toggle("current", i === phase.level);
  }

  const barHistory = document.getElementById("barHistory");
  if (barHistory) {
    barHistory.innerHTML = "";

    const entries = [];

    sessions.forEach(session => {
      const barResult = session.results.find(result =>
        String(result.exercise || "").toLowerCase().includes("barra")
      );

      entries.push({
        date: session.date,
        type: "progress",
        value: Number(barResult?.result) || 0
      });
    });

    getBarRepsHistory().forEach(item => {
      entries.push({
        date: item.date,
        type: "full",
        value: Number(item.reps) || 0
      });
    });

    entries.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!entries.length) {
      barHistory.innerHTML = `
        <div class="history-empty">
          <strong>NENHUM REGISTRO AINDA</strong>
          <p>As sessões e marcas da barra aparecerão aqui.</p>
        </div>
      `;
    } else {
      entries.slice(0, 12).forEach(entry => {
        const item = document.createElement("div");
        item.className = "history-item";

        const isFull = entry.type === "full";
        item.innerHTML = `
          <div class="history-item-main">
            <span>${isFull ? "💪" : "⏱"}</span>
            <div>
              <strong>${isFull ? "BARRA COMPLETA" : "PROGRESSÃO DE BARRA"}</strong>
              <small>${formatHistoryDate(entry.date)}</small>
              <p>${isFull ? "Melhor marca registrada de repetições completas." : "Tempo controlado registrado no treino."}</p>
            </div>
          </div>
          <b>${isFull ? `${Math.round(entry.value)} rep` : `${Math.round(entry.value)} s`}</b>
        `;

        barHistory.appendChild(item);
      });
    }
  }
}

function openBarScreen() {
  renderBarScreen();

  const screen = document.getElementById("barScreen");
  if (!screen) return;

  screen.classList.remove("hidden");
  screen.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  screen.scrollTo({ top: 0, behavior: "instant" });
}

function closeBarScreen() {
  const screen = document.getElementById("barScreen");
  if (!screen) return;

  screen.classList.add("hidden");
  screen.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function saveFullBarReps() {
  const input = document.getElementById("barFullRepsInput");
  const status = document.getElementById("barSaveStatus");
  if (!input) return;

  const reps = Number(input.value);

  if (!Number.isInteger(reps) || reps < 0 || reps > 50) {
    if (status) status.textContent = "Informe um número válido de repetições.";
    return;
  }

  const currentBest = getBestFullBarReps();

  if (reps < currentBest) {
    if (status) {
      status.textContent = `Sua melhor marca já é ${currentBest}. O recorde não será reduzido.`;
    }
    return;
  }

  const history = getBarRepsHistory();
  history.push({
    date: new Date().toISOString(),
    reps
  });

  saveBarRepsHistory(history);
  input.value = "";

  if (status) {
    status.textContent =
      reps === 0
        ? "Nível 0 confirmado. Continue construindo sua primeira barra."
        : reps === 1
          ? "PRIMEIRA BARRA REGISTRADA! Agora a missão é chegar a 2 repetições."
          : `Marca salva: ${reps} barras completas.`;
  }

  renderBarScreen();
}

function bindEvents() {
  document.getElementById("startWorkoutBtn")?.addEventListener("click", openTrainingScreen);
  document.getElementById("trainingBackBtn")?.addEventListener("click", closeTrainingScreen);
  document.getElementById("completeExerciseBtn")?.addEventListener("click", completeCurrentExercise);
  document.getElementById("previousExerciseBtn")?.addEventListener("click", previousExercise);
  document.getElementById("finishModalCloseBtn")?.addEventListener("click", closeFinishModal);
  document.getElementById("finishWorkoutBtn")?.addEventListener("click", closeFinishModal);

  document.getElementById("timerStartPauseBtn")?.addEventListener("click", toggleTimer);
  document.getElementById("timerResetBtn")?.addEventListener("click", resetTimer);
  document.getElementById("startRestBtn")?.addEventListener("click", startRestTimer);
  document.getElementById("coachSeriesDoneBtn")?.addEventListener("click", completeCoachSeries);
  document.getElementById("evolutionBackBtn")?.addEventListener("click", closeEvolutionScreen);
  document.getElementById("clearHistoryBtn")?.addEventListener("click", clearWorkoutHistory);

  document.querySelectorAll('[data-nav="evolucao"]').forEach(button => {
    button.addEventListener("click", openEvolutionScreen);
  });

  document.querySelectorAll('[data-nav="corrida"]').forEach(button => {
    button.addEventListener("click", openRunningScreen);
  });

  document.getElementById("runningBackBtn")?.addEventListener("click", closeRunningScreen);
  document.getElementById("save2400Btn")?.addEventListener("click", save2400Test);

  document.querySelectorAll('[data-nav="barra"]').forEach(button => {
    button.addEventListener("click", openBarScreen);
  });

  document.getElementById("barBackBtn")?.addEventListener("click", closeBarScreen);
  document.getElementById("saveBarRepsBtn")?.addEventListener("click", saveFullBarReps);
}

function init() {
  renderToday();
  renderWeek();
  renderReadiness();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
