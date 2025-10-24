document.addEventListener("DOMContentLoaded", function () {
  const consentCheckbox = document.getElementById("consent");
  const submitButton = document.getElementById("submit-button");
  const consentError = document.getElementById("consent-error");
  const contactForm = document.getElementById("contact-form");

  consentCheckbox.addEventListener("change", function () {
    if (this.checked) {
      submitButton.disabled = false;
      consentError.classList.remove("visible");
    } else {
      submitButton.disabled = true;
    }
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const telefone = document.getElementById("telefone").value;
    const tipoContato = document.getElementById("contato").value;

    const formData = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      cpf: cpf,
      telefone: telefone,
      preferenciaContato: tipoContato,
    };

    console.log("Dados do formulário capturados:", formData);

    alert(`Obrigado pelo contato, ${nome}! Recebemos sua mensagem.`);

    contactForm.reset();
    submitButton.disabled = true;
    consentError.classList.remove("visible");
  });
});
