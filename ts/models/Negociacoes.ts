class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void
    {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]
    {
        return [].concat(this._negociacoes);
    }
}