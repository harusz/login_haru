function toggleSenha(idCampo) {
    const campo = document.getElementById(idCampo);
    campo.type = campo.type === "password" ? "text" : "password";
}

document.getElementById("esqueciSenha").addEventListener("click", function (e) {
    e.preventDefault();
    const usuario = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    const output = document.getElementById("senhaRecuperada");
    if (usuario && usuario.senha) {
        output.textContent = "Sua senha cadastrada é: " + usuario.senha;
    } else {
        output.textContent = "Nenhum usuário encontrado";
    }
})

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    console.log('asadasd', email)
    let senha = document.getElementById("senha").value.trim();
    console.log(email)
    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");
    let mensagemErro = document.getElementById("mensagemErro");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";

    let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    console.log(usuarioCadastrado)

    if (!usuarioCadastrado) {
        mensagemErro.textContent = "Nenhum usuario cadrastrado";
        return;
    }

    if (email !== usuarioCadastrado.email) {
        erroEmail.textContent = "E-mail não encontrado!";
        return;
    }

    if (senha !== usuarioCadastrado.senha) {
        erroSenha.textContent = "Senha incorreta!";
        return;
    }

    mensagemSucesso.textContent = "login realizado com sucesso!";
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 3000);

})