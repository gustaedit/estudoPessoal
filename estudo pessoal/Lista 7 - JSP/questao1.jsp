<!DOCTYPE html>
<html>
<head>
    <title>Tabuada</title>
</head>
<body>
    <h1>Tabuada Generator</h1>
    <form method="post" action="tabuada.jsp">
        <label for="numero">Informe um número inteiro:</label>
        <input type="text" id="numero" name="numero">
        <input type="submit" value="Gerar Tabuada">
    </form>

    <%
        
        if (request.getMethod().equalsIgnoreCase("POST")) {
            // Obtém o número informado pelo usuário
            String numeroStr = request.getParameter("numero");
            
            try {
                int numero = Integer.parseInt(numeroStr);

                out.println("<h2>Tabuada do " + numero + ":</h2>");
                for (int i = 1; i <= 10; i++) {
                    int resultado = numero * i;
                    out.println(numero + " x " + i + " = " + resultado + "<br>");
                }
            } catch (NumberFormatException e) {
                out.println("<p>Por favor, informe um número inteiro válido.</p>");
            }
        }
    %>
</body>
</html>
