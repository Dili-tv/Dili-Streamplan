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

const tage = [
  "Sonntag","Montag","Dienstag",
  "Mittwoch","Donnerstag","Freitag","Samstag"
];

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

// SAKURA
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (6 + Math.random() * 6) + "s";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 900)
