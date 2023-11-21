document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour mettre à jour la taille de la div en fonction de la taille de la page
  function updateSize() {
    var contentDiv = document.getElementById('content');
  // Mettez à jour la taille initiale
  updateSize();

  // Attachez la fonction à l'événement de redimensionnement de la fenêtre
  window.addEventListener('resize', updateSize);

  var contentDiv = document.getElementById('content');

  // Vérifier si l'élément existe avant d'attacher les gestionnaires d'événements
  if (contentDiv) {
    contentDiv.addEventListener('mouseenter', function() {
      contentDiv.style.backgroundImage = "url('Background numéro 1.jpg')";
    });

    contentDiv.addEventListener('mouseleave', function() {
      contentDiv.style.backgroundImage = "url('Background numéro 2.jpg')";
    });
  }
});
