// import da biblioteca
const readline = require("readline")

// criação do objeto
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Qual é o nome do cliente?:', function(nome){
    let clienteNome = nome
    entradaDeDados.question('Qual é o nome do produto?:', function(nome){
        let produtoNome = nome
        entradaDeDados.question('Qual é o valor da compra?:', function(nome){
            let valorCompra = nome
            entradaDeDados.question('Qual é a taxa de juros?:', function(nome){
                let jurosTaxa = nome
            })    
        })    
    })    
})