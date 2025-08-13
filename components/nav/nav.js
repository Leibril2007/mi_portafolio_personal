export function nav() {
    let nav = document.createElement('nav');
    nav.className = "nav";

    // Contenedor izquierdo (Stacks)
    let leftContainer = document.createElement('div');
    leftContainer.className = "nav-left";

    let stacksTitle = document.createElement('h2');
    stacksTitle.className = "stacks-title";
    stacksTitle.textContent = "Stacks";

    let stacksIcons = document.createElement('div');
    stacksIcons.className = "stacks-icons";

    const stackImages = [
        "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
        "https://icon2.cleanpng.com/20180816/ql/7da0574f943d245723f512620b4e3c51.webp",
        "https://images.seeklogo.com/logo-png/33/1/javascript-logo-png_seeklogo-330541.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
        "https://gimgs2.nohat.cc/thumb/f/640/sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-png--compngwingzoupl.jpg",
        "https://images.seeklogo.com/logo-png/27/2/python-logo-png_seeklogo-273830.png",
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
    ];
    
    // Crear los 8 cuadros con imagen adentro
    stackImages.forEach(src => {
        let box = document.createElement('div');
        box.className = "stack-box"; 
    
        let img = document.createElement('img');
        img.src = src;
        img.alt = "stack icon";
        img.className = "stack-img";
    
        box.appendChild(img);
        stacksIcons.appendChild(box);
    });

    leftContainer.appendChild(stacksTitle);
    leftContainer.appendChild(stacksIcons);

    // Contenedor derecho (Portafolio Personal)
    let rightContainer = document.createElement('div');
    rightContainer.className = "nav-right";

    let portfolioTitle = document.createElement('h1');
    portfolioTitle.className = "portfolio-title";
    portfolioTitle.textContent = "💫 Portafolio Personal 💫";

    rightContainer.appendChild(portfolioTitle);

    // Agregar al nav
    nav.appendChild(leftContainer);
    nav.appendChild(rightContainer);

    return nav;
}