let projectCounter = 0;

export function cadaProject(nombre, categoriaData, githubPage, github, stacks,estadoData){

    projectCounter++;

    let div = document.createElement('div');
    div.className = "div-item";

    let indiceDiv = document.createElement('div');
    indiceDiv.className = "indice-div";
    indiceDiv.innerText = projectCounter;
    div.appendChild(indiceDiv);

    let titNombre = document.createElement('h1');
    titNombre.className = "tit-Nombre";
    titNombre.innerText = nombre;
    div.appendChild(titNombre);

    let stack = document.createElement('div');
    stack.className = "stack-div";
    stack.innerText = "[ "+stacks+" ]";
    div.appendChild(stack);

    let categoria = document.createElement('p');
    categoria.className = "categoria";
    categoria.innerText = categoriaData;
    div.appendChild(categoria);

    let estado = document.createElement('div');
    estado.className = "estado";
    estado.innerText = estadoData;

    if (estadoData === "Finalizado") {
        estado.classList.add("estado-fin");
    } else if (estadoData === "En proceso") {
        estado.classList.add("estado-enProceso");
    }

    div.appendChild(estado);


    let a = document.createElement('a');
    a.className = "a-githubPage";
    a.href = githubPage;
    a.innerText = "Ver";
    a.target = "_blank";
    div.appendChild(a);

    let botGithub = document.createElement('a');
    botGithub.className = "btn-Github";
    botGithub.href = github;
    botGithub.innerText = "Github";
    botGithub.target = "_blank";
    div.appendChild(botGithub);

    return div;

}