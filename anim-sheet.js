
document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  contentDiv.addEventListener('mouseover', function() {
    contentDiv.style.backgroundImage = "url('chemin/vers/votre/image-alternative.jpg')";
  });

  contentDiv.addEventListener('mouseout', function() {
    contentDiv.style.backgroundImage = "url('chemin/vers/votre/image-initiale.jpg')";
  });
});
