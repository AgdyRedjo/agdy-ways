export function initSubmenu() {
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
}