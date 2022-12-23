var phoneMask = IMask(
    document.getElementById('imask_phone_number'), {
      mask: '+{7}(700)000-00-00'
});

let button1 = document.getElementsByClassName('nav_a');
let s1 = document.getElementById('s1');
button1.addEventListener('click', smoothscroll);
button2.addEventListener('click', smoothscroll);

function smoothscroll() {
    s1.scrollIntoView({ behavior: 'smooth' });
}