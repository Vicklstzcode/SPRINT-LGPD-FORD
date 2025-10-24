// Garante que o script só vai rodar depois que todo o HTML for carregado.
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos do DOM
  const consentCheckbox = document.getElementById("consent");
  const submitButton = document.getElementById("submit-button");
  const consentError = document.getElementById("consent-error");
  // Seleciona o elemento do formulário pelo seu 'id' que agora existe.
  const contactForm = document.getElementById("contact-form");

  // Adiciona um 'ouvinte' para o evento 'change' no checkbox de consentimento.
  consentCheckbox.addEventListener("change", function () {
    if (this.checked) {
      // Se marcado, habilita o botão e esconde a mensagem de erro.
      submitButton.disabled = false;
      consentError.classList.remove("visible");
    } else {
      // Se desmarcado, desabilita o botão.
      submitButton.disabled = true;
    }
  });

  // Adiciona um 'ouvinte' para o clique no botão de envio.
  submitButton.addEventListener("click", function (event) {
    if (submitButton.disabled) {
      consentError.classList.add("visible");
    }
  });

  // Adiciona um 'ouvinte' para o evento 'submit'.
  contactForm.addEventListener("submit", function (event) {
    // Impede o comportamento padrão do formulário (recarregar a página).
    event.preventDefault();

    // Capturando os valores dos campos pelos IDs corretos.
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const telefone = document.getElementById("telefone").value;
    const tipoContato = document.getElementById("contato").value;

    // Criando um objeto para organizar os dados.
    const formData = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      cpf: cpf,
      telefone: telefone,
      preferenciaContato: tipoContato,
    };

    // Exibindo os dados no console do navegador (Pressione F12 para ver).
    console.log("Dados do formulário capturados:", formData);

    // Exibindo um alerta para o usuário.
    alert(`Obrigado pelo contato, ${nome}! Recebemos sua mensagem.`);

    // Opcional: Limpar o formulário após o envio.
    contactForm.reset();

    // Desabilita o botão novamente e esconde a mensagem de erro após o envio.
    submitButton.disabled = true;
    consentError.classList.remove("visible");
  });
});

// Fim do arquivo form.js