const inputCep = document.getElementById('CEP');
const inputRua = document.getElementById('rua');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');
const inputBairro = document.getElementById('bairro');

const buscarCepComValidacao = async () => {
    const cepFormatado = inputCep.value.replace(/\D/g, '');

    if (inputCep.value === '') {
        inputRua.value = '';
        inputCidade.value = '';
        inputEstado.value = '';
        inputBairro.value = '';
        return;
    }

    if (cepFormatado.length !== 8) {
        inputRua.value = '';
        inputCidade.value = '';
        inputEstado.value = '';
        inputBairro.value = '';

        alert("Formato de CEP inválido.");
        return;
    }

    const url = `https://viacep.com.br/ws/${cepFormatado}/json/`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.erro) {

            inputRua.value = '';
            inputCidade.value = '';
            inputEstado.value = '';
            inputBairro.value = '';

            alert("CEP não encontrado. Por favor, preencha o formulario manualmente.");
        } else {

            inputRua.value = data.logradouro || '';
            inputCidade.value = data.localidade || '';
            inputEstado.value = data.uf || '';
            inputBairro.value = data.bairro || '';
        }

    } catch (error) {

        console.error('Erro de conexão ao buscar CEP:', error);
        alert("Erro de conexão com o servidor. Verifique sua internet.");
    }
};


inputCep.addEventListener('focusout', buscarCepComValidacao);