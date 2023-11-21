document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  // Attacher les gestionnaires d'événements seulement si l'élément existe
  if (contentDiv) {
    contentDiv.addEventListener('mouseenter', function() {
      document.body.style.backgroundImage = "url('Background numéro 2.jpg')";
    });

    contentDiv.addEventListener('mouseleave', function() {
      document.body.style.backgroundImage = "url('Background numéro 1.jpg')";
    });
  }
});
