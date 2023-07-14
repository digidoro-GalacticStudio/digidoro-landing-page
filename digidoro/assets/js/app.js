
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.menu');

/* menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    menu.classList.toggle('open');
}

window.onclick = () =>{
    menu.classList.remove('bx-x');
    menu.classList.remove('open');
}
 */

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');  
        }
        else{
            entry.target.classList.remove('show');  

        }

    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));