# 📦 Cadastro de Endereço com Consulta de CEP

Este projeto é um formulário de cadastro simples que demonstra o consumo de uma API de consulta de CEP (Código de Endereçamento Postal) para preencher automaticamente os campos de endereço.

## 🌟 Funcionalidades

* **Consulta de CEP:** Ao preencher o campo de CEP e sair dele (`focusout`), o JavaScript faz uma requisição para a API **ViaCEP**.
* **Preenchimento Automático:** Se o CEP for válido e encontrado, os campos *Rua*, *Bairro*, *Cidade* e *Estado* são preenchidos automaticamente.
* **Validação Simples:** Verifica se o campo CEP está vazio ou se possui um número de caracteres diferente de 8.
* **Tratamento de Erros:** Exibe alertas para CEP não encontrado ou falhas na conexão com a API.
* **Design Responsivo:** O formulário possui um layout flexível para melhor visualização.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura básica do formulário (`index.html`).
* **CSS3:** Estilização do formulário e layout flexível (`style.css`).
* **JavaScript (ES6+):** Lógica para manipulação do DOM e requisições assíncronas à API (`main.js`).

## ⚙️ Como Executar o Projeto

Este é um projeto **Front-end puro** e pode ser executado diretamente no seu navegador.

1.  **Clone o repositório** (ou baixe os arquivos `index.html`, `style.css` e `main.js`).
2.  **Crie as pastas** `assets/css` e `assets/js`.
3.  **Coloque os arquivos** nos seus respectivos locais:
    * `index.html` na raiz.
    * `style.css` em `assets/css/`.
    * `main.js` em `assets/js/`.
4.  **Abra o arquivo `index.html`** no seu navegador de preferência.

Alternativamente, você pode usar uma extensão de servidor local (como *Live Server* no VS Code) para ter um ambiente de desenvolvimento mais robusto.
