const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const container = document.querySelector('[data-modal ="container"]')

function openMenu(event){
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
}

function cliqueForaMenu(e){
   if(e.target === this){
      openMenu(e);
   }
}


menuButton.addEventListener('click', openMenu);
container.addEventListener('click', cliqueForaMenu);

