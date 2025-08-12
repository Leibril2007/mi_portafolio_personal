export function header(){

    let head = document.createElement('header');
    head.className = "head";

    // logo 
    let logoYUser = document.createElement('div');
    logoYUser.className = "logo-y-user";

    let logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    let logoImg = document.createElement('img');
    logoImg.src = 'https://makerworld.bblmw.com/makerworld/model/DSM00000000102991/design/2023-12-22_ph7q5t3tgphb.jpg'; 
    logoImg.alt = 'Logo';
    logoDiv.appendChild(logoImg);

    logoYUser.appendChild(logoDiv);
    // user 
    let user = document.createElement('h2');
    user.className = 'user';
    user.textContent = 'Nombre de usuario'; 
    logoYUser.appendChild(user);

    // botonGit
    let botonGit = document.createElement('a');
    botonGit.className = 'botonGit';
    botonGit.textContent = 'GitHub';
    botonGit.href = "https://github.com/Leibril2007";
    botonGit.target = "_blank";

    head.appendChild(logoYUser);
    head.appendChild(botonGit);

    return head;
}
