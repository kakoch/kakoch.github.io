
function getCompleteAddress(value){
    let valor = value;

    const formFields = document.querySelector("form").elements;
    const url = `https://www.bing.com/images/search?q=${value}&form=HDRSC3&first=1//`;
    fetch(url).then((resultRequest)=>{
        return resultRequest.json();
    })
    .then((jsonRequest)=>{
        
        //formFields[1].value = jsonRequest.name.common;
        console.log(jsonRequest.borders)
    })
}
const selectField = document.getElementById("cep");
selectField.addEventListener("chang",getCountryInformation);
function getCountryInformation(){
    const url= `https://restcountries.com/v3.1/name/${selectField.value}?fullText=true`; 
    fetch(url).then((resultRequest) => {
        return resultRequest.json();
    }).then((jsonRequest)=>{
        document.getElementById("info_coutry").setAttribute("style", "display: block");
        document.getElementById("name").append(jsonRequest[0].altSpellings)
        
        for (key in jsonRequest[0].currencies){
            indiceIdioma = key;

        }
        document.getElementById("moeda").append(jsonRequest[0].currencies[indiceMoeda].name)
        for (key in jsonRequest[0].languages){
            indiceMoeda = key;

        }
        document.getElementById("idioma").append(jsonRequest[0].currencies[indiceIdioma])
        document.getElementById("imagem").src = jsonRequest[0].flags.png;
        loadIframe();
    })
    function loadIframe(){
        const url = `https://www.google.com.br/search?q=${coutry}$tbm=isch`;
        const iframe = document.querySelector("iframe");
        iframe.src = url;
    }
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
