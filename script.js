// Simple JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Page loaded. Test out the navigation and dead buttons for rage clicking."
  );
  const btn = document.querySelector("#dead-button2"); // Using ID selector
  if (btn) {
    btn.addEventListener("click", function () {
      console.log("Clicked");
      if (window.clarity) {
        console.log("It's in here");
        window.clarity("event", "clickDeadBtn");
      }
      alert("This button is also dead!");
    });
  }
});
