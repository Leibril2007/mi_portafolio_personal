import { header } from "./components/header/header.js";
import { nav } from "./components/nav/nav.js";

let llamarMain = document.querySelector('#main');

llamarMain.appendChild(header());
llamarMain.appendChild(nav());