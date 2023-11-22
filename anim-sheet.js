// Définir la fonction changeBackground en dehors de l'événement DOMContentLoaded
function changeBackground(imageUrl) {
  document.body.style.backgroundImage = "url(" + imageUrl + ")";
}

document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  // Attacher les gestionnaires d'événements seulement si l'élément existe
  if (contentDiv) {
    contentDiv.addEventListener('mouseenter', function() {
      changeBackground('Background numéro 2.jpg');
    });

    contentDiv.addEventListener('mouseleave', function() {
      changeBackground('Background numéro 1.jpg');
    });
  }
});
