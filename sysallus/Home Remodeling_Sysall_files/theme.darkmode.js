const themeToggle = document.getElementById("blueket");
const cookieName = "blueketTheme";

const setCookie = (name, value, days = 365) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
};

const applyTheme = (isLight) => {
  document.body.classList.toggle("darkmode", !isLight);
  $(".slider").toggleClass("new", isLight);
  $(".sombra-anima").toggleClass("light", isLight);
  themeToggle.checked = isLight;
};

const detectSystemTheme = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  );
};

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = getCookie(cookieName);

  let isLightTheme;

  if (savedTheme === undefined) {
    isLightTheme = detectSystemTheme();
    setCookie(cookieName, isLightTheme);
  } else {
    isLightTheme = savedTheme === "true";
  }

  applyTheme(isLightTheme);
});

themeToggle.addEventListener("change", () => {
  const isLightTheme = themeToggle.checked;
  applyTheme(isLightTheme);
  setCookie(cookieName, isLightTheme);
});
