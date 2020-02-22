/// Desafio do curso rocketseat sobre vetores e objetos
/// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md#calendar-entrega

const empresa = {
    Nome: "RocketSeat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço:{
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
};

console.log(`A empresa ${empresa.Nome} está localizada em ${empresa.Endereço.rua}, ${empresa.Endereço.numero}.`)

const developer = {
    nome: "Rafael",
    idade: 25,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
};

console.log(`O usuário ${developer.nome} tem ${developer.idade} anos e usa a tecnologia ${developer.tecnologias[0].nome} com especialidade em ${developer.tecnologias[0].especialidade}.`)
