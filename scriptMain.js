function trocaTextBotton(classe, texto) {
  let Bottons = document.getElementsByClassName(classe);
  for (let botton of Bottons) {
    botton.innerText = texto;
  }
}

function addLinkBotton(classe, link) {
  let Bottons = document.getElementsByClassName(classe);
  for (let botton of Bottons) {
    botton.href = link;
  }
}

trocaTextBotton("blue", "Quero me inscrever"); // troca texto do botão formulário
trocaTextBotton("green", "Saber mais"); //troca texto do botão whatsapp

addLinkBotton("blue", "http://www.colegiocriartepp.com.br/formulario/"); // adiciona link do botão formulário
addLinkBotton("green", "https://api.whatsapp.com/send?text=Ol%C3%A1!&phone=+5518981029767"); // adiciona link do botão whatsapp
