document.addEventListener("DOMContentLoaded", () => {
    const inviteBtn = document.getElementById("open-invite-btn");
    const codeInput = document.getElementById("invite-code-input");
    const errorMsg = document.getElementById("code-error");
    const openingScreen = document.getElementById("opening-screen");
    const invitationJourney = document.getElementById("invitation-journey");

    // ==========================================
    // 1. INVITATION CODE LOGIC
    // ==========================================
    inviteBtn.addEventListener("click", () => {
        const code = codeInput.value.trim().toLowerCase();
        
        if (!code) {
            showError("Please enter your invitation code.");
            return;
        }

        // ⚠️ INTEGRATION POINT: Call your existing validation from config/ here.
        // Assuming your existing logic exports a validation function or global data:
        // const guestData = window.validateCode(code); // Example wrapper
        
        // --- MOCK VALIDATION FOR STRUCTURAL PURPOSES ---
        // Replace this block with your actual existing logic checks
        const isValid = true; 
        
        if (isValid) {
            // Populate the DOM with existing config data before showing
            populateEventData(); // Map your config data to the sections here
            
            // Elegant transition
            openingScreen.classList.add("hidden");
            invitationJourney.classList.remove("hidden");
            
            // Re-trigger scroll observer for freshly visible elements
            setupScrollAnimations();
            
            // Scroll to top elegantly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            showError("Invalid code. Please try again.");
        }
    });

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove("hidden");
    }

    // ==========================================
    // 2. DATA POPULATION (Bridging to config/)
    // ==========================================
    function populateEventData() {
        /*
          ⚠️ INTEGRATION POINT: 
          Use your existing config/ data to inject HTML into these IDs.
          Example format to maintain the elegant typography:
          
          document.getElementById('data-aiburobhat').innerHTML = `
              <h3>Sunday, 15th October</h3>
              <p>12:30 PM Onwards</p>
              <p>Residence of the Bride</p>
              <p class="description">A traditional Bengali feast...</p>
          `;
        */
       
       // Similarly populate #data-mehendi, #data-holud, etc., 
       // and inject your closing sentiment into #existing-sentiment-container.
    }

    // ==========================================
    // 3. ELEGANT SCROLL ANIMATIONS
    // ==========================================
    function setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Triggers when 15% of the section is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(el => observer.observe(el));
    }
});
