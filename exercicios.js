/* parte 1
1- Crie um script que calcula a media de tres notas, atribuindo o resultado a uma variavel e exiba esse valor.
    As notas podem ser quaisquer valores numericos.
2- Crie um script que converta uma temperatura em graus celsius para fahrenheit.
    A formula para conversão é: Fah =(cels*9/5) +32.
3- Crie um script que calcula area de um retangulo com base na largura e alturas fornecidas.
    A formula para calulco da area é : area = largura * altura.
4- crie um script que calcula o indice de massa corporal(imc) com base no peso e altura fornecidos.
    a formula para calculo do imc é: imc =peso/(altura*altura).
5- crie um script que converte um determinado numero de horas em minutos.
    Atributos o resultado a uma variavel chamada minutos. considere que 1 hora possui 60 minutos.
*/
/* parte 2
Crie um script que receba o nome e sobrenome de uma pessoa e concatene-os em uma única string.
Crie um script que conte quantos caracteres uma determinada string possui e exiba essa informação.
Crie um script que converta uma string fornecida para letras maiúsculas e exiba a frase em caixa alta.
Crie um script que extraia uma parte específica de uma string. Por exemplo, extraia os primeiros três caracteres de uma palavra e exiba o resultado.
Crie um script que substitua as letras, conforme:
1-A -> 4
2-I (letra i) -> 1
3-E -> 3
4-O (letra ó) -> 0 (zero)
5-S -> 5
*/
// get ids buttons
const profile = document.getElementById('profile');
const exerc1 = document.getElementById('exerc1');
const exerc2 = document.getElementById('exerc2');
const exerc3 = document.getElementById('exerc3');
const exerc4 = document.getElementById('exerc4');
const exerc5 = document.getElementById('exerc5');
const exerc2_1 = document.getElementById('exerc2-1');
const exerc2_2 = document.getElementById('exerc2-2');
const exerc2_3 = document.getElementById('exerc2-3');
const exerc2_4 = document.getElementById('exerc2-4');
const exerc2_5 = document.getElementById('exerc2-5');
//eventListeners
profile.addEventListener('click', profileRe);
exerc1.addEventListener('click', exercicio1);
exerc2.addEventListener('click', exercicio2);
exerc3.addEventListener('click', exercicio3);
exerc4.addEventListener('click', exercicio4);
exerc5.addEventListener('click', exercicio5);
exerc2_1.addEventListener('click', exercicio2_1);
exerc2_2.addEventListener('click', exercicio2_2);
exerc2_3.addEventListener('click', exercicio2_3);
exerc2_4.addEventListener('click', exercicio2_4);
exerc2_5.addEventListener('click', exercicio2_5);

function profileRe(){
    window.location.href = "profile.html";
}
function exercicio1() {
    let notaUm = Math.abs(prompt("Insira a nota 1"))
    let notaDois = Math.abs(prompt("Insira a nota 2"))
    let notaTres = Math.abs(prompt("Insira a nota 3"))
    
    let media = ((notaUm + notaDois + notaTres) / 3);
    let numeroAr = media.toFixed(0)
    
    alert(numeroAr);
}

function exercicio2() {
    let valorCe = Math.abs(prompt("Insira a temperatura em Celsius"))
    let conversao = ((valorCe*9/5)+32)        
    alert(conversao);
}

function exercicio3() {
    let altura = Math.abs(prompt("Insira a altura do retangulo"))
    let largura = Math.abs(prompt("Insira a altura do largura"))
    let area = altura * largura

    alert(area+'m²');
}
function exercicio4() {
    let altura = Math.abs(prompt("Insira a sua altura"))
    let peso = Math.abs(prompt("Insira o seu peso"))
    let imc= (peso/(altura*altura))
    let imcAre = imc.toFixed(2)
    alert(imcAre)
}
function exercicio5() {
    let horas = Math.abs(prompt("Insira a quantidade de horas"))
    let minutos = 60
    let qual = horas*minutos
    alert(qual+" minutos")
}
function exercicio2_1() {
    let nome = prompt("Insira o seu nome")
    let sobrenome =prompt("Insira o seu sobrenome")
    let nomeCompleto = nome + " " + sobrenome
    alert("Olá " + nomeCompleto)
}
function exercicio2_2() {
    let palavra = prompt("Insira o seu nome")
    let quantidade = palavra.length
    alert("A palavra: " +palavra+ " tem " +quantidade+ " letras"  )
}
function exercicio2_3() {
    let frase = prompt("Insira a frase")
    let textoAlto = frase.toLocaleUpperCase()
    alert(textoAlto)
}
function exercicio2_4() {
    let frase = prompt("Insira a frase")
    let tresp = frase.substring(0,3)
    //let tresp = frase.charAt(0) + frase.charAt(1) + frase.charAt(2) 
    alert(tresp)
}
function exercicio2_5() {
    let textoOriginal = prompt("Insira a frase")
    
    //let texto = replaceAll(/A/g, '4').replaceAll(/I/g, '1').replaceAll(/E/g, '3').replaceAll(/O/g, '0').replaceAll(/S/g, '5');

    //let textoSubstituido = exercicio2_5(texto);
      
      alert(textoOriginal.replaceAll(/A/g, '4').replaceAll(/I/g, '1').replaceAll(/E/g, '3').replaceAll(/O/g, '0').replaceAll(/S/g, '5')); // Saída: "4 fr453 0r1g1n41"
    
}
