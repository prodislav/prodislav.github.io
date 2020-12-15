function changeCss() {
    var navElement = document.querySelector(".header__wrapper");

    this.scrollY > 500 ? navElement.classList.add("header-scroll") : navElement.classList.remove("header-scroll");
}
window.addEventListener("scroll", changeCss);