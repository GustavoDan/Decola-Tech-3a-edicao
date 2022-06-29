function verificaAlunos(alunos, media){
    aprovados = []

    alunos.forEach(aluno => {
        let { nome, nota } = aluno
        if(nota >= media) aprovados.push(nome)  
    })

    return aprovados
}

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
]

console.log(verificaAlunos(alunos, 5))
console.log(verificaAlunos(alunos, 6))
console.log(verificaAlunos(alunos, 7))
console.log(verificaAlunos(alunos, 10))