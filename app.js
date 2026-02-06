// importando biblioteca
const { addAbortListener } = require('events')
const readline = require ('readline')

// criando objeto
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})

// entrada de dados nome
entradaDeDados.question('Qual é o nome do cliente?: ', function(nome){


    // capturando o nome
    let clienteNome = nome
    
    

      // entrada de dados produto  
      entradaDeDados.question('Qual é o nome do produto?: ', function(produto){


        // capturando o produto
        let produtoNome = produto


        // entrada de dados valor compra
        entradaDeDados.question('Qual é o valor total da compra?: ', function(valor){



            // capturando valor
            let produtoValor = valor



            // entrada de dados juros
            entradaDeDados.question('Qual é o valor do juros?: ', function(juros){



                // capturando valor juros
                let jurosTaxa = juros


                // desafio bem legal
                entradaDeDados.question('O cliente gostaria de parcelar em meses ou anos? se for meses (2) se for anos (1): ', function(tempo){




                    // capturando o tempo
                    let capturarTempo = tempo
                    
                    
                    // escolha do cliente no desafio
                    entradaDeDados.question('Em quantos (escolha do cliente meses ou anos) será parcelada?:', function(parcela){



                        // capturando a parcela
                        let parcelaValor = parcela
                        
                        


                            // validação                        
                            if(clienteNome == "" || produtoNome == "" || produtoValor == "" || jurosTaxa == "" || parcelaValor == ""){
                                console.log("ERRO: Você não preencheu corretamente ")



                            }else if(produtoValor <= 0 || jurosTaxa <= 0 || parcelaValor <= 0){
                                console.log("ERRO: Insira números validos")
                            


                            }else if(isNaN(produtoValor) || isNaN(jurosTaxa) || isNaN(parcelaValor)){
                                console.log("ERRO: Apenas números são validos")
                            



                            }else {


                                // formula pra calcular        
                                let calculoFinal

                                if(capturarTempo == 1){
                                
                                
                                    calculoFinal = parcelaValor * 12
                                }else if(capturarTempo == 2){
                                    calculoFinal = parcelaValor
                                }


                                let juros = (Number(jurosTaxa)) / 100;


                                let resultado = (Number(produtoValor) * (1 + Number(juros)) ** Number(calculoFinal))


                                
                                let diferença = Number(valorTotal) - valorProduto
                                
                            
                                console.log(resultado.toFixed(2))
                               
                                
                                console.log("\n");
                                console.log(`
                                        ******************* Viva Moda *******************\n
                                    Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
                                    A compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.\n
                                    A sua compra será parcelada em ${parcelamentoFinal} vezes e o Sr(a) pagará: ${valorTotal.toFixed(2)}.\n
                                    O acréscimo realizado ao valor de: ${valorProduto} será de ${diferença.toFixed(0)}.\n
                                    Muito obrigado por escolher a Viva Moda.\n
                                        *******************************************************

                                    `)
                            }

                })
            })
          })
        })
      })
    })
  

