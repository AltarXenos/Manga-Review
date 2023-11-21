document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  // Fonction pour mettre à jour la taille de la div en fonction de la taille de la page
  function updateSize() {
    contentDiv.style.width = window.innerWidth + 'px';
    contentDiv.style.height = window.innerHeight + 'px';
  }

  // Mettez à jour la taille initiale
  updateSize();

  // Attachez la fonction à l'événement de redimensionnement de la fenêtre
  window.addEventListener('resize', updateSize);

  contentDiv.addEventListener('mouseenter', function() {
    contentDiv.style.backgroundImage = "url('chemin/vers/votre/image-alternative.jpg')";
  });

  contentDiv.addEventListener('mouseleave', function() {
    contentDiv.style.backgroundImage = "url('chemin/vers/votre/image-initiale.jpg')";
  });
});
