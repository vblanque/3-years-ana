// =========================
// STEP MANAGEMENT
// =========================

let currentStep = 0;
const steps = document.querySelectorAll(".step");

// Show a specific step
function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

// Initial display
showStep(currentStep);

// =========================
// STEP 2 TEASER EFFECT SETUP
// =========================

const step2 = document.querySelector('.step[data-step="2"]');
const noBtn = step2?.querySelector('.btn.is-teaser');
const yesBtn = step2?.querySelector('.btn.is-next');

function moveNoButton() {
  if (!noBtn || !yesBtn) return;

  const x = Math.random() * 150 - 30;
  const y = Math.random() * 50 - 10;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(0.85)`;

  yesBtn.classList.add("boost");
  setTimeout(() => {
    yesBtn.classList.remove("boost");
  }, 300);
}

// Hover support (desktop)
if (noBtn) {
  noBtn.addEventListener("mouseenter", moveNoButton);
}

// =========================
// GLOBAL CLICK HANDLER
// =========================

document.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  const step = btn.closest(".step");

  /* =========================
     TEASER BUTTONS
  ========================= */
  if (btn.classList.contains("is-teaser")) {

    // STEP 2: playful dodge
    if (step && step.dataset.step === "2") {
      event.preventDefault();
      moveNoButton();
      return; // stop here, no progression
    }

    // STEP 3: reveal hidden option
    if (step && step.dataset.step === "3") {
      const hidden = step.querySelector(".hidden-option");
      if (hidden) {
        hidden.style.display = "block";
      }
    }
  }

  /* =========================
     NEXT STEP BUTTONS
  ========================= */
  if (btn.classList.contains("is-next")) {
    currentStep++;

    if (currentStep < steps.length) {
      showStep(currentStep);
    }
  }
});


