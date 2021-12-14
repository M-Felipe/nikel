const nome = 'Marcos Felipe'
let nome2 = ''
let pessoaDefault = {
  nome: 'Marcos Felipe',
  idade: '21',
  trabalho: 'shopping'
}

let pessoas = [
  {
    nome: 'Marcos Felipe',
    idade: '21',
    trabalho: 'shopping'
  },
  {
    nome: 'Maria Emilia',
    idade: '21',
    trabalho: 'Roupas'
  }
]

function alterarNome() {
  nome2 = 'felipe'
  console.log('Valor alterado: ')
  console.log(nome2)
}

function recebeEalteraNome(novoNome) {
  nome2 = novoNome
  console.log('Valor alterado rebendo um nome: ')
  console.log(nome2)
}

function imprimirPessoa(pessoa) {
  console.log('Nome: ')
  console.log(pessoa.nome)
}

function addPessoa(pessoa) {
  pessoas.push(pessoa)
}

function imprimirPessoas() {
  pessoas.forEach(item => {
    console.log('Nome: ')
    console.log(item.nome)
    console.log('Idade: ')
    console.log(item.idade)
    console.log('profissão: ')
    console.log(item.trabalho)
  })
}

imprimirPessoas()

addPessoa({
  nome: 'ederson',
  idade: '30',
  trabalho: 'cambio'
})

imprimirPessoas()

console.log(pessoas)
//imprimirPessoa(pessoaDefault)
//recebeEalteraNome('freitas batista')
//alterarNome()
