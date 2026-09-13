document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.innerHTML = 'Заявка принята <b>✓</b>';
  button.style.background = '#193c3c';
});

document.querySelector('.watch').addEventListener('click', () => {
  document.querySelector('#how').scrollIntoView({ behavior: 'smooth' });
});
