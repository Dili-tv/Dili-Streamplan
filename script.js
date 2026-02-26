// FLOWER TOGGLE
const flower = document.getElementById("modeFlower");

flower.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// STREAMPLAN (Montag → Sonntag)

const streamplan = [
  { tag: "Montag", zeit: "18:00", titel: "Gaming" },
  { tag: "Dienstag", zeit: "18:00", titel: "Just Chatting" },
  { tag: "Mittwoch", zeit: "18:00", titel: "Community" },
  { tag: "Donnerstag", zeit: "18:00", titel: "Gaming" },
  { tag: "Freitag", zeit: "18:00", titel: "Special Stream" },
  { tag: "Samstag", zeit: "18:00", titel: "Community Games" },
  { tag: "Sonntag", zeit: "-", titel: "Pause" }
];

const heuteIndex = new Date().getDay();
const angepassterIndex = heuteIndex === 0 ? 6 : heuteIndex - 1;

const container = document.getElementById("schedule");

streamplan.forEach((eintrag, index) => {
  const card = document.createElement("div");
  card.className = "card";

  if (index === angepassterIndex) {
    card.classList.add("today");
  }

  card.innerHTML = `
    <h2>${eintrag.tag}</h2>
    <div>${eintrag.zeit}</div>
    <div>${eintrag.titel}</div>
  `;

  container.appendChild(card);
});

// FALLENDE BLÜTEN

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (8 + Math.random() * 6) + "s";

  petal.innerHTML = `
    <svg viewBox="0 0 40 60" width="24" height="36">
      <path d="M20 0 C35 10 35 40 20 60 C5 40 5 10 20 0 Z" fill="#ffb7d5"/>
    </svg>
  `;

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 14000);
}

setInterval(createPetal, 900);
