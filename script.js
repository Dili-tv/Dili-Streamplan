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

// HINTERGRUND PFOTEN

function createBackgroundPaw() {
  const paw = document.createElement("div");
  paw.className = "paw-bg";

  paw.innerHTML = `
  <svg viewBox="0 0 64 64" width="40" height="40" fill="black">
    <circle cx="20" cy="20" r="6"/>
    <circle cx="44" cy="20" r="6"/>
    <circle cx="16" cy="36" r="6"/>
    <circle cx="48" cy="36" r="6"/>
    <ellipse cx="32" cy="44" rx="12" ry="10"/>
  </svg>
  `;

  paw.style.left = Math.random() * window.innerWidth + "px";
  paw.style.top = Math.random() * window.innerHeight + "px";
  paw.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 4000);
}

setInterval(createBackgroundPaw, 1500);
