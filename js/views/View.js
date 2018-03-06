class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
        console.log($);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
