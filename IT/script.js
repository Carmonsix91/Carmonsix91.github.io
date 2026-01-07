// MENU MOVIL
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

burger.addEventListener('click', () => { 
    nav.classList.toggle('nav-active'); 
});

dropdowns.forEach(drop => {
    drop.addEventListener('click', () => {
        if(window.innerWidth <= 1024) drop.classList.toggle('active');
    });
});

// FUNCIONES MODALES
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquear scroll fondo
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Activar scroll fondo
}

// CERRAR AL HACER CLIC FUERA DEL MODAL
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}