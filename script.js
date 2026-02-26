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

// SÜSSE KATZENPFOTEN IM HINTERGRUND

function createBackgroundPaw() {

  const paw = document.createElement("div");
  paw.className = "paw-bg";

  paw.innerHTML = `
    <svg viewBox="0 0 100 100" width="45" height="45">
      <!-- Zehen -->
      <ellipse cx="30" cy="35" rx="10" ry="14" fill="black"/>
      <ellipse cx="50" cy="25" rx="10" ry="14" fill="black"/>
      <ellipse cx="70" cy="35" rx="10" ry="14" fill="black"/>
      <ellipse cx="40" cy="55" rx="10" ry="14" fill="black"/>
      <ellipse cx="60" cy="55" rx="10" ry="14" fill="black"/>

      <!-- Ballen -->
      <path d="M35 65 
               Q50 85 65 65 
               Q70 55 50 50 
               Q30 55 35 65 Z" 
            fill="black"/>
    </svg>
  `;

  paw.style.left = Math.random() * window.innerWidth + "px";
  paw.style.top = Math.random() * window.innerHeight + "px";
  paw.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 5000);
}

setInterval(createBackgroundPaw, 1800);
