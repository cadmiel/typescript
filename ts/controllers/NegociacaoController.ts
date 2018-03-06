class NegociacaoController {

    protected _inputData: HTMLInputElement;
    protected _inputQuantidade: HTMLInputElement;
    protected _inputValor: HTMLInputElement;
    protected _negociacoes = new Negociacoes();
    protected _negociacoesView = new NegociacoesView('#negociacoesView');
    protected _mensagemView = new MensagemView('#mensagemView');

    constructor()
    {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event)
    {
        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date( this._inputData.value.replace(/-/g,',') ),
            parseInt( this._inputQuantidade.value ),
            parseFloat( this._inputValor.value )
        );
        
        this._negociacoes.adicionar(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicianada com sucesso!!!'); 
        
    }

}