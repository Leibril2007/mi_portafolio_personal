import { header } from "./components/header/header.js";
import { nav } from "./components/nav/nav.js";
import { projects } from "./components/projects/projects.js";
import { footer } from "./components/footer/footer.js";

let llamarMain = document.querySelector('#main');

llamarMain.appendChild(header());
llamarMain.appendChild(nav());
llamarMain.appendChild(projects());
llamarMain.appendChild(footer());