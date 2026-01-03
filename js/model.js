// LOGIN FORM
const loginBtn = document.getElementById("loginBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

loginBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

//SLIDE MENU
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burgerBtn');
  const slide = document.getElementById('slide');
  const wrapper = document.querySelector('.slide-wrapper');
  
  burger.addEventListener('click', () => {
    wrapper.classList.toggle('show');
});
  burger.addEventListener('click', () => 
    slide.classList.toggle('show'));
});


// TOGGLE SUBMENU
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((item) => {
item.addEventListener("click", () => {
const target = document.getElementById(item.dataset.target);
if (target.style.display === "block") {
target.style.display = "none";
} else {
target.style.display = "block";
}
});
});

// HOVER SYNC MENU DAN MENU-ICONS
const icons = document.querySelector(".menu-icons");
const menu = document.querySelector(".menu");

let isSyncing = false;

function syncScroll(source, target) {
    if (!isSyncing) {
        isSyncing = true;
        target.scrollTop = source.scrollTop;
        setTimeout(() => isSyncing = false, 10);
    }
}

icons.addEventListener("scroll", () => syncScroll(icons, menu));
menu.addEventListener("scroll", () => syncScroll(menu, icons));


// PROMO

const carousel = document.getElementById('promo');
const btnPrev = document.querySelector('.prev-promo');
const btnNext = document.querySelector('.next-promo');

let isDownPromo = false;
let startXPromo;
let scrollLeftPromo;

// ---- Drag / Geser (mouse & touch) ----
carousel.addEventListener('mousedown', (e) => {
    isDownPromo = true;
    startXPromo = e.pageX - carousel.offsetLeft;
    scrollLeftPromo = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => isDown = false);
carousel.addEventListener('mouseup', () => isDown = false);

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; 
    carousel.scrollLeft = scrollLeft - walk;
});

// Touch (mobile)
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
});

// ---- Tombol panah ----
btnNext.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});


//TOP PRODUK

const product = document.getElementById('product');
const productPrev = document.querySelector('.prev-product');
const productNext = document.querySelector('.next-product');

let isDownProduct = false;
let startXProduct;
let scrollLeftProduct;

// ---- Drag / Geser (mouse & touch) ----
product.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - product.offsetLeft;
    scrollLeft = product.scrollLeft;
});

product.addEventListener('mouseleave', () => isDown = false);
product.addEventListener('mouseup', () => isDown = false);

product.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - product.offsetLeft;
    const walk = (x - startX) * 1.5; 
    product.scrollLeft = scrollLeft - walk;
});

// Touch (mobile)
product.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - product.offsetLeft;
    scrollLeft = product.scrollLeft;
});

product.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - product.offsetLeft;
    const walk = (x - startX) * 1.5;
    product.scrollLeft = scrollLeft - walk;
});

// ---- Tombol panah ----
productNext.addEventListener('click', () => {
    product.scrollBy({ left: 300, behavior: 'smooth' });
});

productPrev.addEventListener('click', () => {
    product.scrollBy({ left: -300, behavior: 'smooth' });
});
