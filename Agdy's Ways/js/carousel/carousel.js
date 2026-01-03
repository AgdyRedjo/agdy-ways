export function initCarousel() {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.track');
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');

        let isDown = false;
        let startX;
        let scrollLeft;

        // ---- Drag / Geser (mouse & touch) ----
        track.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => isDown = false);
        track.addEventListener('mouseup', () => isDown = false);

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5; 
            track.scrollLeft = scrollLeft - walk;
        });

        // Touch (mobile)
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5;
            track.scrollLeft = scrollLeft - walk;
        });

        // ---- Tombol panah ----
        next.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        });

        prev.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
    });
    

}

