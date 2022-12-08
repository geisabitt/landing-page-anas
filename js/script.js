const buttonMobile = document.getElementById('buttonMobile');

function toggleMenu() {
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}
buttonMobile.addEventListener('click', toggleMenu)
