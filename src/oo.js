// function Pokemon(nomePoke, tipoPoke) {
//     this.nome = nomePoke
//     this.tipo = tipoPoke
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    #hp = 100
// o hp fica somente dentro desse class

    constructor(nomePoke, tipoPoke) {
        this.nome = nomePoke
        this.tipo = tipoPoke
    }

    atacar(nomeDoAtk) {
        console.log(`${this.nome} atacou com ${nomeDoAtk}`)
    }
    damage() {
        this.#hp -= 10
    }
    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu()

pikachuDoAsh.damage()


console.log (pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('pikachu', 'elétrico')
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu'
// pikachu.tipo = 'eletrico'

console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu)
console.log(pikachuDoAsh instanceof Pokemon)