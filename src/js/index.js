/*
 OBJETIVO 1 - Quando passar o mouse em cima do persnagem temos que:

 - colocar a classe selecionado no outro personagem que passamos o mouse em cima
 para adicionar a animação nele

 - retirar a classe selecionado do personagem que está previamente selecionado


 OBJETIVO 2 - Qando passar o mouse em cima do personagem, trocar a imagem e o nome do personagem grande.

 - Alterar a imagem do jogador 1
 - Alterar o nome do jogador 1

*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

    //OBJETIVO 2 ABAIXO
    
    const idSelecionado = personagem.attributes.id.value;
    //Bloquear o ultron

    if (idSelecionado === 'ultron') return;

    //até aqui

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado



    })
})