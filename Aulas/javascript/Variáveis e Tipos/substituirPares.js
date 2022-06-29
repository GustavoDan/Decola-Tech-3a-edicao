function esvaziaPares(numeros){
    let novoNumeros = []
    if(numeros.length > 0){
        numeros.forEach(numero => {
            if (numero % 2 == 0){
                novoNumeros.push(0)
            } else{
                novoNumeros.push(numero)
            }
    
        })

        return novoNumeros
    } else{
        return -1
    }
}

console.log(esvaziaPares([]))
console.log(esvaziaPares([1, 3, 5, 7 , 9]))
console.log(esvaziaPares([0, 2, 4, 6, 8]))
console.log(esvaziaPares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
