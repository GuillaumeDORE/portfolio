//Navbar sticky on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const logo = document.querySelector(".header__left");
    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("appear", window.scrollY > 0);
});

//Navbar hamburger menu
const toggleButton = document.querySelector(".header__toggle-button");
const navbar = document.querySelector(".navbar");
const navbarLink = document.querySelectorAll(".navbar__link");

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
});
navbarLink.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
});

//Skills show on button click
const skillsButton = document.getElementById("more-skills");
const skillsNotShow = document.querySelectorAll(".skills__not-show");
skillsButton.addEventListener("click", () => {
    skillsNotShow.forEach(skill => {
        skill.classList.remove("hidden");
    });
    skillsButton.style.display = "none";
});

//Scroll-out
ScrollOut({
    targets: '.about, .skills, .projects'
})