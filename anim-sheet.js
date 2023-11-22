// Attendez que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez l'élément avec l'ID "animated-background"
  var animatedBackground = document.getElementById("animated-background");

  // Ajoutez un écouteur d'événements pour l'événement "mouseover"
  animatedBackground.addEventListener("mouseover", function () {
    // Changez l'image de fond lors du survol
    animatedBackground.style.backgroundImage = "url('Background numéro 1')"; /* Remplacez 'image2.jpg' par le chemin de votre deuxième image */
  });

  // Ajoutez un écouteur d'événements pour l'événement "mouseout" (pour revenir à l'image d'origine)
  animatedBackground.addEventListener("mouseout", function () {
    animatedBackground.style.backgroundImage = "url('Background numéro 2.jpg')";
  });
});
