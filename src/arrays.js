const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i =0;  i < redesSociais.length; i++) {
    console.log(`Eu tenho na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome =='Paula' // tru od fals
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome =='Paula' // tru od fals
})

console.log(indiceDaPaula)

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual) {
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros)

// every 
alunos2.push({
    nome:'Lu',
    curso:'Backend'
})

const todosAlunosFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

// const todosAlunosFrontend = alunos2.every(function(item) {
//     return item.idade >= 18
// })


console.log(todosAlunosFrontend);

const existeAlunoBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
}) 

console.log(existeAlunoBackend);

function filtroAlunoBackend(aluno) {
    return aluno.curso === 'Backend';
}

// o de baixo eh a mesma coisaporem simplificado
// use aluno ou (aluno, indice) se for precisar de mais de 1
// const filtraAlunosBackEnd2 = aluno => aluno.curso === 'Backend'


const alunosBackend = alunos2.filter(filtroAlunoBackend)

console.log(alunosBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaFor += nums[i];
}

console.log(somaFor);

const nomeAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomeAlunos)