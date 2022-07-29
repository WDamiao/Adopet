
function entrar() {
    let email = document.querySelector("#email")
    let senha = document.querySelector("#senha")
    let erroMsg = document.querySelector(".erroMsg")

    let userList = []
    let userValid = {
        email: '',
        nome: '',
        senha: ''
    }

    userList = JSON.parse(localStorage.getItem("userList"))

    userList.forEach((item) => {
        if (email.value == item.email && senha.value === item.senha) {
            userValid = {
                email: item.email,
                nome: item.nome,
                senha: item.senha
            }
            erroMsg.innerHTML = ''
            erroMsg.setAttribute('style', 'display:none')
        }
    })

    if (email.value == userValid.email && senha.value === userValid.senha && email.value != '' && senha.value != '') {
        email.classList.remove('invalid')
        senha.classList.remove("invalid")
        window.location.href='/pages/home.html'
    } else {
        email.classList.add("invalid")
        senha.classList.add("invalid")
        erroMsg.innerHTML = "Email ou senha incorreto"
        erroMsg.setAttribute('style', 'display:block')
        email.focus()
    }

}
