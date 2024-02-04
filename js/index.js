function toggleMobileMenu() {
    const burger = document.querySelector(".header__mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    burger.addEventListener("click", () => {
        mobileMenu.classList.toggle("mobile-menu--open")
    })
}

toggleMobileMenu()