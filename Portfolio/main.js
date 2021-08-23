
const toggleBtn = document.querySelector("input[type=checkbox]");
const themeIcon = document.querySelector("#theme-icon")

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        themeIcon.innerHTML = '<i class="fas fa-sun fa-2x"></i>'
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.innerHTML = '<i class="fas fa-moon fa-2x"></i>'

    }
}

toggleBtn.addEventListener('change', switchTheme, false);


