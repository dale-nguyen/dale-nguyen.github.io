// Simple JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Page loaded. Test out the navigation and dead buttons for rage clicking."
  );
  mixpanel.init("958b76b27302f332f6244250401a4825", { debug: true });

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
