// Seleciona todos os botões e adiciona um alerta para funcionalidade em desenvolvimento
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Funcionalidade em desenvolvimento!');
  });
});

// Seleciona o botão de fechar e atribui a função para esconder o popup
const closeButton = document.querySelector('.popup-close');
closeButton.addEventListener('click', esconderPopup);

// Seleciona o popup e define-o inicialmente como escondido
const popup = document.getElementById('popup');
popup.style.display = "none";

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

    // Adicionar evento de clique à imagem
    img.addEventListener('click', () => {
      mostrarPopup(jogo);
    });

    figure.appendChild(img);
    figure.appendChild(h3);
    gameGrid.appendChild(figure);
  });
}

// Função para mostrar o popup com as informações do jogo
function mostrarPopup(jogo) {
  const popup = document.getElementById('popup');
  const popupContent = document.querySelector('.popup-content');
  const linkElement = popupContent.querySelector('.link-wiki');
  linkElement.textContent = '';

  // Preencher o conteúdo do popup com as informações do jogo
  popupContent.querySelector('.popup-image').src = jogo.capa;
  popupContent.querySelector('.popup-title').textContent = "Nome: " + jogo.titulo;
  popupContent.querySelector('.popup-console').textContent = "Console: " + jogo.console;
  popupContent.querySelector('.popup-ano').textContent = "Ano: " + jogo.ano;
  popupContent.querySelector('.popup-descricao').textContent = "Descrição: " + jogo.descricao;
  linkElement.href = jogo.wiki;
  linkElement.textContent = jogo.titulo + " na Wikipédia";
  linkElement.target = "_blank";
  
  popup.style.display = 'flex';
  popup.style.position = 'fixed';
  popup.style.top = 0;
  popup.style.left = 0;
  popup.style.width = '100%';
  popup.style.height = '100%';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';
  popup.style.zIndex = 999;
}

// Função para esconder o popup
function esconderPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Fechar o popup ao clicar fora do conteúdo do popup
popup.addEventListener('click', (event) => {
  const popupContent = document.querySelector('.popup-content');
  if (!popupContent.contains(event.target)) {
    esconderPopup();
  }
});

// Chamando a função para carregar os jogos
carregarJogos();
