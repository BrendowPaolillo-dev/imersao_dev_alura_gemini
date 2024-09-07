// Exemplo simples para mostrar um alerta ao clicar nos botões
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Funcionalidade em desenvolvimento!');
  });
});

// Função para buscar os dados do JSON e criar os elementos na página
async function carregarJogos() {
  const response = await fetch('data/jogos.json');
  const jogos = await response.json();

  const gameGrid = document.querySelector('.game-grid');

  jogos.forEach(jogo => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');

    img.src = jogo.capa;
    img.alt = jogo.titulo;
    h3.textContent = jogo.titulo;

    figure.appendChild(img);
    figure.appendChild(h3);
    gameGrid.appendChild(figure);
  });
}

// Chamando a função para carregar os jogos
carregarJogos();
