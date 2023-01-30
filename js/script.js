
let button = document.getElementById("botao");



button.addEventListener("click", gerarSenha);

function gerarSenha(){
  let info = document.getElementById("campo-dados")
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = ""
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let passwordLength = document.getElementById("password-length").value
  

  for  (let i = 0; i < passwordLength; i++){
   
    let index = Math.floor(Math.random()* characters.length)

    password += characters[index];
  }
 
  document.getElementById("password").value = password
  info = name.value
  info = email.value
}

