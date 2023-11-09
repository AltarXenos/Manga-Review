const body = document.querySelector('body');

body.addEventListener('mouseover', () => {
  body.style.backgroundColor = 'red';
});

body.addEventListener('mouseout', () => {
  body.style.backgroundColor = '';
});
