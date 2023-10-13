class Elem {
    #adat = {};

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
    }

    #sor() {
        let txt = "<div>";
        for (const key in this.#adat) {
            if (Object.hasOwnProperty.call(this.#adat, key)) {
                const element = this.#adat[key];
                txt += `<p class="beleir">${element}</p>`;
            }
        }
        txt += "</div>";
        this.tablaElem.append(txt);

        const pElemek = this.tablaElem.find(".beleir");
        pElemek.on('click', function() {
            const elementText = $(this).text();
            const newContent = elementText.trim() === "" ? "gey X" : elementText;
            $(this).text(newContent);
        });
    }
}

export default Elem;






  
  
