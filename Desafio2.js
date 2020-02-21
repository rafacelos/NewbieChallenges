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