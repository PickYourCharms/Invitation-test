document.addEventListener("DOMContentLoaded", () => {
    const inviteBtn = document.getElementById("open-invite-btn");
    const codeInput = document.getElementById("invite-code-input");
    const errorMsg = document.getElementById("code-error");
    const openingScreen = document.getElementById("opening-screen");
    const invitationJourney = document.getElementById("invitation-journey");
    const dynamicEventsWrapper = document.getElementById("dynamic-events-wrapper");

    // Handle code submission
    inviteBtn.addEventListener("click", processInvitationCode);
    codeInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            processInvitationCode();
        }
    });

    function processInvitationCode() {
        const enteredCode = codeInput.value.trim();

        if (!enteredCode) {
            showError("Please enter an invitation code.");
            return;
        }

        // Validate against INVITATION_DATA profiles defined in config/config.js
        if (typeof INVITATION_DATA === "undefined") {
            showError("Configuration data not loaded.");
            return;
        }

        const profile = INVITATION_DATA.profiles[enteredCode];

        if (!profile) {
            showError("Invalid invitation code. Please check and try again.");
            return;
        }

        // Build the continuous event journey dynamically based on authorized event keys
        buildEventJourney(profile.events);

        // Transition views smoothly
        openingScreen.classList.add("hidden");
        invitationJourney.classList.remove("hidden");

        // Initialize scroll animations for the new elements
        initScrollAnimations();

        // Scroll cleanly to the top of the journey
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove("hidden");
    }

    function buildEventJourney(allowedEventKeys) {
        dynamicEventsWrapper.innerHTML = "";

        const allEvents = INVITATION_DATA.events;
        const activeEvents = allEvents.filter(ev => allowedEventKeys.includes(ev.key));

        activeEvents.forEach(ev => {
            const section = document.createElement("section");
            section.className = `event-node ${ev.theme || 'theme-aiburo'}`;
            section.setAttribute("id", `event-${ev.key}`);

            // Construct map link HTML only if provided and valid
            let mapHtml = "";
            if (ev.mapUrl && ev.mapUrl !== "REPLACE_WITH_GOOGLE_MAPS_LINK") {
                mapHtml = `<a href="${ev.mapUrl}" target="_blank" rel="noopener noreferrer" class="map-link-btn">View Map</a>`;
            }

            section.innerHTML = `
                <div class="node-inner scroll-reveal">
                    <h2 class="node-title">${ev.title}</h2>
                    <p class="node-subtitle">${ev.subtitle}</p>
                    <p class="node-date-time">${ev.date} · ${ev.time}</p>
                    <p class="node-venue">${ev.venue}</p>
                    <p class="node-copy">${ev.copy}</p>
                    ${mapHtml}
                </div>
            `;

            dynamicEventsWrapper.appendChild(section);
        });
    }

    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(el => observer.observe(el));
    }
});
