function enviarMensagem() {
  var nome = document.querySelector("#nome").value;
  nome = window.encodeURIComponent(nome);

  var celularInput = document.querySelector("#celular");

  var celular = document.querySelector("#celular").value;
  celular = celular.replace(/\D/g, "");

  var mensagem = document.querySelector("#mensagem").value;
  mensagem = window.encodeURIComponent(mensagem);

  var erros = "";

  if (!nome || nome.length < 3) {
    erros +=
      "O campo Nome deve conter no mínimo 3 letras e apenas letras e espaços.\n<br>";
  }

  if (!celular || celular.length !== 11 || isNaN(celular)) {
    erros += "O celular deve ter 11 dígitos numéricos!<br>";
  }

  if (!mensagem) {
    erros += "A mensagem é obrigatória!<br>";
  }

  var divErro = document.querySelector("#erro");

  if (erros) {
    divErro.innerHTML = erros;
    divErro.style.display = "block";
    return;
  }

  celularInput.value = celular.slice(0, 11);
  var limiteNumeros = document.querySelector("#celular");

  limiteNumeros.addEventListener("input", function () {
    if (limiteNumeros.value.length > 11) {
      limiteNumeros.value = limiteNumeros.value.slice(0, 11);
    }
  });

  let urlApi = "https://api.whatsapp.com/send?phone=5521982708329&text=";

  window.open(
    urlApi +
      "Nome:%20" +
      nome +
      "%0d%0a" +
      "Telefone:%20" +
      celular +
      "%0d%0a" +
      "Mensagem:%20" +
      mensagem,
    "_blank"
  );
}

var campoNome = document.querySelector("#nome");

campoNome.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
    var divErro = document.querySelector("#erro");
    divErro.innerHTML = "Digite apenas letras no campo nome!";
    divErro.style.display = "block";
  }
});
function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  const pattern = "[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]";
  if (char.match(pattern)) {
    return true;
  }
}

var limiteNumeros = document.querySelector("#celular");

limiteNumeros.addEventListener("input", function () {
  if (limiteNumeros.value.length > 11) {
    limiteNumeros.value = limiteNumeros.value.slice(0, 11);
  }
});
