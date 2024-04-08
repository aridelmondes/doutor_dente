const botaoMostrarInformacoes = document.querySelector('.btn-mostrar-informacoes');
const informacoesInativos = document.querySelectorAll('.informacoes:not(.ativo)');

botaoMostrarInformacoes.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisInformacoes();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarInformacoes.classList.add("remover");
}

function mostrarMaisProjetos() {
    informacoesInativos.forEach(informacoesInativo => {
        informacoesInativo.classList.add('ativo');
    });
}
