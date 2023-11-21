document.addEventListener('DOMContentLoaded', function() {
  function changeBackground(imageUrl) {
    document.body.style.backgroundImage = "url('"Background numéro 2"')";
  }

  var contentDiv = document.getElementById('content');

  // Attacher les gestionnaires d'événements seulement si l'élément existe
  if (contentDiv) {
    contentDiv.addEventListener('mouseenter', function() {
      changeBackground('Background-numero-2.jpg');
    });

    contentDiv.addEventListener('mouseleave', function() {
      changeBackground('Background-numero-1.jpg');
    });
  }
});
