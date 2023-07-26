// array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Gustavo', nota: 7 },
    { nome: 'Julia', nota: 5 },
    { nome: 'Ana', nota: 8 },
    { nome: 'Wagner', nota: 6 },
];

// função q retorna apenas os alunos com nota maior ou igual a 6
const alunosAprovados = alunos.filter((aluno) => aluno.nota >= 6);

// console.log(alunosAprovados);
alunosAprovados.forEach(({ nome, nota }) => {
    console.log(`Aluno(a):${nome}, está aprovado com nota: ${nota}`);
});