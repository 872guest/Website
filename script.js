// Detect touch vs mouse input
const isTouch =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0;

if (isTouch) {
  document.body.classList.add("touch");
} else {
  document.body.classList.add("mouse");
}
