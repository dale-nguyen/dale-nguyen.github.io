// Simple JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Page loaded. Test out the navigation and dead buttons for rage clicking."
  );
  const btn = document.querySelector("#dead-button2"); // Using ID selector
  if (btn) {
    btn.addEventListener("click", function () {
      if (window.clarity) {
        window.clarity("event", "DeadButton2Clicked", {
          reason: "user clicked second button",
          source: "HTML button",
        });
      }
      alert("This button is also dead!");
    });
  }
});
