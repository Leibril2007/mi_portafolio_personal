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
    paragraph.className = "footer-text hol";
    paragraph.textContent = `¡Holi 👋!`;

    let paragraph2 = document.createElement('p');
    paragraph2.className = "footer-text";
    paragraph2.textContent = `Soy Ariel Abigail Subuyuj Ramírez y estoy en mi último año de bachillerato en ciencias y letras con orientación en computación. Me encanta crear páginas web, sobre todo el frontend, aunque también disfruto programar y darle vida a mis proyectos con código. En esta página podrás ver todos mis proyectos, tanto los que hice sola como los que desarrollé en equipo, desde los primeros que realicé hasta los más recientes. ¡Espero que te diviertas explorándolos tanto como yo me divertí creándolos!`;

    leftContainer.appendChild(name);
    leftContainer.appendChild(subtitle);
    leftContainer.appendChild(paragraph);
    leftContainer.appendChild(paragraph2);

    // Contenedor derecho (círculo)
    let rightContainer = document.createElement('div');
    rightContainer.className = "footer-right";

    let circle = document.createElement('div');
    circle.className = "footer-circle";
    
    let img = document.createElement('img');
    img.src = "https://github.com/Leibril2007/Img/blob/main/Logotipo.png?raw=true"; 
    img.alt = "Foto de perfil";
    img.className = "footer-image";
    
    circle.appendChild(img);

    rightContainer.appendChild(circle);

    // Añadir a footer
    footer.appendChild(leftContainer);
    footer.appendChild(rightContainer);

    return footer;
}
