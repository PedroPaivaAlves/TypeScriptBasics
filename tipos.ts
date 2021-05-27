// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 31;
const nota: number = 5.5;

// String
const nome: string = "Pedro";

// Array
const idades: number[] = [23, 18, 22];
const outraForma: Array<number> = [23, 18, 22];

// Tuple
const tupla: [string, string, number] = ["Pedro", "Davi", 2];

// Enum
enum StatusAprovacao {
    Aprovado = "01",
    Pendente = "02",
    Rejeitado = "03"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;


// Any
const retornoDaAPI: any[] = [123, "Vitor", false];

// Void
function printNaTela(msg: string): void{
    console.log(msg)
}

// Null e Undefined

const u: undefined = undefined;
const n: null = null;

//Object
function criar(objeto: object){
    //...
}

criar({
    propriedade: 1,
})


// Never
function loopinfinito(): never {
    while(true){

    }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}


// Union Types
const union: string | number = "bla";

function exibirNota(nota: number | string) {
    console.log("A nota é "+nota)
}

exibirNota("10");
exibirNota(10);


// Alias
// OBS: é melhor usar interfaces
type Funcionarios = {
    nome: string,
    idade: number,
    salario: number,
    dataNascimento: Date
}

const funcionarios: Funcionarios[] = [{
    nome: "Pedro",
    idade: 31,
    salario: 10000000,
    dataNascimento: new Date()
},
{
    nome: "Davi",
    idade: 29,
    salario: 10000000,
    dataNascimento: new Date()
}];

//Permitir que variável seja nula
let altura: number | null = 1.6;
altura = null;

type testeNulloption = {
    nome: string;
    telefone: string;
    idade?: number;
}

const contato: testeNulloption = {
    nome: "Pedro",
    telefone: "123",
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
<number> minhaIdade.toString();

const input = document.getElementById("input1") as HTMLInputElement;
const input2 = <HTMLInputElement>document.getElementById("input2");
