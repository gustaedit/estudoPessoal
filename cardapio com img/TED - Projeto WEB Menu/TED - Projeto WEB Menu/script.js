var entradasImagens = {
    "Torresmo": "torresmo.jpg",
    "Ceviche": "ceviche.jpg",
    "Isca de Peixe": "isca.jpg"
};

var pratosImagens = {
    "Bife de Filé Mignon": "file.jpg",
    "Risoto de Camarão": "risoto.jpg",
    "Salmão Grelhado": "Salmão.jpg",
    "Yakissoba": "yakissoba.jpg",
    "Spaghetti à Carbonara": "spaghetti.jpg"
};

var sobremesasImagens = {
    "Petit Gâteau": "petitgateau.jpg",
    "Mousse de Maracujá": "mousse.jpg",
    "Pudim": "pudim.jpg"
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
            tipoNome = "PratoPrincipal";
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

