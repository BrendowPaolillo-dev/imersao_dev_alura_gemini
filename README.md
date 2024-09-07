# Biblioteca de Jogos Retro - Projeto Imersão Alura Gemini

Este é um projeto desenvolvido durante a **Imersão Alura com o Gemini**, no qual criei uma biblioteca de jogos retro que já zerei. O projeto permite adicionar jogos, visualizar a lista de jogos e acessar detalhes de cada um.
### 🚀 [Acesse a aplicação aqui](https://imersao-dev-alura-gemini-bebbg8cn5-brendow-paolillos-projects.vercel.app/)


## 🚀 Funcionalidades

- **Adicionar Jogos - em desenvolvimento**: Permite adicionar jogos retro que você já completou, preenchendo informações como nome, console, ano de lançamento e descrição.
- **Verificar Lista de Jogos - em desenvolvimento**: Exibe uma página de todos os jogos já adicionados à biblioteca.
- **Ver Detalhes de um Jogo**: Permite visualizar informações detalhadas sobre um jogo específico, como a capa, descrição, console e link para a Wikipedia.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura da aplicação.
- **CSS**: Estilos visuais da interface.
- **JavaScript**: Lógica de interação e manipulação dos jogos.
  
## 📂 Estrutura de Pastas

```bash
📦 IMERSAO_DEV_ALURA_GEMINI
 ┣ 📂 data
 ┣ 📂 fonts
 ┣ 📂 images
 ┣ 📂 scripts
 ┃ ┣ 📄 script.js              # Funções e lógica em JS
 ┣ 📂 styles
 ┃ ┣ 📄 styles.css             # Estilos da aplicação
 ┣ 📄 index.html               # Página principal da aplicação
 ┣ 📄 README.md                # Documentação do projeto
```

## ⚙️ Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/BrendowPaolillo-dev/imersao_dev_alura_gemini.git
   ```
2. Abra o arquivo `index.html` em seu navegador para visualizar a aplicação.

3. **Adicionar jogos - em desenvolvimento**:
   - Preencha as informações de um novo jogo e clique em "Adicionar".
   - O jogo será salvo na lista e você poderá visualizá-lo.

4. **Ver detalhes de um jogo**:
   - Clique na imagem de um jogo para abrir um popup com as informações detalhadas.
   - Para fechar o popup, clique no botão de fechar ou fora do popup.

## 📦 JSON de Exemplo

Aqui está um exemplo de como os dados dos jogos são armazenados no arquivo `jogos.json`:

```json
[
  {
    "titulo": "Super Mario Bros.",
    "console": "NES",
    "ano": 1985,
    "capa": "images/Super_Mario_Bros._box.png",
    "wiki": "https://pt.wikipedia.org/wiki/Super_Mario_Bros.",
    "descricao":"Super Mario Bros. (スーパーマリオブラザーズ Sūpā Mario Burazāzu?) é um jogo eletrônico de plataforma desenvolvido pela Nintendo Research & Development 4 e publicado pela Nintendo para o Famicom em 1985 no Japão e para o Nintendo Entertainment System (NES) em 1985 e 1987 na América do Norte e Europa, respectivamente. É o sucessor do jogo de arcade Mario Bros., de 1983. Os jogadores controlam Mario, ou seu irmão Luigi no modo multijogador, enquanto viajam pelo Reino Cogumelo para resgatar a Princesa Peach de Bowser. Eles devem percorrer os mundos em uma visão em rolagem lateral, evitando perigos como inimigos e buracos com a ajuda de potencializadores como o Supercogumelo, Flor de Fogo e Superestrela."
  },
]
```

## 🎨 Estilo e Layout

- O layout é inspirado em interfaces retro, com paletas de cores escuras e elementos que lembram consoles antigos.
- O design é responsivo e se adapta a diferentes tamanhos de tela, garantindo uma experiência consistente em desktops.

## 📝 Melhorias Futuras

- Adicionar suporte para busca de jogos.
- Implementar filtros por console ou ano de lançamento.
- Integração com APIs de jogos retro para obter informações automaticamente.

## 💻 Contribuições

Sinta-se à vontade para abrir issues ou pull requests caso tenha sugestões ou melhorias.


