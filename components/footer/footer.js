export function footer() {
    let footer = document.createElement('footer');
    footer.className = "footer";

    // Contenedor izquierdo
    let leftContainer = document.createElement('div');
    leftContainer.className = "footer-left";

    let name = document.createElement('h2');
    name.className = "footer-name";
    name.textContent = "Leibril2007";

    let subtitle = document.createElement('h4');
    subtitle.className = "footer-subtitle";
    subtitle.textContent = "Sobre mí";

    let paragraph = document.createElement('p');
    paragraph.className = "footer-text";
    paragraph.textContent = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

    leftContainer.appendChild(name);
    leftContainer.appendChild(subtitle);
    leftContainer.appendChild(paragraph);

    // Contenedor derecho (círculo)
    let rightContainer = document.createElement('div');
    rightContainer.className = "footer-right";

    let circle = document.createElement('div');
    circle.className = "footer-circle";
    
    let img = document.createElement('img');
    img.src = "https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-2000.png"; 
    img.alt = "Foto de perfil";
    img.className = "footer-image";
    
    circle.appendChild(img);

    rightContainer.appendChild(circle);

    // Añadir a footer
    footer.appendChild(leftContainer);
    footer.appendChild(rightContainer);

    return footer;
}
