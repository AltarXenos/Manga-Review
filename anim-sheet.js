const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
  button.style.boxShadow = '0 0 10px #fff';
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)';
  button.style.boxShadow = 'none';
});
