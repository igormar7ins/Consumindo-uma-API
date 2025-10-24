# Consulta de Endereço por CEP

Este é um projeto simples de uma página web que permite ao usuário inserir um CEP (Código de Endereçamento Postal) brasileiro e ter os campos de endereço (rua, bairro, cidade e estado) preenchidos automaticamente.

## Funcionalidades

- **Preenchimento Automático de Endereço:** Ao digitar um CEP válido e sair do campo, o sistema busca as informações do endereço e as insere nos campos correspondentes.
- **Validação de CEP:** O sistema verifica se o CEP digitado possui 8 dígitos numéricos.
- **Tratamento de Erro:** Caso o CEP seja inválido, não seja encontrado ou ocorra um erro de conexão, o usuário é notificado por um alerta.

## Como Usar

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador de internet.
3.  Digite um CEP válido no campo "CEP".
4.  Clique fora do campo ou pressione a tecla Tab.
5.  Os campos de rua, bairro, cidade e estado serão preenchidos com os dados retornados pela API.

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização básica e layout.
- **JavaScript:** Para a manipulação do DOM, validações e a lógica de requisição à API.
- **ViaCEP API:** A API pública utilizada para obter os dados de endereço a partir do CEP.
