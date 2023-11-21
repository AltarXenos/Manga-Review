
document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  contentDiv.addEventListener('mouseover', function() {
    contentDiv.style.backgroundImage = "url('Background numéro 1.jpg')";
  });

  contentDiv.addEventListener('mouseout', function() {
    contentDiv.style.backgroundImage = "url('Background numéro 2.jpg')";
  });
});
