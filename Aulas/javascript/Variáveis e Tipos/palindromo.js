function verificaPalindromo1(string) {
    if(!string) return "String inexistente"

    return string.toLowerCase().split('').reverse().join('') === string.toLowerCase()
}

function verificaPalindromo2(string) {
    if(!string) return "String inexistente"

    let newString = ""
    for (i = string.length-1; i >= 0; i--){
        newString += string[i]
    }

    return newString.toLowerCase() === string.toLowerCase()
}

console.log(verificaPalindromo1("Ana"))
console.log(verificaPalindromo2("Ana"))
console.log(verificaPalindromo1("Teste"))
console.log(verificaPalindromo2("Teste"))
console.log(verificaPalindromo1(""))
console.log(verificaPalindromo2(""))