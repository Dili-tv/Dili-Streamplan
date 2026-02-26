// FLOWER TOGGLE
const flower = document.getElementById("modeFlower");

flower.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// STREAMPLAN
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

// FALLING PETALS

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (6 + Math.random() * 4) + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 600);
