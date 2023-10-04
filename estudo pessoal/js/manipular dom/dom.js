// seleciona o conteudo desejado (tag,id,classe...)
//document.querySelector('h1')

//seleciona todos os elementos de uma (tag,id,j classe...)
//document.querySelectorAll('h1')

//armazena o resultado da consulta
let titulo = document.querySelector('h1')
titulo.textContent //Acessa
//mostra o conteudo interno da tag
titulo.textContent = 'DOM'//Altera
//muda o conteudo interno de (h1) => DOM

let testando = document.querySelectorAll('.box')

//chama o conteudo
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
//document.write(nome da variavel[posiçao].textContent)
testando[0].textContent = 'texto alterado'
//altera o conteudo

//chama o elemento de acordo com a tag
let testeTag = document.getElementsByTagName('div')

//chama o elemento de acordo com o id
let testeId = document.getElementById('titulo')

//chama o elemento de acordo com a classe
let testeClass = document.getElementsByClassName('box')
