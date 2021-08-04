function falar(){
    console.log("Blá, blá, blá")
    console.log("Blá, blá, blá")
    console.log("Blá, blá, blá")
    console.log("Blá, blá, blá")
    console.log("Blá, blá, blá")
}

falar()


function falarOla(){
    return "Olá"
}

console.log(falarOla())

function resultadoDaSoma() {
    return 2+2
}

console.log(resultadoDaSoma()) //4
console.log(resultadoDaSoma() > 5) //false
console.log(resultadoDaSoma() * 20) //80


function nome(nomeAluna){
    return `O nome da aluna maravilhosa é ${nomeAluna}`
}

console.log(nome("Rebeca"))

function falarIdade(idade){
    return `A idade dela é ${idade}`
}

console.log(falarIdade(30))



let usuaria = prompt("Digite seu nome") //recebendo um nome

function saudacao(nome){
    return `Seja bem vinda a aula ${nome}.`
}

console.log(saudacao(usuaria)) //passando o nome como o paramentro da função

function somar(num1, num2){
    return num1 + num2
}

console.log(somar(50, 5))

function descobrirIdade(anoA){
    return `A idade dela é ${2021 - anoA}`
}

let anoNascimento = Number(prompt("Digite qual ano você nasceu"))
console.log(descobrirIdade(anoNascimento))



function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) /3
}

console.log(calcularMedia(8, 6, 4))

console.log("-------------BONUS OBJETO")


let professora = {
    nome: "Tassila Bomfim",
    idade: 30,
    profissao: "Desenvolvedora",
    tecnologias: ["Js", "C#", "HTML"],
    cidadeNasc: "Alagoinhas"
}

console.log(professora.tecnologias)
console.log(professora.profissao)
console.log(professora.nome)