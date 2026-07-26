type Theme = "dark" | "light";

export function getThemeInitScript(
  storageKey = "mode",
  defaultTheme: Theme = "dark"
) {
  return `(function(){try{var stored=localStorage.getItem(${JSON.stringify(storageKey)});var theme=stored==="dark"||stored==="light"?stored:${JSON.stringify(defaultTheme)};var root=document.documentElement;root.classList.remove("light","dark");root.classList.add(theme);}catch(e){}})();`;
}
