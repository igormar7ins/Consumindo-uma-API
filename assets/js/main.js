const inputCep = document.getElementById('CEP');
const inputRua = document.getElementById('rua');
const inputBairro = document.getElementById('bairro');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');

const buscarCep = async () => {

    // getUrl também usando async/await
    const getUrl = async (cep) => {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const preencheFormulario = (data) => {
        inputRua.value = data.logradouro || '';
        inputBairro.value = data.bairro || '';
        inputCidade.value = data.localidade || '';
        inputEstado.value = data.uf || '';
    }

    const limpaFormulario = () => {
        inputRua.value = '';
        inputBairro.value = '';
        inputCidade.value = '';
        inputEstado.value = '';
    }

    const cepFormatado = inputCep.value.replace(/\D/g, '');

    if (cepFormatado === '') {
        limpaFormulario();
        return;
    }

    if (cepFormatado.length !== 8) {
        limpaFormulario();
        alert('Formato de CEP invalido!');
        return;
    }

    try {
        const data = await getUrl(cepFormatado);

        if (data.erro) {
            limpaFormulario();
            alert('CEP não encontrado! Preencha o formulario manualmente');
        } else {
            preencheFormulario(data);
        }
    } catch (error) {
        console.error('Erro de conexão ao buscar CEP:', error);
        alert("Erro de conexão com o servidor. Verifique sua internet.");
    }
}

inputCep.addEventListener('focusout', buscarCep);