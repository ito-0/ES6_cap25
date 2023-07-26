function funcaoMuitoPesada() {
    let execucoes = 0
    for (let i = 0; i < 1000000000; i++) {
        execucoes++
    }
    return execucoes
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0
        for (let i = 0; i < 1000000000; i++) {
            execucoess++
        }
        resolve(execucoes)
    } catch(e) {
        reject ('erro na iteração')
    }
})  



// async function execucaoPrincipal() {
//     console.log("inicio")
//     // console.log(funcaoMuitoPesada())
//     // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

//     const resultado = await funcaoMuitoPesadaPromise
//     console.log(resultado)
//     console.log("fim")
// }
// execucaoPrincipal()


const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`)
        }, 3000)
    })
}
// catch vai mostrar o erro, mesmo depois de rodar o jseo powershell mostrar erro, mas se escreve catch o pwershell roda e mostra como erro a mensagem que vc escreveu
async function execucaoPrincipal() {
    console.log("inicio")

    //     // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('eu@gmail.com', 12315456).then((resultado) => {
        console.log(resultado)
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise
        console.log(resultado)
    } catch (e) {
        console.log(e)
    }

    console.log("fim")
}
execucaoPrincipal()

