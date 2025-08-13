export function header(){

    let head = document.createElement('header');
    head.className = "head";

    // logo 
    let logoYUser = document.createElement('div');
    logoYUser.className = "logo-y-user";

    let logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    let logoImg = document.createElement('img');
    logoImg.src = 'https://i.pinimg.com/1200x/e7/f9/89/e7f9891586ae166c8fbcbc1b17d52f59.jpg'; 
    logoImg.alt = 'Logo';
    logoDiv.appendChild(logoImg);

    logoYUser.appendChild(logoDiv);
    // user 
    let user = document.createElement('h2');
    user.className = 'user';
    user.textContent = 'Leibril2007'; 
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
