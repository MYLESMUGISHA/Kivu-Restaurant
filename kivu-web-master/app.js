/*==================== 1.SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  //   // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== 2. REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== 3. SCROLL SECTIONS ACTIVE LINK ====================*/
let sections = document.querySelectorAll("section[id]");

function showActiveSection() {
  const scrollY = window.pageYOffset;
  //   console.log(window.innerWidth);
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", showActiveSection);
/*==================== 4. CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const navBar = document.getElementById("header");

  if (window.scrollY >= 200) {
    navBar.classList.add("scroll-header");
  } else {
    navBar.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);
/*==================== 5. SHOW SCROLL TOP ====================*/

function scrollUpBtn() {
  const scrollTop = document.getElementById("scroll-top");

  //   console.log(this.innerHeight);
  console.log(window.innerHeight);
  //   console.log(this.scrollY);

  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUpBtn);

let buttonForm = document.querySelector(".button");
const contactForm = document.querySelector(".form-section");

function formInput() {
  contactForm.style.display = "block";
  console.log("here am ");
}

buttonForm.addEventListener("click", formInput);

let closeIcon = document.querySelector(".bx-window-close");

function closeForm() {
  contactForm.style.display = "none";
}
closeIcon.addEventListener("click", closeForm);
/*==================== 6. DARK LIGHT THEME ====================*/

let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "bx-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});

/*==================== 7. SCROLL REVEAL ANIMATION ====================*/

/*===== declare a var that holds your animations ======= */

let ourPageAnim = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

/*===== you call a method to that var and then you select which elements that you need to animate ======= */

ourPageAnim.reveal(
  `.home__data, .home__img, .about__data, .about__img,
  .services__content, .menu__content, .contact__data, .contact__button, .footer__content`,

  { interval: 200 }
);
