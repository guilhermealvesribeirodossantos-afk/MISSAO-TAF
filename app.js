
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
        resultLabel: "Melhor sustentação/negativa (segundos)",
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
        resultLabel: "Melhor sustentação/negativa (segundos)",
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
        resultLabel: "Melhor sustentação/negativa (segundos)",
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
  timerMode: "exercise"
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

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  state.timerRunning = false;
}

function setTimer(seconds, mode = "exercise") {
  stopTimer();
  state.timerMode = mode;
  state.timerInitial = seconds;
  state.timerRemaining = seconds;
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
      stopTimer();
      updateTimerUI();

      if (navigator.vibrate) navigator.vibrate([180, 100, 180]);
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

function openTrainingScreen() {
  const workout = WORKOUTS[state.workoutKey];

  state.exerciseIndex = 0;
  state.completedExercises = new Set();
  state.results = {};

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

  document.getElementById("trainingStepCounter").textContent = `${state.exerciseIndex + 1}/${total}`;
  document.getElementById("exerciseStepLabel").textContent = `EXERCÍCIO ${state.exerciseIndex + 1} DE ${total}`;
  document.getElementById("exerciseIcon").textContent = exercise.icon;
  document.getElementById("exerciseName").textContent = exercise.name;
  document.getElementById("exercisePurpose").textContent = exercise.purpose;
  document.getElementById("exercisePrescription").textContent = exercise.prescription;
  document.getElementById("exerciseRest").textContent = exercise.rest;
  document.getElementById("exerciseObjective").textContent = exercise.objective;

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

  renderTimer(exercise);
  renderResultInput(exercise);

  document.querySelector(".training-screen").scrollTo({ top: 0, behavior: "smooth" });
}

function completeCurrentExercise() {
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
}

function closeFinishModal() {
  document.getElementById("finishModal").classList.add("hidden");
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
}

function init() {
  renderToday();
  renderWeek();
  renderReadiness();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
