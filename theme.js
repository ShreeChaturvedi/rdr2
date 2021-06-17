function toggleTheme() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "colorTheme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

function closeMenu() {
    document.getElementById("menu").classList.add("close-menu");
}

function openMenu() {
    document.getElementById("menu").classList.remove("close-menu");
}