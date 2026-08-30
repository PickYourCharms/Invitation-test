/**
 * Digital Bengali Wedding Invitation — Chandrima & Arnab
 * Handles dynamic invitation configuration lookup and continuous UI populating.
 */

function openInvitation() {
    const input = document.getElementById("invitation-code");
    const errorMsg = document.getElementById("error-message");
    const code = input ? input.value.trim().toUpperCase() : "";

    if (!code) {
        if (errorMsg) errorMsg.textContent = "Please enter a valid invitation code.";
        return;
    }

    // Check against global INVITATION_DATA or custom config object
    const data = (window.INVITATION_DATA && window.INVITATION_DATA[code]) 
        ? window.INVITATION_DATA[code] 
        : (window.INVITATION_DATA ? window.INVITATION_DATA["ALL-001"] || Object.values(window.INVITATION_DATA)[0] : null);

    if (!data) {
        if (errorMsg) errorMsg.textContent = "Invalid invitation code. Please try again.";
        return;
    }

    if (errorMsg) errorMsg.textContent = "";

    // Populate events
    populateEvents(data);

    // Hide opening form/cover gracefully or scroll down
    const journey = document.getElementById("event-journey");
    if (journey) {
        journey.classList.remove("hidden");
        journey.scrollIntoView({ behavior: "smooth" });
    }
}

function populateEvents(data) {
    const events = [
        { id: "aiburobhat", key: "aiburobhat" },
        { id: "mehendi", key: "mehendi" },
        { id: "holud", key: "gaye_holud" },
        { id: "wedding", key: "wedding" },
        { id: "bidaye", key: "bidaye" },
        { id: "reception", key: "reception" }
    ];

    events.forEach(item => {
        const eventData = data[item.key] || (data.events ? data.events[item.key] : null);
        if (!eventData) return;

        const slotElem = document.getElementById(`slot-${item.id}`);
        const dateElem = document.getElementById(`date-${item.id}`);
        const venueElem = document.getElementById(`venue-${item.id}`);
        const descElem = document.getElementById(`desc-${item.id}`);
        const mapContainer = document.getElementById(`map-container-${item.id}`);

        if (slotElem) slotElem.textContent = eventData.time || eventData.subtitle || "";
        if (dateElem) dateElem.textContent = eventData.date || "";
        if (venueElem) venueElem.textContent = eventData.venue || "";
        if (descElem) descElem.textContent = eventData.description || "";

        if (mapContainer) {
            if (eventData.mapLink || eventData.locationUrl) {
                const url = eventData.mapLink || eventData.locationUrl;
                mapContainer.innerHTML = `<a href="${url}" target="_blank" rel="noopener">View Location on Map ➔</a>`;
            } else {
                mapContainer.innerHTML = "";
            }
        }
    });

    if (data.closingMessage) {
        const closingMsgElem = document.getElementById("closing-message");
        if (closingMsgElem) closingMsgElem.textContent = data.closingMessage;
    }
}

// Allow Enter key press in the code input
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("invitation-code");
    if (input) {
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                openInvitation();
            }
        });
    }
});
