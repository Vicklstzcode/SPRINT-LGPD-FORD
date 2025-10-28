function desbloquear(checkbox) {
  const btnEnviar = document.getElementById('btnLGPD');
  const errorMessage = document.getElementById('consent-error');
  
  if (checkbox.checked) {
      btnEnviar.disabled = false;
      btnEnviar.classList.remove('off');
      errorMessage.style.display = 'none';
  } else {
      btnEnviar.disabled = true;
      btnEnviar.classList.add('off');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const check1 = document.getElementById('check1');
  const errorMessage = document.getElementById('consent-error');
  
  errorMessage.style.display = 'none';
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (!check1.checked) {
          errorMessage.style.display = 'block';
          return false;
      }
      
      alert('Formulário enviado com sucesso!');
  });
});