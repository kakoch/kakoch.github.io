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
const desafio_cep = document.getElementById('desafiocep');
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
const exerc3_1 = document.getElementById('exerc3-1');
const exerc3_2 = document.getElementById('exerc3-2');
const exerc3_3 = document.getElementById('exerc3-3');
const exerc3_4 = document.getElementById('exerc3-4');
const exerc3_5 = document.getElementById('exerc3-5');
const exerc3_6 = document.getElementById('exerc3-6');
const exerc3_7 = document.getElementById('exerc3-7');
const exerc3_8 = document.getElementById('exerc3-8');
const exerc3_9 = document.getElementById('exerc3-9');
const exerc3_10 = document.getElementById('exerc3-10');
const exerc3_11 = document.getElementById('exerc3-11');
const exerc3_12 = document.getElementById('exerc3-12');
const exerc3_13 = document.getElementById('exerc3-13');
const exerc3_14 = document.getElementById('exerc3-14');
const exerc3_15 = document.getElementById('exerc3-15');
const exerc3_16 = document.getElementById('exerc3-16');
const exerc3_17 = document.getElementById('exerc3-17');
const exerc3_18 = document.getElementById('exerc3-18');
const exerc3_19 = document.getElementById('exerc3-19');
const exerc3_20 = document.getElementById('exerc3-20');
//eventListeners
profile.addEventListener('click', profileRe);
desafio_cep.addEventListener('click', desafiocep);
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
exerc3_1.addEventListener('click', exercicio3_1);
exerc3_2.addEventListener('click', exercicio3_2);
exerc3_3.addEventListener('click', exercicio3_3);
exerc3_4.addEventListener('click', exercicio3_4);
exerc3_5.addEventListener('click', exercicio3_5);
exerc3_6.addEventListener('click', exercicio3_6);
exerc3_7.addEventListener('click', exercicio3_7);
exerc3_8.addEventListener('click', exercicio3_8);
exerc3_9.addEventListener('click', exercicio3_9);
exerc3_10.addEventListener('click', exercicio3_10);
exerc3_11.addEventListener('click', exercicio3_11);
exerc3_12.addEventListener('click', exercicio3_12);
exerc3_13.addEventListener('click', exercicio3_13);
exerc3_14.addEventListener('click', exercicio3_14);
exerc3_15.addEventListener('click', exercicio3_15);
exerc3_16.addEventListener('click', exercicio3_16);
exerc3_17.addEventListener('click', exercicio3_17);
exerc3_18.addEventListener('click', exercicio3_18);
exerc3_19.addEventListener('click', exercicio3_19);
exerc3_20.addEventListener('click', exercicio3_20);

function profileRe(){
    window.location.href = "profile.html";
}
function desafiocep(){
    window.location.href = "desafioOne/index.html";
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
function exercicio3_1(){
    let numero = Math.abs(prompt("Insira um numero"))
    if(numero < 0 || numero > 0){
        if((numero % 2) < 1 ){
            alert("O numero: " +numero+" é par!" )
        }else{
            alert("O numero: " +numero+" é impar!" )
        }
    }else{
        alert("Só aceito numeros" )
    }
}
function exercicio3_2(){
    let numero = Math.abs(prompt("Insira o preço"))
    alert(numero * 0.9)
}
function exercicio3_3(){
    let numero = Math.abs(prompt("Insira um numero"))
    /*if (numero <= 1) {
        return alert("O numero: " +numero+" não é primo!" )
      }
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return alert("O numero: " +numero+" não é primo!" )
        }
      }
    
      return alert("O numero: " +numero+" é primo!" )*/
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i ===0){
            return alert("O numero: " +numero+" não é primo!" )
        }
    }
    return alert("O numero: " +numero+" é primo!" )
}
function exercicio3_4(){
    let ano = Math.abs(prompt("Insira a sua idade "))
    let dias = ano * 365
    alert("Você tem: "+dias+ " de vida!" )
}
function exercicio3_5(){
    let entrada = prompt("Insira o seu telefone com DDD ")
    let ddd = entrada.substring(0,3)
    let prim = entrada.substring(3,8)
    let segu = entrada.substring(8, 12)
    if(ddd.charAt(0) == '0'){
        alert("(" +ddd+ ")" +prim+ "-" +segu)
    }else{
        let ddd = entrada.substring(0,2)
        let prim = entrada.substring(2,7)
        let segu = entrada.substring(7, 11)
        alert("(" +ddd+ ")" +prim+ "-" +segu)
    }
}
function exercicio3_6 (){
    let numeros =[];
    for(i = 1; i<=10; i++){
        if(i % 2 === 0){
            numeros.push(i)
        }
    }
    alert(numeros)
}
function exercicio3_7 (){
    let notas =[];

    for(i = 1; i <= 3;i++){
        let nota = Number(prompt("Insira a nota " +i))
        if( nota >= 0 && nota <= 10){
            notas.push(nota)
        }else{
            alert("Nota invalida" +i--);
            
        }
    }
    alert("media" +((notas[0] + notas[1]+ notas[3])/3))
    
}
function exercicio3_8(){
    
}

function exercicio3_9(){
    let frase = prompt("Insira a palavra ")
    let local = frase.search("a")
    if(frase.search("a") >=0){
        alert("A posição é: " +local)
    }else{
        alert("Não tem A")
    }
}
function exercicio3_10(){}
function exercicio3_11(){}
function exercicio3_12(){}
function exercicio3_13(){}
function exercicio3_14(){}
function exercicio3_15(){}
function exercicio3_16(){}
function exercicio3_17(){}
function exercicio3_18(){}
function exercicio3_19(){}
function exercicio3_20(){}