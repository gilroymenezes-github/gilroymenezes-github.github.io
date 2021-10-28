// you can use app's unique identifier here
const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";

const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// you can change this url as needed
const DARK_THEME_PATH = "styles-dark.css";

const DARK_STYLE_LINK = document.getElementById("dark-theme-style");
const THEME_TOGGLER = document.getElementById("theme-toggler");

let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;
let isReload = false;

let navbarElement = document.querySelector('.navbar');
let navbarBrandElement = document.querySelector('.navbar-brand');
let footerElement = document.querySelector('.footer'); 
let footerTextElement = document.querySelector('.footer-text');
let buttons = document.querySelectorAll('.btn');

const enableDarkTheme = () => {
    DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
    THEME_TOGGLER.innerHTML = "🌙 Dark";
    navbarElement.classList.toggle("bg-dark");
    navbarBrandElement.classList.toggle("text-light");
    footerElement.classList.toggle("bg-dark");
    footerTextElement.classList.toggle("text-light");
    buttons.forEach(b => b.classList.toggle("text-light"));
}
  
const disableDarkTheme = () => {
    DARK_STYLE_LINK.setAttribute("href", "");
    THEME_TOGGLER.innerHTML = "🌞 Light";
    navbarElement.classList.toggle("bg-light");
    navbarBrandElement.classList.toggle("text-dark");
    footerElement.classList.toggle("bg-light");
    footerTextElement.classList.toggle("text-dark");
    buttons.forEach(b => b.classList.toggle("text-dark"));
}


// check if user has already selected dark theme earlier
if (isDark) {
  enableDarkTheme();
} else {
  disableDarkTheme();
}

/**
 * Apart from toggling themes, this will also store user's theme preference in local storage.
 * So when user visits next time, we can load the same theme.
 *
 */
function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
  const META = { isDark };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
  window.location.reload();
}

