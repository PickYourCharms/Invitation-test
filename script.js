const state = {
  profile: null
};

const story = document.getElementById("story");
const gate = document.getElementById("gate");
const invitation = document.getElementById("invitation");
const form = document.getElementById("codeForm");
const input = document.getElementById("inviteCode");
const error = document.getElementById("codeError");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[ch]));
}

function eventMarkup(event) {

  const mapLink =
    event.mapUrl &&
    event.mapUrl !== "REPLACE_WITH_GOOGLE_MAPS_LINK"

      ? `
        <a
          class="map-link"
          href="${escapeHtml(event.mapUrl)}"
          target="_blank"
          rel="noopener"
        >
          ↗ Google Maps Link
        </a>
      `

      : `
        <span
          class="map-link"
          aria-label="Google Maps link placeholder"
        >
          ↗ Google Maps Link
        </span>
      `;

  return `
    <section
      class="event ${event.theme}"
      id="event-${event.key}"
    >

      <div class="event-content">

        <p class="event-date">
          ${escapeHtml(event.date)}
        </p>

        <h2>
          ${escapeHtml(event.title)}
        </h2>

        <h3>
          ${escapeHtml(event.subtitle)}
        </h3>

        <p class="event-copy">
          ${escapeHtml(event.copy)}
        </p>

        ${mapLink}

      </div>

    </section>
  `;
}

function renderProfile(profile) {

  story.innerHTML = profile.events
    .map(key => {

      const event =
        INVITATION_DATA.events.find(
          e => e.key === key
        );

      return event
        ? eventMarkup(event)
        : "";

    })
    .join("");

  state.profile = profile;

  gate.classList.add("hidden");
  invitation.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

  observeEvents();
}

function lookupCode(code) {

  const normalized =
    code.trim().toUpperCase();

  return (
    INVITATION_DATA.profiles[normalized]
    || null
  );
}

form.addEventListener("submit", event => {

  event.preventDefault();

  const profile =
    lookupCode(input.value);

  if (!profile) {

    error.textContent =
      "That invitation code could not be found. Please check it and try again.";

    input.focus();

    return;
  }

  error.textContent = "";

  renderProfile(profile);
});


/* ---------------------------------------------------------
   Gentle reveal animation as events enter the viewport
   --------------------------------------------------------- */

function observeEvents() {

  const sections =
    document.querySelectorAll(".event");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target
              .classList
              .add("is-visible");

            observer.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold:0.18
      }
    );

  sections.forEach(section => {
    observer.observe(section);
  });
}
