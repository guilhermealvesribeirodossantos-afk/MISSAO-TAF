const BASE_DATE = new Date('2026-09-11T12:00:00-03:00'); // dia de trabalho confirmado

const workDayWorkout = [
  {icon:'🏃', name:'Corrida leve', desc:'Base aeróbica sem esgotar as pernas', dose:'20 min'},
  {icon:'💪', name:'Progressão de barra', desc:'Controle escapular + negativas/assistidas conforme nível', dose:'3 séries'},
  {icon:'🔥', name:'Core / remador', desc:'Aprender técnica e fortalecer o tronco', dose:'3 séries'},
  {icon:'🧘', name:'Mobilidade', desc:'Panturrilha, tornozelo, quadril e posterior', dose:'5 min'}
];

const weekdayOffWorkout = [
  {icon:'🏃', name:'Corrida principal', desc:'Treino específico de evolução para 2.400 m', dose:'35–45 min'},
  {icon:'💪', name:'Progressão de barra', desc:'Sessão principal rumo à primeira repetição', dose:'4 séries'},
  {icon:'🔥', name:'Abdominal remador', desc:'Técnica + séries controladas', dose:'4 séries'},
  {icon:'🪢', name:'Corda', desc:'Complementar, sem substituir a corrida', dose:'600–1200 pulos'},
  {icon:'🧘', name:'Mobilidade', desc:'Recuperação e prevenção de sobrecarga', dose:'8 min'}
];

const weekendOffWorkout = [
  {icon:'🏃', name:'Corrida objetiva', desc:'Sessão cedo, antes de buscar sua filha', dose:'25–35 min'},
  {icon:'💪', name:'Barra — técnica', desc:'Progressão curta e sem falha excessiva', dose:'3 séries'},
  {icon:'🔥', name:'Core', desc:'Fortalecimento específico', dose:'3 séries'},
  {icon:'🧘', name:'Mobilidade', desc:'Fechamento rápido', dose:'5 min'}
];

function diffDays(a,b){return Math.round((a-b)/86400000)}
function isWorkDay(date){return Math.abs(diffDays(date,BASE_DATE)) % 2 === 0}
function isWeekend(date){const d=date.getDay(); return d===0||d===6}
function fmtDay(date){return date.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.','').toUpperCase()}
function fmtDate(date){return date.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})}

function getContext(date){
  const work=isWorkDay(date);
  if(work) return {type:'DIA DE TRABALHO',hours:'08:00 — 20:00',note:'Saída de casa 07:45',title:'Sessão curta de preparação PMMG',duration:'35 min',list:workDayWorkout};
  if(isWeekend(date)) return {type:'FOLGA + FILHA',hours:'Buscar ~08:30',note:'Com ela até ~19:00',title:'Sessão cedo e objetiva',duration:'45–55 min',list:weekendOffWorkout};
  return {type:'DIA DE FOLGA',hours:'Treino principal pela manhã',note:'Sair 15:40 para buscar sua filha',title:'Sessão principal de preparação PMMG',duration:'60–75 min',list:weekdayOffWorkout};
}

function renderWorkout(list){
  const el=document.getElementById('workoutList');
  el.innerHTML=list.map(x=>`<div class="workout-item"><div class="workout-icon">${x.icon}</div><div><strong>${x.name}</strong><small>${x.desc}</small></div><em>${x.dose}</em></div>`).join('');
}

function renderWeek(){
  const el=document.getElementById('weekStrip');
  const days=[];
  for(let i=0;i<7;i++){
    const d=new Date(BASE_DATE); d.setDate(BASE_DATE.getDate()+i);
    const work=isWorkDay(d);
    const special=!work&&isWeekend(d);
    days.push(`<div class="day-card ${work?'work':'off'} ${i===0?'today':''}"><strong>${fmtDay(d)}</strong><span>${fmtDate(d)}</span><i></i><span>${work?'Trabalho':special?'Folga c/ filha':'Folga'}</span></div>`);
  }
  el.innerHTML=days.join('');
}

function setup(){
  const date=BASE_DATE;
  const ctx=getContext(date);
  document.getElementById('todayLabel').textContent=date.toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}).toUpperCase();
  document.getElementById('dayType').textContent=ctx.type;
  document.getElementById('dayHours').textContent=ctx.hours;
  document.getElementById('dayNote').textContent=ctx.note;
  document.getElementById('workoutTitle').textContent=ctx.title;
  document.getElementById('workoutDuration').textContent=ctx.duration;
  renderWorkout(ctx.list); renderWeek();

  const modal=document.getElementById('workoutModal');
  document.getElementById('startWorkoutBtn').onclick=()=>{
    document.getElementById('modalTitle').textContent=ctx.title;
    document.getElementById('modalExercises').innerHTML=ctx.list.map((x,i)=>`<label class="check-row"><input type="checkbox" data-index="${i}"><span><strong>${x.name}</strong><small>${x.desc} • ${x.dose}</small></span></label>`).join('');
    modal.classList.remove('hidden');
  };
  document.getElementById('closeModal').onclick=()=>modal.classList.add('hidden');
  document.getElementById('finishWorkout').onclick=()=>{
    const checks=[...document.querySelectorAll('#modalExercises input')];
    const done=checks.filter(x=>x.checked).length;
    localStorage.setItem('missao_taf_last_completion', `${done}/${checks.length}`);
    modal.classList.add('hidden');
    alert(`Treino salvo: ${done}/${checks.length} blocos concluídos.`);
  };
}
setup();
