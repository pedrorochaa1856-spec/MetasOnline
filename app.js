// =====================
// LOGIN
// =====================

const loginPage =
document.getElementById(
"loginPage"
);

const app =
document.getElementById(
"app"
);

const guestBtn =
document.getElementById(
"guestBtn"
);

const profileName =
document.getElementById(
"profileName"
);

const profilePhoto =
document.getElementById(
"profilePhoto"
);

guestBtn.onclick = ()=>{

profileName.textContent =
"Visitante";

profilePhoto.src =
"https://cdn-icons-png.flaticon.com/512/149/149071.png";

loginPage.classList.add(
"hidden"
);

app.classList.remove(
"hidden"
);

};

// =====================
// XP
// =====================

let xp =
parseInt(
localStorage.getItem("xp")
) || 0;

let level =
parseInt(
localStorage.getItem("level")
) || 1;

const xpFill =
document.getElementById(
"xpFill"
);

const xpText =
document.getElementById(
"xpText"
);

const levelText =
document.getElementById(
"levelText"
);

function updateXP(){

const maxXP =
level * 100;

const percent =
(xp / maxXP) * 100;

xpFill.style.width =
percent + "%";

xpText.textContent =
xp + " / " + maxXP;

levelText.textContent =
"Nível " + level;

if(xp >= maxXP){

xp = 0;

level++;

localStorage.setItem(
"level",
level
);

alert(
"🎉 Você subiu de nível!"
);

}

localStorage.setItem(
"xp",
xp
);

}

updateXP();

// =====================
// STREAK
// =====================

let streak =
parseInt(
localStorage.getItem(
"streak"
)
) || 0;

document.getElementById(
"streak"
).textContent =
streak;

// =====================
// METAS
// =====================

const taskTitle =
document.getElementById(
"taskTitle"
);

const taskCategory =
document.getElementById(
"taskCategory"
);

const taskPriority =
document.getElementById(
"taskPriority"
);

const taskDate =
document.getElementById(
"taskDate"
);

const addTask =
document.getElementById(
"addTask"
);

const taskList =
document.getElementById(
"taskList"
);

const taskCount =
document.getElementById(
"taskCount"
);

let tasks =
JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function renderTasks(){

taskList.innerHTML = "";

taskCount.textContent =
tasks.length;

tasks.forEach(
(task,index)=>{

const div =
document.createElement(
"div"
);

div.className =
"task";

div.innerHTML =

`
<div class="taskInfo">

<strong>
${task.title}
</strong>

<span>
📂 ${task.category}
</span>

<span>
📅 ${task.date}
</span>

<span class="
priority
${task.priority.toLowerCase()}
">

${task.priority}

</span>

</div>

<button
onclick="
completeTask(${index})
">

Concluir

</button>
`;

taskList.appendChild(
div
);

});

}

window.completeTask =
function(index){

tasks.splice(
index,
1
);

saveTasks();

xp += 25;

streak++;

localStorage.setItem(
"streak",
streak
);

updateXP();

renderTasks();

document.getElementById(
"streak"
).textContent =
streak;

checkBadges();

};

addTask.onclick = ()=>{

if(
taskTitle.value.trim()
=== ""
) return;

tasks.push({

title:
taskTitle.value,

category:
taskCategory.value,

priority:
taskPriority.value,

date:
taskDate.value

});

saveTasks();

renderTasks();

taskTitle.value = "";

};

renderTasks();

// =====================
// BADGES
// =====================

function checkBadges(){

const badges =
document.getElementById(
"badges"
);

if(streak >= 7){

badges.innerHTML +=

`
<div class="badge">
🔥 7 Dias
</div>
`;

}

if(level >= 5){

badges.innerHTML +=

`
<div class="badge">
⭐ Nível 5
</div>
`;

}

}

// =====================
// PARTÍCULAS
// =====================

tsParticles.load(
"particles",
{

fpsLimit:60,

particles:{

number:{
value:60
},

color:{
value:"#00ff88"
},

links:{
enable:true,
distance:140,
color:"#00ff88",
opacity:.25
},

move:{
enable:true,
speed:1.2
},

size:{
value:{
min:1,
max:3
}
}

},

background:{
color:"transparent"
}

}
);
