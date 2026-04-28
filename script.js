let modeBtn = document.querySelector('.mode-btn button');
let body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
});