//1- criar um array com os nomes de algumas alunas da turma teens - ok
//2- capturar a ul -ok
//3- guardar a ul numa variavel - ok
//4- usar um laço de repetição  
 //   4.1 criar o elemento li 
//    4.2 inserir o conteúdo dentro de li 
//    4.3 colocar o li dentro do ul
//    4.4  fazer o li aparecer na tela 

let alunas = ["Emily", "Sophya", "Laura", "Rebeca", "Carolina"]

let lista = document.getElementById("lista-alunas") 
console.log(lista)

for(let indice= 0; indice < alunas.length; indice++){ //percorra a minha lista do indice (elemento) 0  até ultimo elemento
    let item = document.createElement("li") // em qual tag vou adicionar ( estou criando o elemento)
    item.textContent = alunas[indice] //inserindo conteudo de texto 
    lista.appendChild(item) //jogando para nossa ul definido na variavel lista
}

