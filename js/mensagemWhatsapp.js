function enviarMensagem() {
  var nome = document.querySelector("#nome").value;
  nome = window.encodeURIComponent(nome);

  var celular = document.querySelector("#celular").value;
  celular = celular.replace(/\D/g, "");

  var mensagem = document.querySelector("#mensagem").value;
  mensagem = window.encodeURIComponent(mensagem);

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
  //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}
