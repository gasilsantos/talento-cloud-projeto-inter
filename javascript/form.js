const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (nome.value === '') {
    alert('Por favor, preencha o campo Nome.');
    nome.focus();
    return false;
  }
  
  if (email.value === '') {
    alert('Por favor, preencha o campo Email.');
    email.focus();
    return false;
  }
  
  if (mensagem.value === '') {
    alert('Por favor, preencha o campo Mensagem.');
    mensagem.focus();
    return false;
  }
  
  // Se a validação for bem-sucedida, envie o formulário
  alert('Formulário enviado com sucesso!');
  form.submit();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const dados = {
      nome: nome.value,
      email: email.value,
      mensagem: mensagem.value
    };
    
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));
    
});

  