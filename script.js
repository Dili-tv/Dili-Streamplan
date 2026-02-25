// MODE SWITCH
const switchInput = document.getElementById("modeSwitch");

switchInput.addEventListener("change", () => {
  if (switchInput.checked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
});

// STREAMPLAN
const streamplan = [
  { tag: "Sonntag", zeit: "-", titel: "Pause" },
  { tag: "Montag", zeit: "18:00", titel: "Gaming" },
  { tag: "Dienstag", zeit: "18:00", titel: "Just Chatting" },
  { tag: "Mittwoch", zeit: "18:00", titel: "Community" },
  { tag: "Donnerstag", zeit: "18:00", titel: "Gaming" },
  { tag: "Freitag", zeit: "18:00", titel: "Special Stream" },
  { tag: "Samstag", zeit: "18:00", titel: "Community Games" }
];

const tage = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
const heute = tage[new Date().getDay()];
const container = document.getElementById("schedule");

streamplan.forEach(eintrag => {
  const card = document.createElement("div");
  card.className = "card";

  if (eintrag.tag === heute) {
    card.classList.add("today");
  }

  card.innerHTML = `
    <h2>${eintrag.tag}</h2>
    <div>${eintrag.zeit}</div>
    <div>${eintrag.titel}</div>
  `;

  container.appendChild(card);
});

// REALISTISCHE SAKURA
function createPetal() {

  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (8 + Math.random() * 6) + "s";

  petal.innerHTML = `
    <svg viewBox="0 0 64 64" width="34" height="34">
      <path d="M32 5 C40 5, 45 15, 32 22 C19 15, 24 5, 32 5 Z" fill="#ffb7d5"/>
      <path d="M32 22 C45 15, 58 28, 45 38 C35 45, 30 35, 32 22 Z" fill="#ffc8e0"/>
      <path d="M32 22 C30 35, 19 45, 9 38 C-4 28, 19 15, 32 22 Z" fill="#ffb7d5"/>
      <circle cx="32" cy="28" r="4" fill="#ffd166"/>
    </svg>
  `;

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 14000);
}

setInterval(createPetal, 1200);
