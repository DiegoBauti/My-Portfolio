document.addEventListener('DOMContentLoaded',()=>{
    const certi__sql = document.querySelector('[data-category="sql2__uni"]');
    const certi__python = document.querySelector('[data-category="python__udemy"]');

    certi__sql.addEventListener('click',()=>{
        const url = certi__sql.dataset.url;
        window.open(url, '_blank');
    })
    certi__python.addEventListener('click',()=>{
        url = certi__python.dataset.url;
        window.open(url, '_blank');
    })
});