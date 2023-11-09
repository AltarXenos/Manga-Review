const body = document.querySelector('body');

body.addEventListener('mouseover', () => {
  body.style.backgroundImage = 'Background numéro 1.jpg';
});

body.addEventListener('mouseout', () => {
  body.style.backgroundImage = 'Background numéro 2.jpg';
});
