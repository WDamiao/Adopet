let form = document.querySelector(".formulario")
let email = document.querySelector("#email")
let nome = document.querySelector("#nome")
let senha = document.querySelector("#senha")
let confirmaSenha = document.querySelector("#confirmaSenha")

let validaEmail = false
let validaNome = false
let validaSenha = false
let validaConfirmaSenha = false

let erroSenha = document.querySelector(".erroSenha")
let erroConfirmaSenha = document.querySelector(".erroConfirmaSenha")

let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

email.addEventListener("keyup", () => {
    if (email.value.length < 20) {
        email.classList.add("invalid")
        email.classList.remove("success")
        validaEmail = false
    } else {
        email.classList.add("success")
        email.classList.remove("invalid")
        validaEmail = true
    }
})

nome.addEventListener("keyup", () => {
    if (nome.value.length < 3) {
        nome.classList.add("invalid")
        nome.classList.remove("success")
        validaNome = false
    } else {
        nome.classList.add("success")
        nome.classList.remove("invalid")
        validaNome = true
    }
})

senha.addEventListener("keyup", () => {
    if (!strongRegex.test(senha.value)) {
        senha.classList.add("invalid")
        senha.classList.remove("success")
        validaSenha = false
        erroSenha.setAttribute("style", "visibility: visible")
        erroSenha.innerHTML = "A senha deve ter pelo menos 8 digitos com letra maiúscula, número e caractere especial"
    } else {
        senha.classList.add("success")
        senha.classList.remove("invalid")
        validaSenha = true
        erroSenha.setAttribute("style", "visibility: hidden")
        erroSenha.innerHTML = ""
    }
})

confirmaSenha.addEventListener("keyup", () => {
    if (confirmaSenha.value !== senha.value) {
        confirmaSenha.classList.add("invalid")
        confirmaSenha.classList.remove("success")
        validaConfirmaSenha = false
        erroConfirmaSenha.setAttribute("style", "visibility: visible")
        erroConfirmaSenha.innerHTML = "A senha deve ser igual a digitada acima"
    } else {
        confirmaSenha.classList.add("success")
        confirmaSenha.classList.remove("invalid")
        validaConfirmaSenha = true
        erroConfirmaSenha.setAttribute("style", "visibility: hidden")
        erroConfirmaSenha.innerHTML = ""
    }
})

function checkInputs() {
    if (validaEmail && validaNome && validaSenha && validaConfirmaSenha) {
        let userList = JSON.parse(localStorage.getItem('userList') || '[]')

        userList.push(
            {
                email: email.value,
                nome: nome.value,
                senha: senha.value
            }
        )

        localStorage.setItem('userList', JSON.stringify(userList))

        setTimeout(()=>{
            window.location.href="/pages/login.html"
        },1500)

    } else {
        alert("preencha todos os campos corretamente")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()
})


