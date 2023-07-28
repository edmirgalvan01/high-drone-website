const headerDrone = document.getElementById("headerDrone");

addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    headerDrone.style.display = "none";
  } else {
    headerDrone.style.display = "block";
  }
});
