function somar() {
    let soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    return soma
    // return a + b
}

// restricoes de baixo: function somarComRest (...numeros, ...xxxx) errado
//                     function somarComRest (nome, sobrenome, ...numeros) certo
console.log(somar(10, 20, 30))

function somarComRest (...numeros) {
    const soma = numeros.reduce((total, nunmeroAtual) => {
        total += nunmeroAtual
        return total
    }, 0)
    return soma
}

console.log(somarComRest(10, 20, 30))

// SPREAD
const numeros = [1,2,3,4]
console.log(...numeros)

const timesFutSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo']
const timesFutRio = ['vasco', 'botafogo', 'flamengo', 'fluminense']

// const timesFut = timesFutSp.concat(timesFutRio)
const timesFut = [...timesFutSp, ...timesFutRio]

// timesFutSp.concat(timesFutRio)
console.log(timesFut)

const carroDaJu = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJu,
    motor: 1.8
}

console.log(carroDaAna)

// desestruturação
// const motorCarroDaAna = carroDaAna.motor
const {motor: motorCarroDaAna} = carroDaAna
const {motor: motorCarroDaJu} = carroDaJu

console.log(motorCarroDaAna)
console.log(motorCarroDaJu)

const [item1, item2, item3, ...outrosTimes] = timesFut

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)