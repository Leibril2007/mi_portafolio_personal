import { cadaProject } from "../../modules/itemProject.js";
import { dataProyectos } from "../../data/data.js";

export function projects(){

    let section = document.createElement('section');
    section.className = "section";

    let div = document.createElement('div');
    div.className = "lista-proyectos";


    dataProyectos.forEach( (proyecto) => {

        div.appendChild(cadaProject(proyecto.nombre, proyecto.categoria ,  proyecto.githubPage, proyecto.github, proyecto.stacks, proyecto.estado));

    }); 

    section.appendChild(div);

    return section;

}