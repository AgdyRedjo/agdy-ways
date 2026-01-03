
export function initSidebarToggle() {
const burger = document.getElementById('burgerBtn');
  const slide = document.getElementById('slide');
  const wrapper = document.querySelector('.slide-wrapper');
  
  burger.addEventListener('click', () => {
    wrapper.classList.toggle('show');
});
  burger.addEventListener('click', () => 
    slide.classList.toggle('show'));
}