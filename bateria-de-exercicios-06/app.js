/*
Apenas relembrando, por que é importante:

Se o exercício não especificou nome do identificador 
(variável, parâmetro, propriedade, função), declare ele com 
o nome de sua preferência.

Alguns exercícios contém dicas nas últimas linhas. 

Leia as dicas apenas se precisar. 
*/

/*
01

Use a função eUndefined para melhorar a legibilidade das 
expressões das consts dentro da função somar.

Dica:

Há um operador que pode ser usado em conjunto com a 
invocação da função eUndefined.
*/

const eUndefined = arg => arg === undefined

const somar = (arg1, arg2, arg3) => {
  const temSoArg1 = !eUndefined(arg1) && eUndefined(arg2) && eUndefined(arg3)
  const temSoArg1E2 = !eUndefined(arg1) && !eUndefined(arg2) && eUndefined(arg3)
  const temTodosArgs = !eUndefined(arg1) && !eUndefined(arg2) && !eUndefined(arg3)
  const temNenhumArg = eUndefined(arg1) && eUndefined(arg2) && eUndefined(arg3)

  if (temSoArg1) {
    return arg1
  }
  
  if (temSoArg1E2) {
    return arg1 + arg2
  }
  
  if (temTodosArgs) {
    return arg1 + arg3
  }
  
  if (temNenhumArg) {
    return false
  }

  return null
}



/*
02

Crie uma função pegaNomeConcurso. Esta função deve receber 
um id como argumento e retornar o nome do concurso, se ele 
existir no array concursos.

Se o concurso não existir no array, a função deve retornar 
'Concurso não encontrado'.

Use todos os ids do array concursos para testar a função. 
Teste também o caso onde o concurso não existe no array. 

Dica:

Você pode usar um loop dentro da função. 
*/

const concursos = [
  { id: 'ysdyhsa8a', nome: 'Concurso Loteria XPTO' },
  { id: '7yerdf8fk', nome: 'Concurso Proibido Dançar Mas se Quiser Pode' },
  { id: '9d8f5skui', nome: 'Concurso de Sobrancelha' },
  { id: 'd8sduqsd3', nome: 'Concurso Supermercado Galão' },
  { id: 'd687jsfke', nome: 'Concurso Programadores Garotos de Programa' },
]

const getNameCompetitions = (identifier) => {
  for (let i = 0; i < concursos.length; i++) {
    if (concursos[i].id == identifier) { 
      return concursos[i].nome;
    } 
    // return "Competition not found" não pode ser dentro do for por causa da indenteção, pois se ele
    // nao achar no primeiro vai tertonar a string
  }
  return "Competition not found"
}

// for (let i = 0; i < concursos.length; i++) {
//   console.log(getNameCompetitions(concursos[i].id))
// }
/*
03

Refatore a função abaixo para apenas uma única linha.
*/

// const eAMelhorSerie = serie => {
//   if (serie === 'Breaking Bad') {
//     return '✅ Sim'
//   }
  
//   return '❌ Não'
// }

const eAMelhorSerie = (serie) => serie === 'Breaking Bad' ? '✅ Sim' : '❌ Não'



/*
04

Crie uma função que retorna a média do total de custos do 
array abaixo.

A função deve receber o array custos como argumento. 

Para testar a invocação da função, exiba a seguinte 
mensagem no console:

`A média é ${suaFuncao(custos)}`

Dica:

Para obter a média, basta dividir a soma total dos custos 
pela quantidade de meses.
*/

const custos = [
  { mes: 'janeiro', custoTotal: 5672 },
  { mes: 'fevereiro', custoTotal: 2357 },
  { mes: 'março', custoTotal: 5347 },
  { mes: 'abril', custoTotal: 6325 },
  { mes: 'maio', custoTotal: 6748 },
]
const calcMeanCosts = (cost) => {
  let tot = 0
  for (let i = 0; i < cost.length; i++) {
    tot = tot + cost[i].custoTotal
  }
  return tot / cost.length
}


/*
05

Crie uma função que recebe um array de palavras como 
argumento e retorna apenas as palavras com mais de 3 
caracteres.

A função deve retornar um array.

Teste a função utilizando o array abaixo.
*/

const palavras = ['ovo', 'áudio', 'oi', 'telefones', 'ovni']

const showWordsLength3 = (array) => {
  const wordsLength3 = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
      wordsLength3.push(array[i])
    }
  }
  return wordsLength3
}

showWordsLength3(palavras)
/*
06

Descomente o console.log abaixo. 

A invocação da função dobrar deveria retornar um array com 
cada número do array recebido como argumento multiplicado 
por 2. 

O array [1, 2, 3] foi inserido como argumento e a função 
deveria retornar [2, 4, 6]. 

Porém, ela está retornando [2].

Conserte a função para que ela retorne o array esperado. 
*/

const dobrar = numeros => {
  let numerosDobrados = []

  for (let i = 0; i < numeros.length; i++) {
    numerosDobrados.push(numeros[i] * 2)
    
  }
  return numerosDobrados
}

console.log(dobrar([1, 2, 3]))
