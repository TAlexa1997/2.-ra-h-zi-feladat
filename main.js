import {TODOLIST} from "./adat.js";
import Megjelenit from "./Megjelenit.js";

$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST, szuloELEM);


});
