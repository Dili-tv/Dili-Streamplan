// ===== STREAMPLAN DATEN =====

const streamplan = [
  { tag: "Sonntag", zeit: "-", titel: "Pause" },
  { tag: "Montag", zeit: "18:00", titel: "Gaming" },
  { tag: "Dienstag", zeit: "18:00", titel: "Just Chatting" },
  { tag: "Mittwoch", zeit: "18:00", titel: "Community" },
  { tag: "Donnerstag", zeit: "18:00", titel: "Gaming" },
  { tag: "Freitag", zeit: "18:00", titel: "Special Stream" },
  { tag: "Samstag", zeit: "18:00", titel: "Community Games" }
];

// ===== HEUTIGEN TAG ERMITTELN =====

const tage = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag"
];

const heute = tage[new Date().getDay()];

const container = document.getElementById("schedule");

// ===== CARDS ERSTELLEN =====

streamplan.forEach(eintrag => {

  const card = document.createElement("div");
  card.className = "card";

  if (eintrag.tag === heute) {
    card.classList.add("today");
  }

  card.innerHTML = `
    <h2>${eintrag.tag}</h2>
    <div class="time">${eintrag.zeit}</div>
    <div>${eintrag.titel}</div>
  `;

  container.appendChild(card);

});
