let foto = document.querySelector(".fotoUsuario")
let file = document.querySelector("#foto")
let iconUsuario = document.querySelector(".iconUsuario")

foto.addEventListener("click", () => {
    file.click()
})

file.addEventListener("change", function() {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            foto.setAttribute('src', reader.result);
            iconUsuario.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }

});