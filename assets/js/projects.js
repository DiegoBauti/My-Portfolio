
const option=document.querySelectorAll('.portfolio__option');
const project=document.querySelectorAll('.gallery__item');
const gallery=document.querySelector('.portfolio__gallery');

document.addEventListener('DOMContentLoaded',()=>{
    changeOption();
   
});


function capturaSeleccion(){
    let selected=null;
    option.forEach(list=>{
        if(list.classList.contains('portfolio__option--active')){
            selected=list;
        }
    });   
    return selected;
}

function changeOption(){
        option.forEach(list=>{
        list.addEventListener('click',()=>{
            let selected=capturaSeleccion();            
            if(!list.classList.contains('portfolio__option--active')){
                selected.classList.remove('portfolio__option--active');
                list.classList.add('portfolio__option--active');
                cleanCategory();
                mostrarCategoria(list);
            }
        })
    })
}

function mostrarCategoria(list){
    let option=list.querySelector('a');

     project.forEach((pro)=>{
        if(option.innerText==pro.dataset.category){
            gallery.appendChild(pro);
        }else if(option.innerText=='Todo'){
            gallery.appendChild(pro);
        }
    });
}

function cleanCategory(){
    while(gallery.firstElementChild){
        gallery.removeChild(gallery.firstElementChild);
    }
}