<!DOCTYPE html>
<html>
<head>
    <title>Resultado</title>
</head>
<body>
    <h1>Resultado</h1>
    
    <%

        String nome = request.getParameter("nome");
        String estadoCivil = request.getParameter("estadoCivil");
        String faixaEtaria = request.getParameter("faixaEtaria");

        String resultado = "Nome: " + nome + "<br>";
        resultado += "Estado Civil: " + estadoCivil + "<br>";
        resultado += "Faixa Etária: " + faixaEtaria + "<br>";

        out.println(resultado);
    %>
    
    <a href="index.jsp">Voltar</a>
</body>
</html>
