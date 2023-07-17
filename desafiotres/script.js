const formFields = document.querySelector("form").elements;
const latitude = '';
const longitude = '';
const key = "76cfa8d239f29caf1c0ed7f0d08237c9"
function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    formFields[2].value = latitude;
    formFields[3].value = longitude;
    convert();
    getCompareTemp(latitude, longitude);
}

function convert() {
    const celsius = parseFloat(formFields[0].value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        formFields[1].value = fahrenheit.toFixed(2,1) + " °F";
    }
}

function getCompareTemp(latitude, longitude) {
    const formFields = document.querySelector("form").elements;
    if (latitude !== "" && longitude !== "") {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
        fetch(url)
            .then((resultRequest) => {
                if (!resultRequest.ok) {
                    throw new Error("Erro na requisição");
                }
                return resultRequest.json();
            })
            .then((jsonRequest) => {
                const main = jsonRequest.main;
                formFields[4].value = ((main.temp - 273.15) * 9 / 5 + 32).toFixed(1) + " ºF";
                if( formFields[5].value > formFields[1].value ) {
                    formFields[6].value = "Sua localidade está mais quente"
                }else if(formFields[5].value == formFields[1].value){
                    formFields[5].value = "Sua localidade está com a temperatura igual"
                }else{
                    formFields[5].value = "Sua localidade está mais fria"
                }
                formFields[6].value = jsonRequest.name
            })
            .catch((error) => {
                alert("Erro na requisição: " + error);
            });
    } else {
        limpa_formulário();
    }
}

function limpa_formulário() {
    formFields[0].value = "";
    formFields[1].value = "";
    formFields[2].value = "";
    formFields[3].value = "";
    formFields[4].value = "";
    formFields[5].value = "";
    formFields[6].value = "";
}
