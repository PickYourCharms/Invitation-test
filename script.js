const state = { profile: null };

const story = document.getElementById("story");
const gate = document.getElementById("gate");
const invitation = document.getElementById("invitation");
const form = document.getElementById("codeForm");
const input = document.getElementById("inviteCode");
const error = document.getElementById("codeError");
const changeCode = document.getElementById("changeCode");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}

function eventMarkup(event) {
  const venue = event.venue
    ? `<div class="meta">${escapeHtml(event.time)}<br>${escapeHtml(event.venue)}</div>
       ${event.mapUrl && event.mapUrl !== "REPLACE_WITH_GOOGLE_MAPS_LINK"
         ? `<a class="map-link" href="${escapeHtml(event.mapUrl)}" target="_blank" rel="noopener">↗ View on Google Maps</a>`
         : `<span class="map-link" aria-label="Google Maps link placeholder">↗ Google Maps link</span>`}`
    : `<div class="meta">${escapeHtml(event.time)}</div>`;

  let motif = "";
  if (event.key === "aiburobhat") motif = `<div class="alpana-ring" aria-hidden="true"></div>`;
  if (event.key === "mehendi") motif = `<div class="music-note" aria-hidden="true">♪ ♫ ♪</div><div class="petal-row" aria-hidden="true"><i class="petal"></i><i class="petal"></i><i class="petal"></i></div>`;
  if (event.key === "holud") motif = `<div class="haldis" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`;
  if (event.key === "wedding") motif = `<div class="wedding-mark" aria-hidden="true">❈</div>`;
  if (event.key === "bidaye") motif = `<div class="bidaye-line" aria-hidden="true"></div>`;
  if (event.key === "reception") motif = `<div class="reception-stars" aria-hidden="true">✦ ✧ ✦</div>`;

  return `<section class="event ${event.theme}" id="event-${event.key}">
    <div class="motif" aria-hidden="true"></div>
    <div class="event-content">
      <p class="event-date">${escapeHtml(event.date)}</p>
      <h2>${escapeHtml(event.title)}</h2>
      <h3>${escapeHtml(event.subtitle)}</h3>
      <p class="event-copy">${escapeHtml(event.copy)}</p>
      ${venue}
      ${motif}
    </div>
  </section>`;
}

function renderProfile(profile) {
  story.innerHTML = profile.events.map(key => {
    const event = INVITATION_DATA.events.find(e => e.key === key);
    return event ? eventMarkup(event) : "";
  }).join("");
  gate.classList.add("hidden");
  invitation.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
  state.profile = profile;
}

function lookupCode(code) {
  const normalized = code.trim().toUpperCase();
  return INVITATION_DATA.profiles[normalized] || null;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const profile = lookupCode(input.value);
  if (!profile) {
    error.textContent = "That invitation code could not be found. Please check it and try again.";
    input.focus();
    return;
  }
  error.textContent = "";
  renderProfile(profile);
});

changeCode.addEventListener("click", () => {
  invitation.classList.add("hidden");
  gate.classList.remove("hidden");
  story.innerHTML = "";
  input.value = "";
  error.textContent = "";
  window.scrollTo({top:0, behavior:"instant"});
  input.focus();
});
