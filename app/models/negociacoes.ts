import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona( negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }
        //Readonly é para apenas ler a lista sem dar o poder de editar
    lista(): readonly Negociacao[] {
        return this.negociacoes
    }
        //É o mesmo do que está acima
    // lista(): ReadonlyArray <Negociacao> {
    //     return this.negociacoes
    // }
}
