
function getCompleteAddress(value){
    let valor = value;

    const formFields = document.querySelector("form").elements;
    const url = `https://restcountries.com/v3.1/name/${value}/`;
    fetch(url).then((resultRequest)=>{
        return resultRequest.json();
    })
    .then((jsonRequest)=>{
        
        formFields[1].value = jsonRequest[0].name.nativeName.por.common;
        formFields[2].value = jsonRequest[0].name.nativeName.por.official;
        formFields[3].value = jsonRequest[0].area;
        formFields[4].value = jsonRequest[0].population;
        console.log(jsonRequest[0].name.n)
    })
}





/*function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('complemento').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
    document.getElementById('ddd').value = ("");
}
function get_info(conteudo) {
    let array = conteudo;
        document.getElementById('rua').value = (array[name]);
        console.log(array)
}

function pesquisacep(valor) {
    let cep = valor.replace(/\W/g,  '');

    if (cep != "") {
        let validacep = /^[a-zA-Z]+$/;
        if (validacep.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('complemento').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";
            document.getElementById('ddd').value = "...";
            let script = document.createElement('script');
            script.src = `https://restcountries.com/v3.1/name/${cep}/?callback=get_info`;
            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}*/
