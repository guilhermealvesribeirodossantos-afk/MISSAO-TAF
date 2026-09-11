
const APP_CONFIG = {
  referenceWorkDate: new Date("2026-09-11T12:00:00"),
  workStart: "08:00",
  workEnd: "20:00",
  leaveHome: "07:45",
  daycareLeave: "15:40",
  daycarePickup: "16:00"
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
        instructions: [
          "Comece em ritmo confortável.",
          "Mantenha a respiração controlada.",
          "Evite transformar o treino em teste máximo.",
          "Se precisar caminhar, retome a corrida assim que recuperar o fôlego."
        ],
        objective: "Terminar sentindo que ainda conseguiria continuar por alguns minutos."
      },
      {
        icon: "💪",
        name: "Progressão de barra",
        purpose: "Desenvolver força de puxada e controle corporal até conquistar a primeira repetição.",
        prescription: "3 séries",
        rest: "60–90 s",
        instructions: [
          "Faça retrações escapulares controladas.",
          "Inclua sustentação isométrica se conseguir chegar à posição alta com apoio.",
          "Use negativas lentas somente se tiver uma forma segura de subir até o topo.",
          "Não force tentativas completas repetidas se a técnica estiver quebrando."
        ],
        objective: "Fortalecer costas, bíceps, pegada e controle escapular para sair de 0 para a primeira barra."
      },
      {
        icon: "🔥",
        name: "Core / remador",
        purpose: "Aprender o padrão do abdominal remador e fortalecer o tronco.",
        prescription: "3 séries técnicas",
        rest: "45–60 s",
        instructions: [
          "Primeiro priorize aprender o movimento sem velocidade.",
          "Mantenha o movimento controlado e sem puxar o pescoço.",
          "Pare a série se começar a perder a técnica.",
          "Nesta fase, qualidade vale mais que quantidade."
        ],
        objective: "Construir técnica antes de iniciar testes cronometrados de 30 segundos."
      },
      {
        icon: "🧘",
        name: "Mobilidade",
        purpose: "Reduzir rigidez e preparar o corpo para o próximo treino.",
        prescription: "5 minutos",
        rest: "—",
        instructions: [
          "Mobilize tornozelos e panturrilhas.",
          "Alongue posteriores de coxa de forma leve.",
          "Faça mobilidade de quadril.",
          "Não force posições dolorosas."
        ],
        objective: "Ajudar na recuperação e preservar corrida, corda e exercícios de peso corporal."
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
        purpose: "Construir resistência contínua e criar base para os 2.400 m.",
        prescription: "25–35 minutos",
        rest: "—",
        instructions: [
          "Comece em ritmo confortável.",
          "Tente reduzir o número de pausas ao longo das semanas.",
          "Não faça sprint nesta sessão.",
          "Registre tempo total e se houve pausas."
        ],
        objective: "Aumentar sua capacidade de correr de forma contínua antes de acelerar."
      },
      {
        icon: "💪",
        name: "Progressão para primeira barra",
        purpose: "Dar prioridade máxima à sua evolução na barra fixa.",
        prescription: "4 blocos",
        rest: "60–90 s",
        instructions: [
          "Retração escapular: movimento curto e controlado.",
          "Isometria: segure a melhor posição que conseguir com segurança.",
          "Negativas: desça devagar quando houver apoio seguro para começar no alto.",
          "Finalize com remada invertida ou outra puxada com peso corporal disponível."
        ],
        objective: "Acumular força específica sem depender de academia."
      },
      {
        icon: "🔥",
        name: "Técnica de abdominal remador",
        purpose: "Aprender o exercício antes de perseguir velocidade.",
        prescription: "4 séries técnicas",
        rest: "45–60 s",
        instructions: [
          "Faça repetições controladas.",
          "Mantenha tronco e pernas coordenados.",
          "Evite embalo excessivo.",
          "Quando a execução estiver consistente, o site liberará testes cronometrados."
        ],
        objective: "Criar uma execução repetível para futuramente medir desempenho em 30 segundos."
      },
      {
        icon: "🤸",
        name: "Flexões",
        purpose: "Manter resistência de membros superiores e capacidade de esforço.",
        prescription: "4 séries submáximas",
        rest: "60 s",
        instructions: [
          "Pare cada série antes de perder a técnica.",
          "Mantenha corpo alinhado.",
          "Desça de forma controlada.",
          "Não precisa atingir falha em todas as séries."
        ],
        objective: "Manter a base que você já construiu com os circuitos de corda."
      },
      {
        icon: "🪢",
        name: "Corda complementar",
        purpose: "Trabalhar condicionamento, coordenação e resistência das pernas.",
        prescription: "1.000–2.000 pulos",
        rest: "30–60 s por bloco",
        instructions: [
          "Divida em blocos de 200 pulos.",
          "Se as panturrilhas estiverem muito cansadas da corrida, reduza o volume.",
          "Use saltos baixos e econômicos.",
          "A corda complementa a corrida; não substitui o treino de corrida."
        ],
        objective: "Aproveitar sua experiência com corda sem comprometer a recuperação."
      },
      {
        icon: "🧘",
        name: "Mobilidade e recuperação",
        purpose: "Encerrar o treino reduzindo tensão nas principais regiões usadas.",
        prescription: "8–10 minutos",
        rest: "—",
        instructions: [
          "Panturrilhas e tornozelos.",
          "Posteriores de coxa.",
          "Quadril.",
          "Ombros e dorsais."
        ],
        objective: "Melhorar recuperação para manter consistência na escala 12x36."
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
        purpose: "Manter frequência de corrida sem ocupar grande parte da folga.",
        prescription: "20–25 minutos",
        rest: "—",
        instructions: [
          "Use ritmo confortável.",
          "Evite teste máximo.",
          "Priorize continuidade.",
          "Se o dia estiver apertado, esta é a parte mais importante da sessão."
        ],
        objective: "Manter consistência semanal na corrida."
      },
      {
        icon: "💪",
        name: "Barra — técnica e força",
        purpose: "Não perder frequência no trabalho para a primeira barra.",
        prescription: "3 blocos",
        rest: "60–90 s",
        instructions: [
          "Retrações escapulares.",
          "Isometrias seguras.",
          "Negativas se houver apoio.",
          "Pare antes de perder o controle."
        ],
        objective: "Manter estímulo frequente sem transformar o dia em treino longo."
      },
      {
        icon: "🔥",
        name: "Core rápido",
        purpose: "Reforçar tronco e técnica do remador.",
        prescription: "3 séries",
        rest: "45 s",
        instructions: [
          "Execução lenta.",
          "Técnica antes de velocidade.",
          "Sem puxar o pescoço.",
          "Finalize a série ao perder coordenação."
        ],
        objective: "Consolidar o movimento do remador."
      },
      {
        icon: "🧘",
        name: "Mobilidade",
        purpose: "Fechar a sessão e facilitar recuperação.",
        prescription: "5 minutos",
        rest: "—",
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
  completedExercises: new Set()
};

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
}

