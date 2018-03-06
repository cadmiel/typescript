declare var $: any;
abstract class View<T> {

    protected _elemento: Element;
    
    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
        console.log($);
    }

    update(model: T)
    {
        this._elemento.innerHTML = this.template(model);
    }

     abstract template(model: T): string

}