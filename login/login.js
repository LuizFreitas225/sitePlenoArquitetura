function logar(){
    var usuario = document.getElementsByName('username')[0].value;
    var senha = document.getElementsByName('pass')[0].value;
    if(usuario == "Luiz" &&  senha =="nicolau"){
        window.location.href="../PagePleno.html";
    }else{
        alert("Usuário ou senha inválida")
    }
}