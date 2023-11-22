document.addEventListener("DOMContentLoaded", function () {
  var animatedBackground = document.getElementById("animated-background");

  animatedBackground.addEventListener("mouseover", function () {
    animatedBackground.style.backgroundImage = "url('bg3.jpg')";
  });

  animatedBackground.addEventListener("mouseout", function () {
    animatedBackground.style.backgroundImage = "url('bg2.jpg')";
  });
});
