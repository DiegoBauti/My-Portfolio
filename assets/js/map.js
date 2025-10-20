document.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML=`
            <iframe class="contact__iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1128.154377068501!2d-77.16428530849895!3d-11.776659504120133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91067f89bc52eeff%3A0x128d5039bae33916!2sClub%20Social%20Chacas!5e0!3m2!1ses-419!2spe!4v1760629050425!5m2!1ses-419!2spe"  style="border:0;" referrerpolicy="no-referrer-when-downgrade"></iframe>  
        
        `;
    }, 500);

})