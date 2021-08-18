let gerenciaRedesSociais = () => {

    let vetorRedeSocias = []
    for(let i=0;i<5;i++) {
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        vetorRedeSociais.push(objeto)
    }

    let vetorUsuarios = []
    for(let i=0;i<5;i++) {
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o login do usuário`)),
            qtdePosts: Number(prompt(`Informe o código da rede social`)),
            qtdePosts: Number(prompt(`Informe a qtde de Posts`))
        }
        //só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede social
        let j = 0 //indice do vetor de redes sociais
        while (!achou && j<5) { // sai ou porque achou ou porque acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial) { // achamos
                vetorUsuarios.push(objeto)// inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++
        }
        if (!achou) {
            alert(`Usuário nçao inserido, pois a Rede Social não foi encontrada`)
        }
    }
}