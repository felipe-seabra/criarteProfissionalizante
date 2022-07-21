const changeTextButton = (classe, texto) => {
  let buttons = document.getElementsByClassName(classe);
  for (let button of buttons) {
    button.innerText = texto;
  }
}

const addLinkButton =(classe, link) => {
  let buttons = document.getElementsByClassName(classe);
  for (let button of buttons) {
    button.href = link;
  }
}

changeTextButton("blue", "Quero me inscrever"); // troca texto do botão formulário
changeTextButton("green", "Saber mais"); //troca texto do botão whatsapp

addLinkButton("blue", "http://www.colegiocriartepp.com.br/formulario/"); // adiciona link do botão formulário
addLinkButton("green", "https://api.whatsapp.com/send?text=Ol%C3%A1!&phone=+5518981029767"); // adiciona link do botão whatsapp
