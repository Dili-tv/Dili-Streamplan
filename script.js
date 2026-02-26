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

// DIAGONALE KATZENPFOTEN-SPUR

let pawStep = 0;

function createDiagonalPaw() {

  const paw = document.createElement("div");
  paw.className = "paw-bg";

  const x = pawStep * 90;
  const y = window.innerHeight - (pawStep * 90);

  paw.style.left = x + "px";
  paw.style.top = y + "px";
  paw.style.transform = `rotate(${pawStep % 2 === 0 ? -25 : 25}deg)`;

  paw.innerHTML = `
    <svg viewBox="0 0 100 100" width="45" height="45">
      <ellipse cx="30" cy="35" rx="10" ry="14" fill="black"/>
      <ellipse cx="50" cy="25" rx="10" ry="14" fill="black"/>
      <ellipse cx="70" cy="35" rx="10" ry="14" fill="black"/>
      <ellipse cx="40" cy="55" rx="10" ry="14" fill="black"/>
      <ellipse cx="60" cy="55" rx="10" ry="14" fill="black"/>
      <path d="M35 65 Q50 85 65 65 Q70 55 50 50 Q30 55 35 65 Z" fill="black"/>
    </svg>
  `;

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 6000);

  pawStep++;

  if (x > window.innerWidth || y < 0) {
    pawStep = 0;
  }
}

setInterval(createDiagonalPaw, 900);
