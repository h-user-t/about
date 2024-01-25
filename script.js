document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('sun');
    });
});
