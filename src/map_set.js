let meuMap = new Map()
meuMap.set("nome", "gian")
meuMap.set("stack", "html, css, js")

console.log(meuMap)

meuMap.get("nome")

const nome = meuMap.get("nome")

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

// for (let chave of meuMap.keys()) {
//     console.log(chave)
// }

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let entrada of meuMap.entries()) {
    console.log(entrada)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")

console.log(meuMap)

const cpfs = new Set()

cpfs.add('49671622070')
cpfs.add('23490558090')
cpfs.add('84680091053')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})


// IMPORTANTEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arraySet = new Set([...array])

const arraySemItensDuplicados = [...arraySet]

console.log(arraySet)
console.log(arraySemItensDuplicados)
// IMPORTANTEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!