"use strict";

const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const label = document.getElementById("theme-label");
const storageKey = "sephi-theme";

function applyTheme(theme) {
  const dark = theme === "dark";
  root.dataset.theme = dark ? "dark" : "light";
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  label.textContent = dark ? "Light mode" : "Dark mode";
}

try {
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  }
} catch {
  applyTheme("light");
}

toggle.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
  }
});

document.getElementById("year").textContent = String(new Date().getFullYear());
