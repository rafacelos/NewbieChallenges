// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa
// A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
// peso / (altura * altura)
//Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
//SE o IMC menor que 29.9: Carlos você não está acima do peso;

const nome = 'Rafael'
const sexo = 'Masculino'
const altura = '1.75'
const peso = '87'

const IMC = peso / (altura * altura);

if (IMC >= 30){
    console.log(`${nome} voce está acima do peso.`)
} else {
    console.log(`${nome} você não está acima do peso.`)
}

// Crie um programa para calcular a aposentadoria de uma pessoa.
// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos).
// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:
// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const cidadao = "Rafael"
const sexo2 = 'M'
const idade2 = 70
const contribuicao = 35

const regra = idade2 + contribuicao

if (sexo2 == 'F') {
    if (regra >= 85 && contribuicao >=30) {
        console.log(`${cidadao}, você pode se aposentar!`);
    } else {
        console.log(`${cidadao}, você ainda não pode se aposentar!`);
    }
} else {
    if (regra >= 95 && contribuicao >=35){
        console.log(`${cidadao}, você pode se aposentar!`);
    } else {
        console.log(`${cidadao}, você pode se aposentar!`);
    }

};