/*
Nunca é demais lembrar: resolva os exercícios usando apenas 
as funcionalidades da linguagem mostradas no Curso 
JavaScript do Zero. 

Assim, você se certifica se realmente aprendeu o que foi 
mostrado =)
*/

/*
01

No código abaixo, o nome da rua em que João Almeida mora 
foi modificado acidentalmente. 

Refatore o código para que Joana more na mesma cidade e 
estado que João, mas a rua seja 'Rua Rio de Janeiro'.

Sua refatoração pode ser feita na criação do objeto person2.

Teste o seu código através das duas condições descritas 
abaixo:

1) Rua do objeto person é diferente de rua do objeto 
person2.

2) Objeto address de person é diferente de objeto address 
de person2.

As duas condições devem retornar true.
*/

const person = {
  name: 'João Almeida',
  age: 29,
  address: {
    street: 'Rua Minas Gerais',
    city: 'São Paulo',
    state: 'São Paulo'
  }
}

const person2 = {
  ...person,
  address: {...person.address//, street: 'Rua Rio de Janeiro
},
  name: 'Joana Cruz'
}

person2.address.street = 'Rua Rio de Janeiro'

// console.log(person.address.street === person2.address.street)
// console.log(person.address === person2.address)
// console.log(person.address.street)
// console.log(person2.address.street)
/*
02

Crie uma função getMessage que recebe como argumento o 
array que a função getHeroes retorna. 

Na função getMessage, cada item do array deve ser 
acessado e a função deve retornar a seguinte string:

O nome do herói no 1º item é Batman e seu nome verdadeiro é Bruce Wayne.
O nome da heroína no 2º item é Wonder Woman e seu nome verdadeiro é Diana Prince.
O nome do herói no 3º item é Spider-Man e seu nome verdadeiro é Peter Parker.

Sua string deve ter 3 linhas, exatamente como formatado 
acima. Para quebrar linha em uma string, você pode usar o 
caractere especial \n no fim de cada linha.

Evite a repetição de "obj." em seu código.
*/

const getHeroes = () => [
  { name: 'Batman', realName: 'Bruce Wayne', gender: 'Male' },
  { name: 'Wonder Woman', realName: 'Diana Prince', gender: 'Female' },
  { name: 'Spider-Man', realName: 'Peter Parker', gender: 'Male' }
]

const getMessage = (arr) => {
  let message = ''
  for (let i = 0; i < arr.length; i++) {
    const preposition = gender === 'Male' ? 'do' : 'da'
    const heroGender = gender === 'Male' ? 'herói' : 'heroína'
    const getHero = ({ name, realName, gender}) => `O nome ${preposition} ${heroGender} no ${i + 1}º item é ${name}, e seu nome verdadeiro é ${realName}.\n`
    message += getHero(arr[i])
  }
  return message
}
// const heros = getHeroes() aqui eu iria guardar na variavel o retorno da função
// console.log(getMessage(getHeroes()))
/*
03

Crie uma função multiply que recebe como argumento o 
array objs. 

A função multiply deve retornar a multiplicação entre id 
do primeiro objeto do array e code do segundo objeto. 

Evite a repetição de "arr[index]" em seu código.
*/

const objs = [{ id: 3, code: 31 }, { id: 7, code: 21 }]
const multiply = ([{id}, {code}]) => id * code
// const multiply = (obj) => {
//   let valueIdObj1 = 0
//   let valueCodeObj2 = 0
//   obj.forEach(({ id, code }, i) => {
//     if (i === 0 && id !== undefined) {
//       valueIdObj1 = id
//     } 
//     if (i === 1 && code !== undefined) {
//       valueCodeObj2 = code
//     }
//   })

//   return valueCodeObj2 * valueIdObj1
// }
// const multiply = ([obj1, obj2]) => obj1.id * obj2.code
// const multiply = arr => arr[0].id * arr[1].code
// console.log(multiply(objs))
/*
04

Embora a propriedade uva exista no objeto fruits, a função 
está retornando a string à direita do operador "ou" (||).

Faça o único ajuste necessário na linha do return para que 
a função retorne o valor da propriedade uva. 

Não substitua fruits.fruit por fruits.uva. 
*/

const getfruitBenefits = fruit => {
  const fruits = { 
    abacaxi: 'Ajuda a fortalecer o sistema imunológico e eliminar inflamações.',
    banana: 'Auxilia a regular o sistema nervoso e o aparelho digestivo.',
    uva: 'Rica em carboidratos, altamente energética.'
  }

  return fruits[fruit] || 'Não há informações da fruta =/' // acessar as propriedade de forma dinâmica com colchetes
}

const benefits = getfruitBenefits('uva')
// console.log(benefits)

/*
05

Modifique a linha do return abaixo de forma que a 
propriedade dentro do objeto payload seja nomeada 
dinamicamente. 

Após esta modificação, a const product deve armazenar um 
objeto como este: 

{
  type: 'UPDATE_SIZE',
  payload: {
    g: 'Jaqueta Trucker Jeans Com Recortes E Forro De Sherpa Azul Claro'
  }
}
*/

const updateInfo = product => {
  const { name, value } = product.target
  const action = name.includes('size-') ? 'UPDATE_SIZE' : 'UPDATE_FIELD'
  const fieldName = name.includes('size-') ? name.replace('size-', '') : name

  return { type: action, payload: { [fieldName]: value } } // criando um objeto, e a propriedade recebe o nome do valor da variavel.
}

const product = updateInfo({ 
  target: {
    name: 'size-g', 
    value: 'Jaqueta Trucker Jeans Com Recortes E Forro De Sherpa Azul Claro' 
  }
})

// console.log(product)

/*
06

O código abaixo está funcionando e é de um exercício que 
fizemos anteriormente. 

Renomeie o que está em português para inglês.
*/

const getAnswerUser = () => ['A', 'B', 'A', 'C']

const getScore = answerUser => {
  const lastAnswer = answerUser[answerUser.length - 1]
  const score = { A: 50, C: 25 }
  return score[lastAnswer] || 100
  // return { A: 50, C: 25 }[lastAnswer] || 100
}

const answerUser = getAnswerUser()
const score = getScore(answerUser)
console.log(score)

/*
07

Refatore a função que anteriormente se chamava 
pegaPontuacao. 

Dicas:

Você pode substituir if, else if e else por uma estrutura 
de dados e acessar os dados de forma dinâmica.
*/
