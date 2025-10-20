document.addEventListener('DOMContentLoaded',()=>{
    let button = document.querySelector('.layout__menu-toggle');
    let aside = document.querySelector('.layout__aside');
    let iconBars = document.querySelector('.layout__menu-toggle .fa-bars');
    let iconMarks = document.querySelector('.layout__menu-toggle .fa-xmark');
    
    button.addEventListener('click',()=>{
        let visible=document.querySelector('.layout__aside--visible')

        if(!visible){
            aside.classList.add('layout__aside--visible');
            iconBars.style.opacity=0;
            iconMarks.style.opacity=1;
        }else{
            aside.classList.remove('layout__aside--visible');
            iconBars.style.opacity=1;
            iconMarks.style.opacity=0;
        }
    })

    window.addEventListener('resize',()=>{
        let size=parseInt(document.body.clientWidth);

        if(size<=1060){
            aside.classList.remove('layout__aside--visible');
            iconBars.style.opacity=1;
            iconMarks.style.opacity=0;

        }
        
    })
})