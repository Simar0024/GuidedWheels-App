const dots = document.querySelector('.js-nav-dots');

dots.addEventListener('click',()=>{
    if(dots.classList.contains('nav-dots')){
        dots.classList.add('nav-menu-container');
        document.getElementById('hidden').style.display = "block";
        dots.classList.remove('nav-dots');
    }
    else{
        dots.classList.add('nav-dots');
        document.getElementById('hidden').style.display = "none";
        dots.classList.remove('nav-menu-container');
    }
});

document.querySelector('.js-about').addEventListener('click',()=>{
    document.getElementById('about').style.display = 'block';
});

document.querySelector('.js-contact').addEventListener('click',()=>{
    document.getElementById('contact').style.display = 'block';
});