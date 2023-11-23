document.addEventListener('DOMContentLoaded', function() {
  // Stocker la référence à l'élément body dans une variable
  var body = document.body;

  // Stocker la référence à l'élément #content dans une variable
  var contentDiv = document.getElementById('content');

  // Variable pour suivre le statut de l'animation
  var isAnimating = false;

  function changeBackground(imageUrl) {
    // Vérifier si une animation est en cours
    if (!isAnimating) {
      // Définir le statut de l'animation comme en cours
      isAnimating = true;

      // Appliquer le nouvel arrière-plan avec une transition
      body.style.backgroundImage = "url(" + imageUrl + ")";

      // Lorsque l'animation est terminée, rétablir le statut de l'animation
      setTimeout(function() {
        isAnimating = false;
      }, 500); // La valeur 500 correspond à la durée de votre transition en millisecondes
    }
  }
  
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
