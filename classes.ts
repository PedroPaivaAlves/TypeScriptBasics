class Data {
    //public dia: number;
    //private mes: number;
    //ano: number;

    //faz atribuição automatica no construtor se já declarar o tipo de acesso nos parâmetros
    //Portanto tudo o que está comentado que seria o padrão se torna desnecessário
    constructor(public dia: number,private mes: number, public ano: number = 2021){
       // this.dia = dia;
        //this.mes= mes;
        //this.ano = ano;
    }
}

const data = new Data(1,1,2111);
const data2 = new Data(1,1);
console.log(data.dia);

//Não é possível acessar fora da classe
console.log(data.mes);

