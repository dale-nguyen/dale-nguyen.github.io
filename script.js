// Simple JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Page loaded. Test out the navigation and dead buttons for rage clicking."
  );
  mixpanel.init("abc27fde1962f75d1741d0094f77e7b6", { debug: true });

  mixpanel.track("Page Loaded");

  const btn = document.getElementById("dead-button");
  if (btn) {
    btn.addEventListener("click", () => {
      mixpanel.track("Clicked Button", {
        source: "HTML test project",
      });
    });
  }
});
