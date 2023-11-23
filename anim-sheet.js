  document.addEventListener("DOMContentLoaded", function () {
  var animatedBackground = document.getElementById("animated-background");

  animatedBackground.addEventListener("mouseover", function () {
    animatedBackground.style.backgroundImage = "url('bg1.jpg')";
  });

  animatedBackground.addEventListener("mouseout", function () {
    animatedBackground.style.backgroundImage = "url('bg2.jpg')";
  });
});

document.addEventListener("DOMContentLoaded", function () {
    var textElement = document.getElementById("text");

    // Ajoutez une classe pour appliquer l'effet d'apparition
    textElement.classList.add("appear");

    // Réglez le délai pour l'effet d'apparition (en millisecondes)
    setTimeout(function () {
        textElement.style.opacity = "1";
    }, 500); // Ajoutez ou ajustez le délai selon vos préférences
});
