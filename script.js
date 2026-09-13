const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = form.querySelector('.form-success');
  message.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
  form.reset();
});
