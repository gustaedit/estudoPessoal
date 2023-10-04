<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Resultado</title>
</head>
<body>
    <h1>Resultado</h1>
    
    <%
       
        String palavra = request.getParameter("palavra");

       
        palavra = palavra.replaceAll(" ", "").toLowerCase();

       
        String palavraInvertida = new StringBuilder(palavra).reverse().toString();

        
        boolean palindromo = palavra.equals(palavraInvertida);

      
        if (palindromo) {
            out.println("<p>A palavra \"" + palavra + "\" é um palíndromo.</p>");
        } else {
            out.println("<p>A palavra \"" + palavra + "\" não é um palíndromo.</p>");
        }
    %>
    
    <a href="index.jsp">Voltar</a>
</body>
</html>
