export class Negociacao {
    constructor(
        private readonly _data: Date, 
        private readonly quantidade: number, 
        private readonly valor: number) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this.data.getTime());
        return this._data
    }
}