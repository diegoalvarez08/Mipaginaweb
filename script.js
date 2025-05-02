function mostrarMensaje() {
    alert('¡Bienvenido a mi página personal!');
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos.');
      event.preventDefault();
    } else {
      alert('¡Formulario enviado correctamente!');
    }
  });