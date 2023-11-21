document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  // Fonction pour mettre à jour la taille de la div en fonction de la taille de la page
  function updateSize() {
    // Vérifier si l'élément existe
    if (contentDiv) {
      contentDiv.style.width = window.innerWidth + 'px';
      contentDiv.style.height = window.innerHeight + 'px';
    }
  }

  // Mettez à jour la taille initiale
  updateSize();

  // Attachez la fonction à l'événement de redimensionnement de la fenêtre
  window.addEventListener('resize', updateSize);

  contentDiv.addEventListener('mouseenter', function() {
    // Vérifier si l'élément existe
    if (contentDiv) {
      contentDiv.style.backgroundImage = "url('Background numéro 1.jpg')";
    }
  });

  contentDiv.addEventListener('mouseleave', function() {
    // Vérifier si l'élément existe
    if (contentDiv) {
      contentDiv.style.backgroundImage = "url('Background numéro 2.jpg')";
    }
  });
});
