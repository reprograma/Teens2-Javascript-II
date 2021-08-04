// toda condicional começa com SE -> if(condição) {faça isso}
// se não esle if(outra condição){faça isso}
// else{faça isso}

let profissao = "cozinheira"

profissao = "programadora"

if(profissao === "programadora"){
    console.log("Teremos mais uma mulher incrível na TI.")
}else{
    console.log("Não teremos mais uma maravilhosa na TI")
}

const idade = prompt("Digite sua idade:" )

if(idade >= 60){
    alert("você já pode se aposentar!")
}else if(idade >= 18){
    alert("você já pode dirigir!")
}else if(idade >= 12){
    alert("você já pode ajudar a cozinhar")
}else{
    alert("Relaxa baby!!!!")
}

let num1 = Number(prompt("Digite o primeiro numero:"))

let num2 = Number(prompt("Digite o segundo numero:"))


if(num1 > num2){
    console.log(num1)
    console.log(num2)
    console.log(num1 - num2)
}else if(num1 < num2){
    console.log(num1)
    console.log(num2)
    console.log(num1 * num2)
}else{
    console.log(num1)
    console.log(num2)
}