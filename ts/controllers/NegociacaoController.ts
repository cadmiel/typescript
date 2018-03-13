import { Negociacao, Negociacoes } from './../models/index';
import { MensagemView, View, NegociacoesView } from './../views/index';

export class NegociacaoController {

    protected _inputData: HTMLInputElement;
    protected _inputQuantidade: HTMLInputElement;
    protected _inputValor: HTMLInputElement;
    protected _negociacoes = new Negociacoes();
    protected _negociacoesView = new NegociacoesView('#negociacoesView', true);
    protected _mensagemView = new MensagemView('#mensagemView', true);

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
        
        let data = new Date( this._inputData.value.replace(/-/g,',') );

        if(!this._ehDiaUtil(data)){
            this._mensagemView.update('Somente negociações em dias uteis por favor');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt( this._inputQuantidade.value ),
            parseFloat( this._inputValor.value )
        );
        
        this._negociacoes.adicionar(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicianada com sucesso!!!'); 
        
    }

    private _ehDiaUtil(data: Date)
    {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}