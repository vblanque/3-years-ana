// Manage steps by index

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

document.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  /* =========================
     NEXT STEP BUTTONS
  ========================= */
  if (btn.classList.contains("is-next")) {
    currentStep++;

    if (currentStep < steps.length) {
      showStep(currentStep);
    }
  }

  /* =========================
     TEASER BUTTONS
  ========================= */
  if (btn.classList.contains("is-teaser")) {

    // STEP 3: reveal hidden option
    const step = btn.closest(".step");
    if (step && step.dataset.step === "3") {
      const hidden = step.querySelector(".hidden-option");
      if (hidden) {
        hidden.style.display = "block";
      }
    }

    // 👉 You can add fun stuff here:
    // - small shake animation
    // - text change
    // - button moves away
  }
});


