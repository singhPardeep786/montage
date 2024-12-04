// Initialize Lenis with smooth scrolling options
const lenis = new Lenis({
  duration: 1.3, // Increased duration for smoother scrolling
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
  // smoothWheel: true,
  // wheelMultiplier: 0.8, // Reduced multiplier for more controlled scrolling
  // lerp: 0.5
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);