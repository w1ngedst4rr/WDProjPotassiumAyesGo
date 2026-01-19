let questionnum = 0
let container = document.getElementById('flashcard-container');
let qgrouplist = []
let agrouplist = []
let qgroup = [];
let agroup = [];
let pastY;

function update() {
    localStorage.clear();
}

window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 150);
    });
});
