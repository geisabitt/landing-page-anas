const buttonMobile = document.getElementById('buttonMobile');
const btnGaleria = document.getElementById('btnGaleria');
const btnContato = document.getElementById('btnContato');
const btnInscreva = document.getElementById('btnInscreva');

function toggleMenu() {
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
buttonMobile.addEventListener('click', toggleMenu)
btnGaleria.addEventListener('click', toggleMenu)
btnContato.addEventListener('click', toggleMenu)
btnInscreva.addEventListener('click', toggleMenu)
