# Javascript

1. [Condicionais](#condicionais)

2. [Array](#array)

3. [Função](#função)


---


**Comparação:**

| Operador | Descrição |
| --- | --- |
| `==` | Igual a |
| `===` | Igual a (tanto o valor quanto o tipo) |
| `!=` | Diferente de  |
| `>` | Maior que |
| `>=` | Maior ou igual a |
| `<` | Menor que |
| `<=` | Menor ou igual a |
<br>

**Lógicos:**

| Operador | Descrição |
| --- | --- |
| `&&` | E |
| `||` | Ou |
| `!` | Negação |



<br>

MDN: [Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators) 

---
## Condicionais:
São `instruções de controle` que podemos usar ao construir nossos códigos. Vamos estudar estudar 2 estruturas condicionais: if...else e switch.

- Podemos usar **if** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira.

```js
let num = 1
if (num ===1) {
    console.log('num é igual a 1')
}
```

- Podemos usar **if...else** se quisermos executar um bloco de código somente se a condição ou verificação lógica for verdadeira. Ou outro bloco de código, somente caso a condição seja falsa.

```js
let number = 0
if (number === 1) {
    console.log('number é igual a 1')
} else {
    console.log(`number não é igual a 1, o valor de number é ${number}`)
}
```

- Além disso para diferentes condições podemos usar vários **if...else** se quisermos executar vários blocos de códigos diferentes.

```js
let mes = 'setembro'
if (mes === 'fevereiro) {
    console.log('tem carnaval')
} else if (mes === 'junho'){
    console.log('tem são joão')
} else if (mes === 'dezembro'){
    console.log('tem natal')
} else {
    console.log(`${mes} não é um mês festivo.`)
}
```

- Agora, se a condição que estivermos avaliando for a mesma que a anterior, porém com valores diferentes, podemos usar a instrução **switch**:

```js
let diaDaSemana = 'segunda'
switch (diaDaSemana) {
    case 'domingo':
        console.log('Domingou')
        break
    case 'sábado':
        console.log('Sabadou')
        break
    case 'sexta':
        console.log('Sextou')
        break
    default: 
        `${diaDaSemana} não é um dia festivo.`
}
```

Atenção para as palavras reservadas case, break e default. 

MDN: [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else), 
[switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

---

## Arrays

Declaração de arrays

```js
const lista = new Array('pera', 'uva', 'maçã')

const numeros = [9, 2, 5]
```

Acessando elementos pela posição do array:

```js
const primeiroItem = lista[0]

console.log(primeiroItem) // pera
```

Tamanho de array:

```js
const tamanho = numeros.length

console.log(tamanho) // 3

```
MDN: [array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)


---

## Funções

### O que são funções?

São `ações executadas assim que são chamadas` ou em decorrência de algum evento.

Uma função pode receber parâmetros e retornar um resultado.

    No html para criar uma chamada pra ação que ocorra quando o botão de calcular era clicado. No arquivo js criamos a função abaixo:

```js
    function clicar() {
        resposta.innerHTML = input.value
    }
```
- chamada -> no evento de clique
- parâmetros -> nao recebiamos 
- ação -> Pegar o valor digitadi do input e fazer aparecer na tela no elemento resposta
- retorno -> texto na tela com sucesso

A verdade é que na vida real, todas nós temos também tarefas e rotinas que seguem alguns critérios.

Exemplo jogar o lixo. Todas as segundas, quartas e sextas, eu posso jogar lixo organico.
Todas as tercas e quintas, eu posso jogar o lixo reciclável.

- chamada -> nos dias referentes 
- parâmetros -> dia
- ação -> separar o lixo, amarrar o saco, levar até ao local destinado
- retorno -> dia informando qual lixo jogar

E trazendo isso para o mundo do javascript, podemos criar um programa que me lembra de jogar o lixo corretamente. Vamos lá?

```js  
function jogarLixo(dia) {
    if(dia === 'segunda'|| dia === 'quarta' || dia ==='sexta'){
        console.log('lixo organico') 
        } else if (dia === 'terca'|| dia === 'quinta') {
            console.log('lixo reciclavel')
        } else {
            console.log('nao pode jogar lixo')
        }  
        return dia 
}

let qualTipoJogarHoje = jogarLixo('sabado')
console.log(qualTipoJogarHoje)
```

### Por que e como utilizar?
Quando precisamos de uma instrução, uma ação que pode ser executada em diferentes momentos no nosso código.

Declaração
- Usamos a palavra reservada function
- Podemos dar um nome ou deixá-la anônima
- não esequecer de usar os parenteses, nele podemos passar parametros ou nao
- e dentro das chaves colocamos as instruções que podem ter um retorno ou não

Parâmetros
São informacões que se comportam como variaveis dentro daquela função e que podem ser usadas nas instruções

Retorno
Usando a palavra reservada return podemos, instruir nosso código a retornar algo.

Nomeando funções
- Sempre prefira usar verbos que descrevem exatamente o que a sua função irá fazer. 
- Não se preocupe se os nomes ficarem grandes, desde que sejam descritivos o suficiente.
- Use também o camelcase, quando usamos a segunda palavra com a primeira letra maiuscula.


```js
function falar() {
  return 'Pipipi popopo'
}

function dobro(num) {
  return num * 2
}

function calcularMedia(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```

Ou, podemos declarar as mesmas funções da seguinte forma:

```js
const falar = function() {
  return 'Pipipi popopo'
}

const dobro = function(num) {
  return num * 2
}

const calcularMedia = function(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```


MDN: [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

---