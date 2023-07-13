function getCompleteAddress(){
    const formFields = document.querySelector("form").elements;
    const url = 'linkapi/${formFields[0].value}/json/';
    fetch(url).then((resultRequest)=>{
        return resultRequest.json();
    })
    .then((jsonRequest)=>{
        
        formFields[1].value = jsonRequest.logradouro;
    })
}
/*function limpa_formulário_pais() {
    document.getElementById('name').value = ("");
}
function get_info(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('name').value = (conteudo.name[1]);
        limpa_formulário_pais();
        alert("Nome de pais invalido.");
    }
}

function pesquisapais(valor) {
    let pais = valor.replace(/\W/g, '');

    if (pais != "") {
        let validapais = /^[a-zA-Z]+$/;
        if (validapais.test(pais)) {
            document.getElementById('name').value = "...";

            let script = document.createElement('script');
            script.src = 'https://restcountries.com/v3.1/name/' + pais + '/?fullText=true';
            document.body.appendChild(script);
        } else {
            limpa_formulário_pais();
            alert("Nome invalido.");
        }
    } else {
        limpa_formulário_pais();
    }

}*/
/*
function getCompleteAddress(){
    const formFields = document.querySelector("form").elements;
    const url = 'linkapi/${formFields[0].value}/json/';
    fetch(url).then((resultRequest)=>{
        return resultRequest.json();
    })
    .then((jsonRequest)=>{
        
        formFields[1].value = jsonRequest.logradouro;
    })
}*/

[{ "name": { "common": "Brazil", "official": "Federative Republic of Brazil", "nativeName": { "por": { "official": "República Federativa do Brasil", "common": "Brasil" } } }, "tld": [".br"], "cca2": "BR", "ccn3": "076", "cca3": "BRA", "cioc": "BRA", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "BRL": { "name": "Brazilian real", "symbol": "R$" } }, "idd": { "root": "+5", "suffixes": ["5"] }, "capital": ["Brasília"], "altSpellings": ["BR", "Brasil", "Federative Republic of Brazil", "República Federativa do Brasil"], "region": "Americas", "subregion": "South America", "languages": { "por": "Portuguese" }, "translations": { "ara": { "official": "جمهورية البرازيل الاتحادية", "common": "البرازيل" }, "bre": { "official": "Republik Kevreel Brazil", "common": "Brazil" }, "ces": { "official": "Brazilská federativní republika", "common": "Brazílie" }, "cym": { "official": "Gweriniaeth Ffederal Brasil", "common": "Brasil" }, "deu": { "official": "Föderative Republik Brasilien", "common": "Brasilien" }, "est": { "official": "Brasiilia Liitvabariik", "common": "Brasiilia" }, "fin": { "official": "Brasilian liittotasavalta", "common": "Brasilia" }, "fra": { "official": "République fédérative du Brésil", "common": "Brésil" }, "hrv": { "official": "Savezne Republike Brazil", "common": "Brazil" }, "hun": { "official": "Brazil Szövetségi Köztársaság", "common": "Brazília" }, "ita": { "official": "Repubblica federativa del Brasile", "common": "Brasile" }, "jpn": { "official": "ブラジル連邦共和国", "common": "ブラジル" }, "kor": { "official": "브라질 연방 공화국", "common": "브라질" }, "nld": { "official": "Federale Republiek Brazilië", "common": "Brazilië" }, "per": { "official": "جمهوری فدراتیو برزیل", "common": "برزیل" }, "pol": { "official": "Federacyjna Republika Brazylii", "common": "Brazylia" }, "por": { "official": "República Federativa do Brasil", "common": "Brasil" }, "rus": { "official": "Федеративная Республика Бразилия", "common": "Бразилия" }, "slk": { "official": "Brazílska federatívna republika", "common": "Brazília" }, "spa": { "official": "República Federativa del Brasil", "common": "Brasil" }, "srp": { "official": "Савезна Република Бразил", "common": "Бразил" }, "swe": { "official": "Förbundsrepubliken Brasilien", "common": "Brasilien" }, "tur": { "official": "Brezilya Federal Cumhuriyeti", "common": "Brezilya" }, "urd": { "official": "وفاقی جمہوریہ برازیل", "common": "برازیل" }, "zho": { "official": "巴西联邦共和国", "common": "巴西" } }, "latlng": [-10.0, -55.0], "landlocked": false, "borders": ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"], "area": 8515767.0, "demonyms": { "eng": { "f": "Brazilian", "m": "Brazilian" }, "fra": { "f": "Brésilienne", "m": "Brésilien" } }, "flag": "\uD83C\uDDE7\uD83C\uDDF7", "maps": { "googleMaps": "https://goo.gl/maps/waCKk21HeeqFzkNC9", "openStreetMaps": "https://www.openstreetmap.org/relation/59470" }, "population": 212559409, "gini": { "2019": 53.4 }, "fifa": "BRA", "car": { "signs": ["BR"], "side": "right" }, "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"], "continents": ["South America"], "flags": { "png": "https://flagcdn.com/w320/br.png", "svg": "https://flagcdn.com/br.svg", "alt": "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center." }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/br.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/br.svg" }, "startOfWeek": "monday", "capitalInfo": { "latlng": [-15.79, -47.88] }, "postalCode": { "format": "#####-###", "regex": "^(\\d{8})$" } }]