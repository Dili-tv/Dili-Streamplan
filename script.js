const streamplan = [
  { tag: "Montag", zeit: "18:00", titel: "Gaming", live: true },
  { tag: "Dienstag", zeit: "18:00", titel: "Just Chatting", live: true },
  { tag: "Mittwoch", zeit: "18:00", titel: "Community", live: true },
  { tag: "Donnerstag", zeit: "18:00", titel: "Gaming", live: true },
  { tag: "Freitag", zeit: "18:00", titel: "Special Stream", live: true },
  { tag: "Samstag", zeit: "18:00", titel: "Community Games", live: true },
  { tag: "Sonntag", zeit: "-", titel: "Pause", live: false }
];

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

streamplan.forEach(eintrag => {
  const card = document.createElement("div");
  card.className = "card";

  if (eintrag.tag === heute) {
    card.classList.add("today");
  }

  card.innerHTML = 
    <h2>${eintrag.tag}</h2>
    <div class="time">${eintrag.zeit}</div>
    <div>${eintrag.titel}</div>
    ${eintrag.live ? <a class="live-link" href="https://twitch.tv/deinkanal" target="_blank">Zum Stream</a> : ""}
  ;

  container.appendChild(card);
});
