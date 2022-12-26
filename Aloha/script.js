$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
  });
});

const selectLanguage = document.querySelector(".change-lang");

selectLanguage.addEventListener("change", (event) => {
  let language = event.target.value;
  setLocale(language);
  localStorage.setItem("language", language);
  setCurrentLanguageClass(language);
});

const Btn = document.querySelector(".second__button");
const portfolioImage = document.querySelector(".second__image");
Btn.addEventListener("click", () => {
  portfolioImage.src = "img/thirdPhoto.jpg";
});

let translations = {};
const setLocale = async (newLocale) => {
  translations = await fetchTranslations(newLocale);
  translatePage();
};
const fetchTranslations = async (newLocale) => {
  const response = await fetch(`assets/lang/${newLocale}.json`);
  if (!response.ok)
    console.log(`Could not fetch translations for locale ${newLocale}`);
  return await response.json();
};
function translatePage() {
  document.querySelectorAll("[data-localization-key]").forEach((element) => {
    let key = element.getAttribute("data-localization-key");
    let translation = translations[key];
    element.innerText = translation;
  });
}
function setLanguageTextButton(language) {
  const currentLanguageButton = document.querySelector(
    "[data-current-language]"
  );
  currentLanguageButton.innerHTML = language;
}
function setCurrentLanguageClass(newLocale) {
  document.querySelectorAll("[data-language]").forEach((item) => {
    if (item.classList.contains("current-language"))
      item.classList.remove("current-language");
  });
  let currentLanguageButton = document.querySelector(
    `[data-language="${newLocale}"]`
  );
  currentLanguageButton.selected = "selected";
}

let defaultLanguage = "ru";
document.addEventListener("click", documentActions);
document.addEventListener("DOMContentLoaded", windowLoad);

function windowLoad() {
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : defaultLanguage;
  setLocale(language);
  setCurrentLanguageClass(language);
}

function documentActions(e) {
  const targetElement = e.target;
}

function translateButtonClick(targetElement) {
  if (targetElement.closest("[data-language]")) {
    let language = targetElement.dataset.language;
    setLocale(language);
    localStorage.setItem("language", language);
    setCurrentLanguageClass(language);
    e.preventDefault();
  }
}
