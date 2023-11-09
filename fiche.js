// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}









// effet d'apparition texte quand il es visible a l'Ã©cran



// RÃ©cupÃ©ration de tous les Ã©lÃ©ments Ã  animer
const qElements = document.querySelectorAll('#q1, #q2, #q3');

// CrÃ©ation de l'observateur
const observer = new IntersectionObserver((entries) => {
  // Pour chaque entrÃ©e
  entries.forEach(entry => {
    // Si l'entrÃ©e est visible Ã  l'Ã©cran
    if (entry.isIntersecting) {
      // Ajout de la classe "animate"
      entry.target.classList.add('animate');
      // ArrÃªt de l'observation
      observer.unobserve(entry.target);
    }
  });
});

// Observation de chaque Ã©lÃ©ment
qElements.forEach(q => {
  observer.observe(q);
});








// Page contact 

function showSuccessMessage() {
  var successMessage = document.createElement('p');
  successMessage.textContent = "Message envoyÃ© avec succÃ¨s ! Redirection...";
  successMessage.style.color = "green";
  document.querySelector('.contact-form').appendChild(successMessage);

  // Rediriger vers la page d'accueil aprÃ¨s 5 secondes
  setTimeout(function() {
    window.location.href = "index.html";
  }, 5000);
}
