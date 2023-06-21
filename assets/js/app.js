
window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky', window,this.scrollY > 0);
});