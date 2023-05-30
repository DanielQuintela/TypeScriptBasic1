export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        //É o mesmo do que está acima
        // lista(): ReadonlyArray <Negociacao> {
        //     return this.negociacoes
        // }
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Readonly é para apenas ler a lista sem dar o poder de editar
    lista() {
        return this.negociacoes;
    }
}
