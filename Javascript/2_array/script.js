/*
Crie uma listinha de compras e então - ok
Mostre no console o segundo elemento desse array, criado acima, com a
frase: "O segundo elemento do array é [ELEMENTO]."
*/


let lista = ['chocolate', 'granola', 'arroz', 'açucar']

console.log(`O segundo elemento da lista é ${lista[1]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"Esta lista possui [QUANTIDADE DE ITENS] itens."
*/

console.log(`Esta lista possui ${lista.length} itens.`) //interpolação
console.log("Esta lista possui " + lista.length + " itens.") //concatenação

lista.unshift('mel') //adiciona um elemento na primeira posição
console.log(lista.length)
console.log(lista)

console.log(`O segundo elemento da lista é ${lista[1]}`)

lista.push('banana') //adiciona um elemento na ultima posição
console.log(lista.length)
console.log(lista)

lista.pop() //remove o ultimo elemento 
console.log(lista.length)
console.log(lista)


let numSorte = [5, 8, 2, 1, 0]


console.log(numSorte)
console.log(numSorte.sort()) //ordenando para ordem crescente


