export function initHoverSync() {
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
}
