let selectors=Array.from(document.querySelectorAll('ul li'));
let menus=Array.from(document.querySelectorAll('.list div'));


selectors.forEach(selector=>{
    selector.addEventListener('click',switchActive);
    selector.addEventListener('click',switchMenu);
});

function switchActive(){
    selectors.forEach(selector=>{
        selector.classList.remove('active');
        this.classList.add('active');
    });
};

function switchMenu(){
    menus.forEach(menu=>{
        menu.style.display='none';
    });

    document.querySelector(this.dataset.name).style.display='block';
}