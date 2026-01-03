import { initSidebarToggle } from "./sidebar/toggleSidebar.js";
import { initLoginPopup } from "./popup/loginPopup.js";
import { initSubmenu } from "./sidebar/submenu.js";
import { initHoverSync } from "./menu/hoverSync.js";
import { initCarousel } from "./carousel/carousel.js";
document.addEventListener("DOMContentLoaded", () => {
    initSidebarToggle();
    initLoginPopup();
    initSubmenu();
    initHoverSync();
    initCarousel();
});
