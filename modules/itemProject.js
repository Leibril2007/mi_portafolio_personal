let projectCounter = 0;

export function cadaProject(nombre, categoriaData, githubPage, github, stacks){

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
    stack.innerText = stacks;
    div.appendChild(stack);

    let categoria = document.createElement('p');
    categoria.className = "descripcion-text";
    categoria.innerText = categoriaData;
    div.appendChild(categoria);


    let a = document.createElement('a');
    a.className = "a-githubPage";
    a.href = githubPage;
    a.innerText = "Ver página";
    div.appendChild(a);

    let botGithub = document.createElement('a');
    botGithub.className = "btn-Github";
    botGithub.href = github;
    botGithub.innerText = "Github";
    div.appendChild(botGithub);

    return div;

}