function getDiffDays(dateA, dateB) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round((normalizeDate(dateA) - normalizeDate(dateB)) / oneDay);
}

function isWorkDay(date) {
  const diff = getDiffDays(date, APP_CONFIG.referenceWorkDate);
  return Math.abs(diff) % 2 === 0;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
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
    .format(date)
    .replace(".", "")
    .slice(0, 3)
    .toUpperCase();
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
  const history = getStoredHistory();
  const completed = history.length;

  if (completed === 0) return 8;
  return Math.min(100, 8 + completed * 4);
}

function renderReadiness() {
  const value = calculateReadiness();
  const readiness = document.getElementById("readinessValue");
  const progress = document.getElementById("progressPercent");

  if (readiness) readiness.textContent = `${value}%`;
  if (progress) progress.textContent = `${value}%`;

  const ring = document.querySelector(".ring");
  if (ring) {
    const deg = Math.max(0, Math.min(360, value * 3.6));
    ring.style.background = `conic-gradient(var(--green) 0 ${deg}deg, #202921 ${deg}deg 360deg)`;
  }
}

function renderToday() {
  const today = new Date();
  const workoutKey = getWorkoutKeyForDate(today);
  const workout = WORKOUTS[workoutKey];

  state.workoutKey = workoutKey;

  const todayDate = document.getElementById("todayDate");
  const dayTypeLabel = document.getElementById("dayTypeLabel");
  const dayTypeTime = document.getElementById("dayTypeTime");
  const dayTypeNote = document.getElementById("dayTypeNote");
  const workoutTitle = document.getElementById("workoutTitle");
  const workoutDuration = document.getElementById("workoutDuration");
  const preview = document.getElementById("workoutPreview");

  if (todayDate) todayDate.textContent = formatLongDate(today);
  if (dayTypeLabel) dayTypeLabel.textContent = workout.dayLabel;
  if (dayTypeTime) dayTypeTime.textContent = workout.dayTime;
  if (dayTypeNote) dayTypeNote.textContent = workout.dayNote;
  if (workoutTitle) workoutTitle.textContent = workout.title;
  if (workoutDuration) workoutDuration.textContent = workout.duration;

  if (preview) {
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
}

function renderWeek() {
  const container = document.getElementById("weekStrip");
  if (!container) return;

  container.innerHTML = "";

  const today = normalizeDate(new Date());

  for (let i = 0; i < 7; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const workoutKey = getWorkoutKeyForDate(date);
    const work = workoutKey === "trabalho";

    let statusText = "Folga";
    if (work) statusText = "Trabalho";
    else if (workoutKey === "folgaFimDeSemana") statusText = "Folga c/ filha";

    const card = document.createElement("div");
    card.className = `day-card ${work ? "work" : "off"} ${i === 0 ? "today" : ""}`;
    card.innerHTML = `
      <strong>${formatShortWeekday(date)}</strong>
      <span>${formatDayMonth(date)}</span>
      <i></i>
      <span>${statusText}</span>
    `;

    container.appendChild(card);
  }
}

function openTrainingScreen() {
  const workout = WORKOUTS[state.workoutKey];

  state.exerciseIndex = 0;
  state.completedExercises = new Set();

  const screen = document.getElementById("trainingScreen");
  const title = document.getElementById("trainingSessionTitle");
  const duration = document.getElementById("trainingSessionDuration");
  const dayType = document.getElementById("trainingDayType");

  if (title) title.textContent = workout.title;
  if (duration) duration.textContent = workout.duration;
  if (dayType) dayType.textContent = workout.dayLabel;

  if (screen) {
    screen.classList.remove("hidden");
    screen.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  renderExercise();
}

function closeTrainingScreen() {
  const screen = document.getElementById("trainingScreen");
  if (screen) {
    screen.classList.add("hidden");
    screen.setAttribute("aria-hidden", "true");
  }

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

  const progress = ((state.exerciseIndex + 1) / total) * 100;
  document.getElementById("trainingProgressFill").style.width = `${progress}%`;

  const previousBtn = document.getElementById("previousExerciseBtn");
  previousBtn.disabled = state.exerciseIndex === 0;
  previousBtn.style.opacity = state.exerciseIndex === 0 ? ".45" : "1";

  const completeBtn = document.getElementById("completeExerciseBtn");
  const isLast = state.exerciseIndex === total - 1;
  completeBtn.textContent = isLast ? "FINALIZAR TREINO" : "CONCLUIR E AVANÇAR";
}

function completeCurrentExercise() {
  const workout = WORKOUTS[state.workoutKey];
  const total = workout.exercises.length;

  state.completedExercises.add(state.exerciseIndex);

  if (state.exerciseIndex < total - 1) {
    state.exerciseIndex += 1;
    renderExercise();
    return;
  }

  finishWorkout();
}

function previousExercise() {
  if (state.exerciseIndex <= 0) return;

  state.exerciseIndex -= 1;
  renderExercise();
}

function finishWorkout() {
  const workout = WORKOUTS[state.workoutKey];
  const today = new Date();

  saveWorkoutHistory({
    date: today.toISOString(),
    workoutKey: state.workoutKey,
    title: workout.title,
    completed: workout.exercises.length,
    total: workout.exercises.length
  });

  closeTrainingScreen();

  const finishModal = document.getElementById("finishModal");
  const count = document.getElementById("finishExerciseCount");

  if (count) {
    count.textContent = `${workout.exercises.length}/${workout.exercises.length}`;
  }

  if (finishModal) {
    finishModal.classList.remove("hidden");
  }

  renderReadiness();
}

function closeFinishModal() {
  const finishModal = document.getElementById("finishModal");
  if (finishModal) finishModal.classList.add("hidden");
}

function bindEvents() {
  const startWorkoutBtn = document.getElementById("startWorkoutBtn");
  const trainingBackBtn = document.getElementById("trainingBackBtn");
  const completeExerciseBtn = document.getElementById("completeExerciseBtn");
  const previousExerciseBtn = document.getElementById("previousExerciseBtn");
  const finishModalCloseBtn = document.getElementById("finishModalCloseBtn");
  const finishWorkoutBtn = document.getElementById("finishWorkoutBtn");

  if (startWorkoutBtn) {
    startWorkoutBtn.addEventListener("click", openTrainingScreen);
  }

  if (trainingBackBtn) {
    trainingBackBtn.addEventListener("click", closeTrainingScreen);
  }

  if (completeExerciseBtn) {
    completeExerciseBtn.addEventListener("click", completeCurrentExercise);
  }

  if (previousExerciseBtn) {
    previousExerciseBtn.addEventListener("click", previousExercise);
  }

  if (finishModalCloseBtn) {
    finishModalCloseBtn.addEventListener("click", closeFinishModal);
  }

  if (finishWorkoutBtn) {
    finishWorkoutBtn.addEventListener("click", closeFinishModal);
  }
}

function init() {
  renderToday();
  renderWeek();
  renderReadiness();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
