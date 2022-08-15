async function getContent() {
    try {
        const response = await fetch('http://localhost:3003/')
        const data = await response.json()
        show(data);
        criarCampo()
    } catch (error) {
        console.error(error)
    }
}
getContent()

function show(pets) {
    for (let pet of pets) {

        let img = document.createElement("img")
        img.src = pet.img
        let nome = document.createElement("p")
        nome.innerHTML = pet.name
        let idade = document.createElement("p")
        idade.innerHTML = pet.idade 
        let porte = document.createElement("p")
        porte.innerHTML = pet.porte
        let comp = document.createElement("p")
        comp.innerHTML = pet.comportamento
        let cidade = document.createElement("p")
        cidade.innerHTML = pet.cidade
        let resp = document.createElement("a")
        resp.href = '/pages/mensagem.html'
        resp.innerHTML= 'Falar com responsável'
        resp.classList.add("responsavel")

        let divInfo = document.createElement("div")
        divInfo.appendChild(nome).classList.add("nome")
        divInfo.appendChild(idade).classList.add("descricao")
        divInfo.appendChild(porte).classList.add("descricao")
        divInfo.appendChild(comp).classList.add("descricao")
        divInfo.appendChild(cidade).classList.add("descricao")
        divInfo.appendChild(cidade).classList.add("estado")
        divInfo.appendChild(resp)

        let divCard = document.createElement("div")
        divCard.classList.add("cards")
        divCard.appendChild(img)
        divCard.appendChild(divInfo)
        

        document.querySelector(".cardContainer").appendChild(divCard)
    }
}

function criarCampo(){
    let div =document.createElement("div")
    div.classList.add("cards")
    div.classList.add("lastCard")

    document.querySelector(".cardContainer").appendChild(div)
}

