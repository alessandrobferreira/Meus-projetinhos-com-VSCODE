$(document).ready(function(){
    console.log('JQuery Load!');

    $('#retornoCEP').hide();


    // Onblur Dispara o evento assim que o campo perde o foco. Busca CEP
    $('#cep').on('blur', function() {
        var inputCep = $('#cep');
        console.log(inputCep.val());

        buscaCEP(inputCep.val()).then(
            (response) => {
                console.log(response);
                if(response && response.cep !== '') {
                    $('#retornoCEP').show();
                    $('#rua').val(response.logradouro);
                    $('#bairro').val(response.bairro);
                    $('#cidade').val(response.localidade);
                    $('#uf').val(response.uf);
                }
            }
        )

    })

});

async function buscaCEP(cep) {
    var urlAPI = `https://viacep.com.br/ws/${cep}/json/`;


    return fetch(urlAPI)
}





function buscaCEP(cep) {

    var urlAPI = `https://viacep.com.br/ws/${cep}/json/`;

    return fetch(urlAPI).then(resp => resp.json());

}



