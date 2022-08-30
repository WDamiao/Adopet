let tel = document.querySelector("#tel")
let regex = /(\(?\d{2}\)\s)?(\d{2}\d{4,5}\-?\d{4})/
let telOK = false

tel.addEventListener('keyup', () => {
    if (!regex.test(tel.value)) {
        tel.classList.add("invalid")

    } else {
        tel.classList.remove("invalid")
    }

})

function maskTel() {

    if (tel.value.length == 11 && tel.value.length != "") {
        let parte1 = tel.value.slice(0, 2)
        let parte2 = tel.value.slice(2, 7)
        let parte3 = tel.value.slice(7, 11)
        let telAjustado = `(${parte1})${parte2}-${parte3}`
        tel.value = telAjustado

    } else if (tel.value.length != "") {
        parte1 = tel.value.slice(0, 2)
        parte2 = tel.value.slice(2, 6)
        parte3 = tel.value.slice(6, 10)
        telAjustado = `(${parte1}) ${parte2}-${parte3}`
        tel.value = telAjustado
    }
}

function removeMaskTel() {
    const textoAtual = tel.value
    const textoAjustado = textoAtual.replace(/[()-]/g, '')
    tel.value = textoAjustado
}

