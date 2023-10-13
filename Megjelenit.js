import Elem from "./Elem.js";

class Megjelenit {
    #list = [];

    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append('<div>');
        this.tablaElem = szuloElem.find("div");
        console.log(this.tablaElem);
        this.divbeIr();
    }

    divbeIr() {
        this.#list.forEach((elem, index) => {
            new Elem(elem, this.tablaElem, index);
        });
    }

}

export default Megjelenit;
