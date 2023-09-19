/*
Durante a resolução desta bateria de exercícios você verá 
erros no console do navegador. 

Fazer os erros desaparecerem é parte da resolução dos 
exercícios. 

Importante: o número da linha na qual o erro é lançado 
é exibida ao lado da mensagem no console. Caso não consiga 
descobrir como resolver o erro, comente a linha 
que está lançando o erro e vá para o próximo exercício.
*/

/*
01

A expressão abaixo da declaração do array está lançando um 
erro no console. 

Conserte o erro. 

Após consertar, a expressão deve retornar o número 7.
*/

const objs = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
  { x: 7, y: 8 }
]

objs[3].x

/*
02

A expressão abaixo da declaração do objeto está lançando 
um erro no console. 

Faça os 2 únicos ajustes necessários para consertar o erro.

Após consertar, a expressão deve retornar o caractere w.
*/

const obj = {
  x: () => 'y',
  z: function () { 
    return 'w'
  },
  w () { 
    return 'x'
  }
}

obj.w()

/*
03

Crie uma função que retorna um boolean indicando se o 
argumento que a função recebeu é null.

Invoque a função 3x. A cada invocação, o argumento deve 
ser um valor diferente do anterior. 

Faça com que uma das invocações retorne true.
*/
const itsNull = (value) => value === null

itsNull('oi')
itsNull(4)
itsNull(null)
/*
04

Crie uma função com as seguintes características:

1. A função deve receber 3 argumentos;

2. Se qualquer um dos três argumentos não estiverem 
preenchidos, a função deve retornar a string abaixo:

'Insira todos os argumentos!'

3. O retorno da função deve ser a multiplicação dos 3 
argumentos.
*/
const multiply = (a, b, c) => {
  if (a === undefined || b === undefined || c === undefined) {
    return "Insirt all the arguments"
  }
  
  return a * b * c
}

multiply(1, 2, 2)
multiply(1, 2)
/*
05

Descomente o console.log do código abaixo. 

Ifs aninhados tendem a deixar a leitura do código mais 
complexa. Por isso, sua missão neste exercício é refatorar 
a função abaixo para que ela tenha apenas um if e continue 
funcionando como já está. 

Deixe a expressão/condição do if mais fácil de ser lida. 

Não mexa na invocação da função. Sua refatoração deve 
envolver apenas as linhas de código dentro do bloco da 
função. 
*/

const y = w => {
  if (w[2] === false || 'b' === w[0] || w[1] === 3) {
    return 'Executou if!'
  }

}

const a = 'b'
const b = false
const c = 3

console.log(y([a, c, b]))

/*
06

Crie uma função com as seguintes características:

1. A função deve receber 3 argumentos.

2. Se somente um argumento for passado, retorne o valor do 
argumento.

3. Se dois argumentos forem passados, retorne a soma dos 
dois argumentos.

4. Se todos os argumentos forem passados, retorne a soma do 
primeiro com o terceiro.

5. Se nenhum argumento for passado, retorne o valor booleano 
false.

6. E ainda, se nenhuma das condições acima forem atendidas, 
retorne null.
*/
const isUndefined = arg => arg === undefined

const obteinValues = (argument1, argument2, argument3) => {
  const onlyArgument1 = argument1 != undefined && isUndefined(argument2) && isUndefined(argument3)
  const onlyArgument1And2 = argument1 != undefined && argument2 != undefined && isUndefined(argument3)
  const allArguments = isUndefined(argument1) && isUndefined(argument2) && isUndefined(argument3)
  /* Temo aqui uma exemplo de abstração e refatoração para aumentar a legibilidade do código, o último é como
  era no início. */
  if (onlyArgument1) {
    return argument1
  }

  if (onlyArgument1And2) {
    return argument1 + argument2
  }

  if (allArguments) {
    return argument1 + argument3
  }

  if (isUndefined(argument1) && isUndefined(argument2) && isUndefined(argument3)) {
    return false
  }

  return null
}

console.log(obteinValues(1,2))
/*
07

Invoque a função acima testando as possibilidades abaixo: 

- Com nenhum argumento;
- Com um argumento;
- Com dois argumentos;
- Com três argumentos.
*/
