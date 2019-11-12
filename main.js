// Capturando o botão "cumprimentar"
let greet = document.querySelector('#greet');
// Função para alerta "Olá"
function sayingHi(evt) {
    alert('Olá');
}
// Adicionando evento ao clique no botão "cumprimentar"
greet.addEventListener('click', sayingHi);
// Capturando o botão "alterar fundo"
let backgroundColor = document.querySelector('#changeBackground');
// Função para alterar fundo
function changeBackground(evt) {
    // Capturando e trocando fundo do body
    let body = document.querySelector('body');
    body.style.background = 'green';
}
// Adicionando evento ao clique no botão "alterar fundo"
backgroundColor.addEventListener('click', changeBackground);
// Capturando primeira imagem
let seeing = document.querySelector('#seeing');
// Função para imprimir no console "vendo a img" junto com as coordenadas do mouse
function seeingImage(evt) {
    console.log('Estou vendo a imagem!', 'Localização do mouse em X é:', event.clientX, 'Localização do mouse em Y é:', event.clientY);
}
// Adicionando evento para quando passamos o mouse na primeira imagem
seeing.addEventListener('mouseover', seeingImage);
// Capturando segunda imagem
let clicking = document.querySelector('#clicking');
// Função para imprimir mensagem quando clicamos na imagem
function clickingOnImage(evt) {
    console.log('Estou clicando na imagem.');
}
// Adicionando evento de clique à imagem
clicking.addEventListener('click', clickingOnImage);

// Tornando o fundo vermelho
/*
let bodyColor = document.querySelector ('body');

function turnRed (evt) {
    bodyColor.style.background = 'red';
}
bodyColor.addEventListener ('click', turnRed);
*/

// se o usuário passar 10 segundos nessa página, seja exibido um alert que diga “tempo esgotado!”
setTimeout(function(){ alert("Tempo esgotado!"); }, 10000);
// A cada 5 segundos que ele passe na página, fazer com que seja exibido um alert que diga “hora do intervalo”.
setInterval(function(){ alert("Hora do intervalo!"); }, 5000);