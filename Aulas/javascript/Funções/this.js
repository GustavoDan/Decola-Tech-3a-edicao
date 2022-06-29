function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

let pessoa = {nome: "Zé", idade: 20}

console.log(calculaIdade(5))
console.log(calculaIdade.call(pessoa, 10))
console.log(calculaIdade.apply(pessoa, [1]))