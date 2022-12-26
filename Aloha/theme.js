var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme(theme = "") {
  let lightTheme = "styles/light.css";
  let darkTheme = "styles/dark.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);
  localStorage.setItem("theme", theme);
}

window.onload = function () {
  const lightTheme = "styles/light.css";
  const darkTheme = "styles/dark.css";

  const theme = localStorage.getItem("theme");

  switch (theme) {
    case "light":
      link.setAttribute("href", lightTheme);
      break;
    case "dark":
      link.setAttribute("href", darkTheme);
      break;
  }
};
