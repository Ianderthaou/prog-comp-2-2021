function questao2 () {

    //Faça um programa em linguagem JavaScript que receba 12 nomes dos jogadores de basquete do SESI FRANCA e armazene-os em um vetor. Ainda, o programa deve receber a média de pontos que cada jogador teve no último campeonato do NBB. Em seguida, o programa deve calcular e mostrar:
    //a) a média de pontos do time
    //b) o nome do jogador com mais pontos no campeonato, mostrando também este maior ponto
    //c) os nomes dos jogadores que fizeram número de pontos pares

    
    //declaração de vetor
    let jogadores = []
    let pontuacao = []
    // entradad de dados
    for(let i=0;i<12;i++) {
        jogadores.push(prompt(`Informe o noke do jogador`))
        pontuacao.push(Number(prompt(`Informe a pontuação do jogador ${jogadores[i]}`)))
    }
    //processamento
    //cálculo da média
    let soma = 0 
    for(let i=0;i<12;i++) {
        soma = soma + pontuacao[i]
    }
    alert(`A média de pontuação de time é de ${soma/12}`)
    //calcular o cestinha
    let maior = 0
    let nome = ""
    for(let i=0;i<12;i++) {
        if(pontuacao[i] > maior) {
        maior = pontuacao[i]
        nome = jogadores[i]
        }
    }
    console.log(`O cestinha do time é ${nome} com ${maior} pontos`)

    //criar vetor de pontuacao par
    let pares = []
    for(let i=0;i<12;i++) {
        if(pontuacao[i] % 2 == 0) {
            pares.push(jogadores[i])

        }
    }
    alert(pares)
}

let questao1 = ()  => {
    let whats = 0
    let email = 0
    let papel = 0
    let tantoFaz = 0
    let ava = 0
    let opcao
    do {
        opcao = Number(prompt(`Informe uma opção`))
        switch(opcao) {
            case 1: ava++
                    break
            case 2: papel++
                    break
            case 3: whats++
                    break
            case 4: email++
                    break
            case 5: tantoFaz++
                    break 
            default: alert(`Opção inválida`)       
        }
    }
    while(opcao != 0)
    console.log(`Ava - ${ava}Papel - ${papel}Whats - ${whats}E-mail - ${email}Tanto Faz - ${tantoFaz}`)
    console.log(`${(tantoFaz/ava+email+tantoFaz+papel+whats)*100}}`)
    //ordenar
    let troca
    for(let i = 0;i<4;i++) {
        if (ava > papel) {
            troca = ava; ava = papel; papel = troca
        }
        if (papel > whats) {
            troca = papel; papel = whats; whats = troca
        }
        if (whats > emaisl) {
            troca = whats; whats = email; email = troca
        }
        if (email > tantoFaz) {
            troca = email; email = tantoFaz; tantoFaz = troca
        }
    }
    console.log(`${tantoFaz} ${email} ${whats} ${papel} ${avaz}`)
}