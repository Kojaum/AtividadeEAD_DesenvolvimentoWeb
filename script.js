document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');

    // Verificamos se o form existe na página atual (evita erro na home)
    if (form) {
        form.addEventListener('submit', (event) => {
            // 1. Impede o envio padrão do formulário
            event.preventDefault();
            
            let temErro = false;

            // Seleciona os campos
            const nomeInput = document.getElementById('nome');
            const emailInput = document.getElementById('email');
            const msgInput = document.getElementById('mensagem');

            // === Validação Nome ===
            if (nomeInput.value.trim() === "") {
                mostrarErro(nomeInput);
                temErro = true;
            } else {
                limparErro(nomeInput);
            }

            // === Validação Email ===
            if (!validarEmail(emailInput.value)) {
                mostrarErro(emailInput);
                temErro = true;
            } else {
                limparErro(emailInput);
            }

            // === Validação Mensagem ===
            if (msgInput.value.trim() === "") {
                mostrarErro(msgInput);
                temErro = true;
            } else {
                limparErro(msgInput);
            }

            // Se NÃO tiver erro, simula o sucesso
            if (!temErro) {
                alert(`Obrigado, ${nomeInput.value}! Sua mensagem foi enviada para a equipe Cine Dicas.`);
                form.reset(); // Limpa os campos
            }
        });
    }

    // Função auxiliar para aplicar estilo de erro
    function mostrarErro(input) {
        const divPai = input.parentElement;
        divPai.classList.add('input-error');
    }

    // Função auxiliar para limpar estilo de erro
    function limparErro(input) {
        const divPai = input.parentElement;
        divPai.classList.remove('input-error');
    }

    // Função auxiliar (Regex) para validar formato de e-mail
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});