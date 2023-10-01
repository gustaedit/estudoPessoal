var entradasImagens = {
    "Entrada 1": "torresmo.jpg",
    "Entrada 2": "ceviche.jpg",
    "Entrada 3": "isca.jpg"
};

var pratosImagens = {
    "Prato 1": "file.jpg",
    "Prato 2": "risoto.jpg",
    "Prato 3": "Salmão.jpg",
    "Prato 4": "yakissoba.jpg",
    "Prato 5": "spaghetti.jpg"
};

var sobremesasImagens = {
    "Sobremesa 1": "petitgateau.jpg",
    "Sobremesa 2": "mousse.jpg",
    "Sobremesa 3": "pudim.jpg"
};

function mostrarImagemSelecionada(tipo, opcaoSelecionada) {
    var imagens;
    var tipoNome;

    switch (tipo) {
        case "entrada":
            imagens = entradasImagens;
            tipoNome = "Entrada";
            break;
        case "pratoPrincipal":
            imagens = pratosImagens;
            tipoNome = "Prato Principal";
            break;
        case "sobremesa":
            imagens = sobremesasImagens;
            tipoNome = "Sobremesa";
            break;
        default:
            return;
    }

    var imagemElement = document.getElementById("imagem" + tipoNome);
    var imagemSelecionada = imagens[opcaoSelecionada];

    if (imagemSelecionada) {
        imagemElement.setAttribute("src", imagemSelecionada);
        imagemElement.style.display = "block";
    } else {
        imagemElement.style.display = "none";
    }
}

function mostrarPedido() {
    var entradaSelecionada = document.getElementById("entrada").value;
    var pratoPrincipalSelecionado = document.getElementById("pratoPrincipal").value;
    var sobremesaSelecionada = document.getElementById("sobremesa").value;

    mostrarImagemSelecionada("entrada", entradaSelecionada);
    mostrarImagemSelecionada("pratoPrincipal", pratoPrincipalSelecionado);
    mostrarImagemSelecionada("sobremesa", sobremesaSelecionada);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Seu Pedido:</h2>
        <p><strong>Entrada:</strong> ${entradaSelecionada}</p>
        <p><strong>Prato Principal:</strong> ${pratoPrincipalSelecionado}</p>
        <p><strong>Sobremesa:</strong> ${sobremesaSelecionada}</p>
    `;
}
