// DESIGN CHOICE:
// We manage steps by index instead of hardcoding IDs.
// This makes it easy to add/remove steps later.

let currentStep = 0;
const steps = document.querySelectorAll(".step");

// Helper function to show a step
function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

// Initial state
showStep(currentStep);

// Handle "next" buttons
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("is-next")) {
    currentStep++;

    // Safety: don’t go past last step
    if (currentStep < steps.length) {
      showStep(currentStep);
    }
  }
});

// NOTE:
// - The "No" button currently does nothing
// - This is intentional: later we’ll make it move, escape, tease, etc.

