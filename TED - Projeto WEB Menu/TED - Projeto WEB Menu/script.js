function mostrarPedido() {
    var entrada = document.getElementById("entrada").value;
    var pratoPrincipal = document.getElementById("pratoPrincipal").value;
    var sobremesa = document.getElementById("sobremesa").value;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Seu Pedido:</h2>
        <p><strong>Entrada:</strong> ${entrada}</p>
        <p><strong>Prato Principal:</strong> ${pratoPrincipal}</p>
        <p><strong>Sobremesa:</strong> ${sobremesa}</p>
    `;
}